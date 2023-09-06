
export function ProductsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  }

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  }

  return (
    <div>
      <h1>Product information</h1>
      <p>name: {props.product.name}</p>
      <p>price: {props.product.price}</p>
      <p>description: {props.product.description}</p>
      <p>image_url: {props.product.image_url}</p>
      <form onSubmit={handleSubmit}>
       <div>
           name: <input defaultValue={props.product.name} name="name" type="text" />
         </div>
         <div>
           price: <input defaultValue={props.product.price} name="price" type="text" />
         </div>
         <div>
           description: <input defaultValue={props.product.description} name="description" type="text" />
         </div>
         <div>
           image_url: <input defaultValue={props.product.image_url} name="image_url" type="text" />
         </div>
         <button type="submit">Update product</button>
       </form>
       <button onClick={handleClick}>Destroy product</button>
    </div>
  );
}