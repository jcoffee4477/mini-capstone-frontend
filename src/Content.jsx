import { ProductsIndex } from "./ProductsIndex";



export function Content() {

  const products = [ {
    "id": 5,
    "name": "chair",
    "price": 10,
    "description": null,
    "created_at": "2023-08-01T18:31:09.154Z",
    "updated_at": "2023-08-01T18:31:09.154Z",
    "is_discounted?": true,
    "tax": 0.09,
    "total": 10.09,
    "categories": [
      {
        "id": 2,
        "name": "home",
        "created_at": "2023-08-11T16:41:05.279Z",
        "updated_at": "2023-08-11T16:41:05.279Z"
      }
    ]
  },
  {
    "id": 14,
    "name": "sunglasses",
    "price": 20,
    "description": null,
    "created_at": "2023-08-02T17:27:16.855Z",
    "updated_at": "2023-08-02T17:27:16.855Z",
    "is_discounted?": false,
    "tax": 0.18,
    "total": 20.18,
    "categories": []
  },]


  return (
    <div>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
    </div>
  )
}