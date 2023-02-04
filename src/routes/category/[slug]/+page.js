
export async function load({ fetch, url }) {
    const res = await fetch(`/api/product/category/${url.searchParams.get('id')}`);
    const item = await res.json();
   
    return { item };
}