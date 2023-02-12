<svelte:head>
  <title>our Homepage</title>
</svelte:head>
<script>
	import CategoryProduct from '$lib/CategoryProduct.svelte';
	import SliderProduct from '$lib/SliderProduct.svelte';
	// export let data;
</script>
<CategoryProduct/> 
<SliderProduct title="Diskon 50%" expand="{false}" categoryId="57847"/> 
<SliderProduct title="Gratisan" expand="{true}" categoryId="88340"/>  
<SliderProduct title="Spesial Imlek" expand="{false}" categoryId="88512"/>

