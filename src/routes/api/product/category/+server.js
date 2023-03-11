export async function GET({fetch}) {
    const res = await fetch(`https://prestisa.id/wp-json/wc/store/products/categories?page=1&per_page=36&hide_empty=true`);
    const item = await res.json();
  
    if (!item) {
      throw error(404, 'No product exists.');
    }
  
    return new Response(JSON.stringify(item));
}