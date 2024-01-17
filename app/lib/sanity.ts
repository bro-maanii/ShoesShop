import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "0iqcprci",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true
});
const builder= imageUrlBuilder(client)
export function ForUrl(source:any) {
  return builder.image(source)
}
