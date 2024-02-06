<script lang="ts">
   import type {PageData} from './$types';

   export let data: PageData;
</script>

<h1>
   You made it!!!
</h1>
<p>
   {data.session.user.email}
</p>
