<script>
    export let data;
</script>

<section>
    <div class="card">
        <img src="{data.item.images[0].thumbnail}" alt="test"/>
        <div class="meta">
            <h3>{data.item.name}</h3>
            <p>Rp{data.item.prices.price}</p>
        </div>
    </div>
</section>
