import { createClient } from "@sanity/client";
import { groq } from "next-sanity";

// Hero Page Image loading
export async function GetHeroImg() {
    const client = createClient({
        projectId: '0iqcprci',
        dataset: 'production',
        apiVersion:'2022-03-07',
        useCdn: false
    });

    return client.fetch(
        groq`*[_type== 'heroimage'][0]`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Include any required authentication headers
            },
            mode: 'cors',
            credentials: 'include',
          }
    )
}

// Section1 images
export async function GetNewArrivals() {
    const client = createClient({
        projectId: '0iqcprci',
        dataset: 'production',
        apiVersion:'2022-03-07',
        useCdn: false
    });

    return client.fetch(
        groq`*[_type=='product'][0...3]{
            name,
            description,
            bprice,
            aprice,
            "slug":slug.current,
            "categoryName":category -> name,
            "imageUrl":images[0].asset->url,
            sale,
            _id
          }`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Include any required authentication headers
            },
            mode: 'cors',
            credentials: 'include',
          }
    )
}
// Sale Product shown on the home page
export async function GetSaleProductHomeView() {
    const client = createClient({
        projectId: '0iqcprci',
        dataset: 'production',
        apiVersion:'2022-03-07',
        useCdn: false
    });

    return client.fetch(
        groq`*[_type=='product'  && sale=='yes'][0...4]{
            name,
            description,
            bprice,
            aprice,
            "slug":slug.current,
            "categoryName":category -> name,
            "imageUrl":images[0].asset->url,
            sale,
            _id
          }`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Include any required authentication headers
            },
            mode: 'cors',
            credentials: 'include',
          }
    )
}

// Category wala data fetching---Slug
export async function GetCategoryPage(slug:string) {
    const client = createClient({
        projectId: '0iqcprci',
        dataset: 'production',
        apiVersion:'2022-03-07',
        useCdn: false
    });
    
    if (slug ==='All-Products'){
        return client.fetch(
            groq`*[_type== 'product']
            {
                "CategoryName": category->name,
                "imageUrl":images[0].asset->url,
                "slug":slug.current,
                bprice,
                aprice,
                name,
                sale
              }`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Include any required authentication headers
            },
            mode: 'cors',
            credentials: 'include',
          })
        }if (slug ==='Live-Sale'){
            return client.fetch(
                groq`*[_type== 'product' && sale=='yes']
                {
                    "CategoryName": category->name,
                    "imageUrl":images[0].asset->url,
                    "slug":slug.current,
                    bprice,
                    aprice,
                    name,
                    sale
                  }`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  // Include any required authentication headers
                },
                mode: 'cors',
                credentials: 'include',
              })
        
        }else{
            return client.fetch(
                groq`*[_type== 'product' && category->name=="${slug}"]
                {
                    "CategoryName": category->name,
                    "imageUrl":images[0].asset->url,
                    "slug":slug.current,
                    bprice,
                    aprice,
                    name,
                    sale
                  }`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  // Include any required authentication headers
                },
                mode: 'cors',
                credentials: 'include',
              })
            
        }
        
}

// move to product /product/[slug]
export async function GetProductDetails(slug:string) {
    const client = createClient({
        projectId: '0iqcprci',
        dataset: 'production',
        apiVersion:'2022-03-07',
        useCdn: false
    });

    return client.fetch(
        groq`*[_type== 'product'  && slug.current=="${slug}"][0]
        {
            name,
            description,
            bprice,
            aprice,
            "slug": slug.current,
            "categoryName":category -> name,
            "imageUrl":images[0...4].asset->url,
            sale,
            _id
          }`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Include any required authentication headers
            },
            mode: 'cors',
            credentials: 'include',
          }
    )
}

