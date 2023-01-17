<script>
    import { onMount } from 'svelte';
	import CardProduct from '$lib/CardProduct.svelte';

    export let title = '';
    export let expand = false;
    export let categoryId;

    let products;
    let toggle = expand;

    const get = async (url, params) => {
    const response = await fetch(url + '?' + new URLSearchParams(params))
    const data = await response.json()
    return data
    }

    onMount(async () => {
        const data = await get('https://prestisa.id/wp-json/wc/store/products', {
            category: categoryId,
        })

        products = data;

    });
    

</script>


<section class="{toggle ? 'expand' : ''}">
    <div class="content"
	on:click="{() => toggle = !toggle}">
        <h2>{title}</h2>
        {toggle ? '<' : '>'}
    </div>
    <div class="slider">
        {#if products === undefined}
            {#each Array(3) as _, index (index)}
                <CardProduct skeleton="true"/>
            {/each}
        {:else}
            {#each products as product (product.id)}
                <CardProduct item={product}/>
            {/each}
        {/if}    
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        gap: 1vw;
        position: relative;
        padding-top: 1vw;
        &.expand {
            flex-direction: column;
            
            .content {
                width: 100%;
                justify-content: center;
                gap: 1vw;
                h2 {
                    writing-mode: unset;
                }
            }
        }
        
        .content {
            background-color: #ccc;
            display: flex;
            align-items: center;
            width: 90px;
            height: 240px;
            justify-content: center;
            text-align: center;
            transition: width 90ms;
            transition-timing-function: ease;
            
            h2 {
                writing-mode: vertical-rl;
            }
        }

        .slider {
            display: flex;
            overflow-x: scroll;
            gap: 1vw;
            flex: 1;
        }
    }
</style>



