import { DATABASE_URL } from '$env/static/private'
import { neon } from '@neondatabase/serverless'

export default neon(DATABASE_URL)
