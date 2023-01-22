export async function GET() {
    const res = await fetch(`https://prestisa.id/wp-json/wc/store/products/categories`);
    const item = await res.json();
  
    if (!item) {
      throw error(404, 'No product exists.');
    }
  
    return new Response(JSON.stringify(item));
}