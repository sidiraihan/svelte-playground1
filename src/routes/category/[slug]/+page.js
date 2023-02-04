
export async function load({ fetch, url, params }) {
    const res = await fetch(`/api/product/category/${url.searchParams.get('id')}`);
    const item = await res.json();
   
    return { 
        props: { 
          slug: params.slug, 
          item
        } 
    };
}