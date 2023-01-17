
export async function load({ fetch, params }) {
    const res = await fetch(`/api/product/${params.id}`);
    const item = await res.json();
   
    return { item };
  }