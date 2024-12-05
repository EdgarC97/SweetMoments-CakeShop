# Use PHP 8.2 FPM as the base image
FROM php:8.2-fpm

# Install necessary dependencies for PHP and the project
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    git \
    libzip-dev \
    unzip \
    libicu-dev \
    curl \
    nginx \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip intl pdo pdo_mysql

# Set the working directory
WORKDIR /var/www

# Copy the source code
COPY . .

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Composer dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install npm dependencies and build assets
RUN npm install && npm run build

# Copy NGINX configuration
COPY nginx/default.conf /etc/nginx/sites-available/default
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/

# Asegurarse de que los directorios 'storage' y 'bootstrap/cache' tengan los permisos adecuados
# Asegurarse de que www-data tenga permisos de lectura y escritura en esos directorios
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Configure PHP-FPM to use UNIX socket
RUN sed -i 's/listen = 127.0.0.1:9000/listen = \/var\/run\/php-fpm.sock/' /usr/local/etc/php-fpm.d/www.conf \
    && sed -i 's/;listen.owner = www-data/listen.owner = www-data/' /usr/local/etc/php-fpm.d/www.conf \
    && sed -i 's/;listen.group = www-data/listen.group = www-data/' /usr/local/etc/php-fpm.d/www.conf \
    && sed -i 's/;listen.mode = 0660/listen.mode = 0660/' /usr/local/etc/php-fpm.d/www.conf

# Expose port 80
EXPOSE 80

# Start NGINX and PHP-FPM
CMD sh -c "nginx -g 'daemon off;' & php-fpm"

