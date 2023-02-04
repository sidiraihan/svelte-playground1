export async function GET({ params }) {
    const res = await fetch(`https://prestisa.id/wp-json/wc/store/products?category_slug=${params.slug}`);
    const item = await res.json();
  
    if (!item) {
      throw error(404, 'No product exists.');
    }
  
    return new Response(JSON.stringify(item));
}