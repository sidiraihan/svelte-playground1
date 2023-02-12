// This code is an asynchronous function that makes a GET request to the Prestisa website to retrieve a product based on the category slug provided in the params argument. If the product does not exist, an error is thrown. Otherwise, the product is returned as a JSON string.
export async function GET({ fetch, params }) {
    const res = await fetch(`https://prestisa.com/wp-json/wc/store/products?category_slug=${params.slug}`);
// This code assigns the response of the res.json() method to the variable item. The await keyword is used to wait for the response before continuing with the code.
    const item = await res.json();
  
    if (!item) {
      throw error(404, 'No product exists.');
    }
  
    return new Response(JSON.stringify(item));
}