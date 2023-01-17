<script>
    export let item = [];
    export let skeleton = false;
</script>

{#if skeleton}
<div class="card">
    <a href="#"></a>
</div>
{:else}
<div class="card">
    <a href="/product/{item.id}">
        <img loading="lazy" src="{item.images[0].thumbnail}" alt="test"/>
        <div class="meta">
            <h3>{item.name}</h3>
            <p>Rp{item.prices.price}</p>
            <p>{item.description}</p>
        </div>
    </a>
</div>
{/if}

<style lang="scss">
    .card {
        a {
            width: 150px;
            height: 250px;
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
            background-color: #ccc;
            width: 150px;
            height: 150px;
        }
    }
</style>