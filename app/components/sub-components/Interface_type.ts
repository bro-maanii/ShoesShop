export interface IdataTypes {
    name:string,
    slug:string,
    categoryName:string,
    imageUrl:string,
    description:string,
    bprice:number,
    aprice:number,
    sale:string,
    _id: string,
    price_id: string
}

export interface IProductOverViewType{
    name:string,
    description:string,
    bprice:number,
    aprice:number,
    categoryName:string,
    imageUrl:any,
    sale:string,
    _id: string,
    price_id: string
}

// Category wali Type
export interface ICategoryProduct{
    map(arg0: (products: any, idx: import("react").Key | null | undefined) => import("react").JSX.Element): import("react").ReactNode
    name:string,
    bprice:number,
    aprice:number,
    categoryName:string,
    imageUrl:string,
    slug:string,
    sale:string,
    _id: string,
    price_id: string
}

// add to cart
export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    _id: string,
    price_id: string
  }