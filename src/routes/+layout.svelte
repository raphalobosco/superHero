<script>
  import { globals } from "svelte/internal";
  import "../app.scss";
</script>

<slot />

<style global>
  body {
    background-image: linear-gradient(to top, #243949 0%, #18232c 100%);
  }
</style>
