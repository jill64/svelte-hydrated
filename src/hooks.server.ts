import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://88e02a6a9e0422bda6ce1ea7f5b48151@o4505814639312896.ingest.sentry.io/4506390140289024'
)

export const handle = onHandle(hooks)
export const handleError = onError()
