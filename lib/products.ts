export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    category: {
        name:string,
        slug:string
    },
    stock: string,
}

// export const products = [
//   {
//     id: 1,
//     name: "Sunset Painting",
//     price: 120,
//     image: "/art1.jpg"
//   },
//   {
//     id: 2,
//     name: "Ocean Waves",
//     price: 95,
//     image: "/art2.jpg"
//   },
//   {
//     id: 3,
//     name: "Abstract Colors",
//     price: 150,
//     image: "/art3.jpg"
//   }
// ]