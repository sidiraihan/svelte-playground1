<svelte:head>
  <title>our Homepage</title>
</svelte:head>
<script>
	import FormSearchEmail from '$lib/FormSearchEmail.svelte';
	import SliderProduct from '$lib/SliderProduct.svelte';
	import CategoryProduct from '$lib/CategoryProduct.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
</script>

<h1>our home</h1>
<FormSearchEmail placeholder="type email address and hit Go"/>  
<QueryClientProvider>
	<CategoryProduct/> 
	<SliderProduct title="Diskon 50%" expand="{false}" categoryId="62518"/> 
	<SliderProduct title="Gratisan" expand="{true}" categoryId="62522"/>  
	<SliderProduct title="Spesial Imlek" expand="{false}" categoryId="62525"/>  
</QueryClientProvider>


