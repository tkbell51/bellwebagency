import { handleStartProject } from './start-project'

/**
 * Cloudflare Worker for bellwebagency.com.
 * Static pages are served from the prerendered Nuxt build (env.ASSETS);
 * only /api/* reaches this code (see `run_worker_first` in wrangler.jsonc).
 */
export default {
    async fetch(request, env, ctx): Promise<Response> {
        const { pathname } = new URL(request.url)

        if (pathname === '/api/start-project') return handleStartProject(request, env, ctx)
        if (pathname.startsWith('/api/')) return Response.json({ ok: false, error: 'Not found' }, { status: 404 })

        return env.ASSETS.fetch(request)
    },
} satisfies ExportedHandler<Env>
