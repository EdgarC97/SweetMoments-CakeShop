import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { route } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob('./Pages/**/*.tsx'),
            ),
        setup: ({ App, props }) => {
            // @ts-ignore
            global.route = (name: string, params?: any, absolute?: boolean): string => {
                const ziggy = props.initialPage.props.ziggy as any;
                return route(name, params, absolute, {
                    ...ziggy,
                    location: ziggy.location ? new URL(ziggy.location) : undefined,
                });
            };

            return <App {...props} />;
        },
    }),
);

