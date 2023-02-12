export async function GET({ fetch, params }) {
  const res = await fetch(`https://prestisa.com/wp-json/wc/store/products/${params.id}`);
  const item = await res.json();

  if (!item) {
    throw error(404, 'No product exists.');
  }

  return new Response(JSON.stringify(item));
}