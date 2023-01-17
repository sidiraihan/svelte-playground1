
export async function load({ fetch, params }) {
    const res = await fetch(`https://prestisa.id/wp-json/wc/store/products/${params.id}`);
    const item = await res.json();
   
    return { item };
  }