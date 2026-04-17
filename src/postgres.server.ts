import { env } from '$env/dynamic/private'
import { neon } from '@neondatabase/serverless'

export default neon(env.DATABASE_URL!)
