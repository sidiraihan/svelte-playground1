<script>
    export let data;
    import SliderProduct from '$lib/SliderProduct.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
</script>

<section>
    <div class="card">
        <img src="{data.item.images[0].thumbnail}" alt="test"/>
        <div class="meta">
            <h3>{data.item.name}</h3>
            <p>{@html data.item.price_html}</p>
            {#if data.item.description}
                <div class="description">{@html data.item.description}</div>
            {/if}
        </div>
    </div>
</section>
<QueryClientProvider>
	<SliderProduct title="{data.item.categories[0].name}" expand="{false}" categoryId="{data.item.categories[0].id}"/> 
</QueryClientProvider>


<svelte:head>
  <title>{data.item.name}</title>
</svelte:head>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        gap: 1vw;
        margin-top: 1vw;

        img {
            flex: 1;
            background-color: #f2f2f2;
            border-radius: 8px;
        }

        .meta {
            flex: 1;

            h3 {
                font-size: 17px;
            }

            .description {
                padding: 2vw;
                background: #f1f1f1;
                border-radius: 8px;
                color: #333;
                display: flex;
                flex-direction: column;
                gap: 3vh;
            }
        }
    }
</style>