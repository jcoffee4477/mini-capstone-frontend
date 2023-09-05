
   export function ProductsIndex(props) {
      return (
        <div>
          <h1>All photos</h1>
        {props.products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
             <img src={product.image_url} />
            <p>Price: {product.price}</p>
           <p>Description: {product.description}</p>
          </div>
        ))}
        </div>
      );
    }