
export async function load({ fetch, url, params }) {
    const get_id = url.searchParams.get('id');
    const res = await fetch(`/api/product/category/${get_id}`);
    const item = await res.json();

    // console.info(res);
   
    return { 
        props: { 
          slug: params.slug, 
          id: get_id, 
        },
        streamed: {
          item
        } 
    };
}