
export const prerender = false;
export const ssr = false;
export const csr = true;



export async function load({url, params }) {
    const get_id = url.searchParams.get('id');
    //const res = await fetch(`/api/product/category/${get_id}`);
    //const item = await res.json();
   
    return { 
        props: { 
          slug: params.slug, 
          id: get_id,
        } 
    };
}