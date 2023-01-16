<script>
	import CardProduct from '$lib/CardProduct.svelte';

    export let title = '';

    let return_from_api = [
		{ id: 1, name: 'hand bouquet', price: 500000, image:'https://via.placeholder.com/150' },
		{ id: 2, name: 'bunga papan', price: 500000,image:'https://via.placeholder.com/150' },
		{ id: 3, name: 'parcel', price: 800000,image:'https://via.placeholder.com/150' },
		{ id: 4, name: 'bp-1', price: 200000,image:'https://via.placeholder.com/150' },
		{ id: 5, name: 'cake', price: 250000,image:'https://via.placeholder.com/150' }
	];
</script>


<section>
    <div class="content">
        <h2>{title}</h2>
    </div>
    <div class="slider">
        {#each return_from_api as product (product.id)}
        <CardProduct item={product}/>
    {/each}
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        gap: 1vw;
        position: relative;
        padding-top: 1vw;
        
        .content {
            background-color: #ccc;
            display: flex;
            align-items: center;
            width: 90px;
            height: 240px;
            justify-content: center;
            text-align: center;
            writing-mode: vertical-rl; 
        }

        .slider {
            display: flex;
            overflow-x: scroll;
            gap: 1vw;
            flex: 1;
        }
    }
</style>



