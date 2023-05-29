import {redirect} from '@shopify/remix-oxygen';

export const loader = async () => {
  return redirect(`/products/zeyt/`);
};
