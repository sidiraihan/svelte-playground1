

<script>
import CardProduct from '$lib/CardProduct.svelte';
export let data;
console.info(data)
</script>

<svelte:head>
  <title>{data.props.slug}</title>
</svelte:head>

<section>
    {#each data.props.item as product, i}
        <CardProduct item={product} key={i + 1} description="{false}" ref="srp"/>
    {/each} 
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1vh;
        padding-top: 1vh;

        @media only screen and (max-width: 768px) {
            :global([ref=srp]) {
                width: 198px !important;
	        }
            :global([ref=srp] img) {
                width: 100% !important;
                height: 180px !important;
            }
        }
    }
</style>
