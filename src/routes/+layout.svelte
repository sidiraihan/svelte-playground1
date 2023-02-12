<script>
	import '../app.scss';
	import Nav from '$lib/Navbar.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
</script>
<QueryClientProvider>
<Nav />
<slot />
</QueryClientProvider>