<script lang="ts">
  import '../app.css'

  import type { PageProps } from './$types'

  let { data }: PageProps = $props()
</script>

{data.version}
