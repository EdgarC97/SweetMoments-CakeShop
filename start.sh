#!/bin/bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
nginx -g 'daemon off;' & php-fpm