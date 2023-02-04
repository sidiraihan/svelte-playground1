<script>
    import { useQuery } from '@sveltestack/svelte-query';
    export let current = null;

    const queryResult = useQuery(['products'], () =>
     fetch(`/api/product/category`).then(res =>
       res.json()
     )
    )

</script>


<section>
    <div class="content">
        {#if $queryResult.isLoading}
            <span>loading...</span>
        {:else if $queryResult.error}
            <span>An error has occurred: {$queryResult.error.message}</span>
        {:else}
             <nav>
            {#each $queryResult.data as category, i}
                <a class:selected="{current == category.id}" on:click="{() => current = category.id}" href="/category/{category.slug}?id={category.id}">{category.name}</a>
            {/each} 
            </nav>
        {/if}    
    </div>
</section>

<style lang="scss">
    section {
        .content {
            margin: 1vh 0 0 0;
            height: 25vh;
            overflow: scroll;
            box-shadow: 1px -6px 14px -12px rgba(0, 0, 0, 0.508) inset;

            nav {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 1vw;
                margin-bottom: 1vh;

                a {
                    flex: 1;
                    font-size: 13px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 5px;
                    text-align: center;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    text-decoration: none;
                    color: black;

                    &.selected {
                        background-color: black;
                        color: white;
                    }
                }
            }
        }
    }
</style>



