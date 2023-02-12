

<script>
import { onMount } from 'svelte';
import {useInfiniteQuery } from '@sveltestack/svelte-query';
import CardProduct from '$lib/CardProduct.svelte';

export let data;

const item = [];


const fetchProducts = async ({ pageParam = 1 }) => {
    onMount(async () => {
        const res = await fetch(`/api/product/category/${data.props.id}?page=${pageParam}`);
        item['data'] = await res.json();
        console.info(item['data'].length);
        if(item['data'].length > 0) {
            item['nextPage'] = pageParam+1;
        }
    });
    return item;
}

const queryResult = useInfiniteQuery('products', fetchProducts, {
     getNextPageParam: lastGroup => lastGroup.nextPage || undefined,
})

$: queryResult.setEnabled(true)

</script>

<svelte:head>
  <title>{data.props.slug}</title>
</svelte:head>

<section>
    {#if $queryResult.status === 'loading'}
        {#each Array(3) as _, index (index)}
            <CardProduct skeleton="true" key={index} ref="find"/>
        {/each}
    {:else if $queryResult.status === 'error'}
        <span>Error: {$queryResult.error.message}</span>
    {:else}
        {#each $queryResult.data.pages as page}
            {#each page.data as product, i}
                <CardProduct item={product} key={i + 1} description="{false}" ref="find"/>
            {/each}
        {/each}
    {/if}

    {#if $queryResult.isFetchingNextPage} 
        {#each Array(3) as _, index (index)}
            <CardProduct skeleton="true" key={index} ref="find"/>
        {/each}
    {/if}

    <button
            on:click={() => $queryResult.fetchNextPage()}
            disabled={!$queryResult.hasNextPage || $queryResult.isFetchingNextPage}>
            {#if $queryResult.isFetching}
            Loading more...
            {:else if $queryResult.hasNextPage}
            Load More
            {:else}Nothing more to load{/if}
        </button>
   
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1vh;
        padding-top: 1vh;

        button {
            cursor: pointer;
            margin: 3vh 0 3vh 0;
            width: 100%;
            background-color: transparent;
            padding: 5px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 8px;
            text-decoration: none;
            color: black;
        }

        :global([ref=find]) {
            min-width: 400px !important
        }
        :global([ref=find] img) {
            width: 100% !important;
            height: 180px !important;
        }
    }
</style>
