<script>
	import CardProduct from '$lib/CardProduct.svelte';
    import { useQuery } from '@sveltestack/svelte-query';

    export let title = '';
    export let expand = false;
    export let categoryId;

    let toggle = expand;

    const queryResult = useQuery(['products', categoryId], () =>
     fetch(`/api/product/category/${categoryId}`).then(res =>
       res.json()
     )
    )

</script>


<section class="{toggle ? 'expand' : ''}">
    <div class="content"
	on:click="{() => toggle = !toggle}">
        <h2>{title}</h2>
        {toggle ? '<' : '>'}
    </div>
    <div class="slider">
        {#if $queryResult.isLoading}
            {#each Array(3) as _, index (index)}
                <CardProduct skeleton="true"/>
            {/each}
        {:else if $queryResult.error}
            <span>An error has occurred: {$queryResult.error.message}</span>
        {:else}
            {#each $queryResult.data as product, i}
                <CardProduct item={product} key={i + 1}/>
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



