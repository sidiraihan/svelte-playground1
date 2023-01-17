export async function GET({ params }) {
    // const post = await getPostFromDatabase(params.slug);
    console.info(params);
    const res = await fetch(`https://prestisa.id/wp-json/wc/store/products?category=${params.id}`);
    const item = await res.json();
  
    console.info(item);
  
    if (!item) {
      throw error(404, 'No product exists.');
    }
  
    return new Response(JSON.stringify(item));
}