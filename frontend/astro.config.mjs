// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true, // important for external access
        allowedHosts: [
            'tar-dresses-pull-budgets.trycloudflare.com'
        ]
    }
});
