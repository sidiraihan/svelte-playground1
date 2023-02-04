<script>
    export let item = [];
    export let skeleton = false;
    export let description = true;
    export let key;
    export let ref;
</script>

{#if skeleton}
<div class="card skeleton">
    <a href="#loading"><span data-id="{key}"></span></a>
</div>
{:else}
<div class="card" data-id="{key}">
    <a href="/product/{item.id}" {ref}>
        <img loading={(key < 3 ? 'eager': 'lazy')} src="{item.images[0].thumbnail}" alt="test"/>
        <div class="meta">
            <h3>{item.name}</h3>
            <p>Rp{item.prices.price}</p>
            {#if description}
            <p id="description">{item.description}</p>
            {/if}
        </div>
    </a>
</div>
{/if}

<style lang="scss">
    .card {

        &.skeleton {
            background-color: #fafafa;
            border: transparent;
        }

        a {
            width: 150px;
            height: 240px;
            display: flex;
            flex-direction: column;
            border: 1px solid #e6e6e6aa;
            .meta {
                h3 {
                font-size: 11px;
            }
                p {
                    font-size: 12px;
                }
            }
        }
        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            background-color: #ccc;
        }
    }
</style>