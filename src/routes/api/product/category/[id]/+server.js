export async function GET({ fetch, params, url }) {
    const query = url.search.replace('?', '&');
    const res = await fetch(`https://prestisa.com/wp-json/wc/store/products?category=${params.id}${query}`);
    const item = await res.json();
  
    if (!item) {
      throw error(404, 'No product exists.');
    }
  
    return new Response(JSON.stringify(item));
}