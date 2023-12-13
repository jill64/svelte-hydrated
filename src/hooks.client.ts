import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://88e02a6a9e0422bda6ce1ea7f5b48151@o4505814639312896.ingest.sentry.io/4506390140289024'
)

export const handleError = onError()
