import { error } from '@sveltejs/kit';
 
export function load({ params }) {
  if (params.slug != null) {
    return {
      slug: params.slug
    };
  }
 
  throw error(404, 'Not found');
}