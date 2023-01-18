<script>
	import CardProduct from '$lib/CardProduct.svelte';

    export let title = '';
    export let expand = false;
    export let categoryId;

    let products;
    let toggle = expand;

    async function initProduct() {        
        const response = await fetch(`/api/product/category/${categoryId}`)
        products = await response.json()
    }

</script>


<section class="{toggle ? 'expand' : ''}">
    <div class="content"
	on:click="{() => toggle = !toggle}">
        <h2>{title}</h2>
        {toggle ? '<' : '>'}
    </div>
    <div class="slider">
        {#await initProduct() }
            {#each Array(3) as _, index (index)}
                <CardProduct skeleton="true"/>
            {/each}
        {:then}
            {#each products as product, i}
                <CardProduct item={product} key={i + 1}/>
            {/each}
        {:catch error}
            <span>{error}</span>   
        {/await}    
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



