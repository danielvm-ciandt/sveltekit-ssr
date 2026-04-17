import { getsql } from '../postgres.server'

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const sql = getsql()
  const response = await sql`SELECT version()`
  const { version } = response[0]
  return {
    version,
  }
}
