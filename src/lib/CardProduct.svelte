<script>
    export let item = [];
</script>

<div class="card">
    <a href="/product">
        <img loading="lazy" src="{item.image}" alt="test"/>
        <p>{item.name}</p>
        <p>{item.price}</p>
    </a>
</div>

<style lang="scss">
    .card {
        a {
            width: 150px;
            display: flex;
            flex-direction: column;
        }
        img {
            background-color: #ccc;
            width: 150px;
            height: 150px;
        }
    }
</style>