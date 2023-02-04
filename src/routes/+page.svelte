<svelte:head>
  <title>our Homepage</title>
</svelte:head>
<script>
	import CategoryProductSSR from '$lib/CategoryProductSSR.svelte';
	import SliderProduct from '$lib/SliderProduct.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	export let data;
</script>
<CategoryProductSSR data={data.props.categories}/> 
<QueryClientProvider>
	<SliderProduct title="Diskon 50%" expand="{false}" categoryId="87512"/> 
	<SliderProduct title="Gratisan" expand="{true}" categoryId="62522"/>  
	<SliderProduct title="Spesial Imlek" expand="{false}" categoryId="62525"/>  
</QueryClientProvider>


