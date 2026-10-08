// Secrets are set with `wrangler secret put`, not in wrangler.jsonc, so `wrangler types` can't see them.
interface Env {
    TURNSTILE_SECRET: string
}

declare namespace Cloudflare {
    interface Env {
        TURNSTILE_SECRET: string
    }
}
