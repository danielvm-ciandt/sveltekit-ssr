import { env } from '$env/dynamic/private'
import { neon } from '@neondatabase/serverless'

export function getsql() {
  return neon(env.DATABASE_URL!)
}
