import { ProductsIndex } from "./ProductsIndex";
import { useState, useEffect } from "react";
import  axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow"

export function Content() {

  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})

  const handleProductsIndex = () => {
    console.log("productindex");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data)
    }
    )
  }

  const handleCreateProduct = (params, sucessCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) =>{
      setProducts([...products, response.data]);
      sucessCallback()
    })
  }

  const handleShowProduct = (product) => {
        console.log("handleShowProduct", product);
       setIsProductsShowVisible(true);
        setCurrentProduct(product);
      };

      const handleUpdateProduct = (id, params, successCallback) => {
            console.log("handleUpdateProduct", params);
             axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
               setProducts(
                 products.map((product) => {
                   if (product.id === response.data.id) {
                     return response.data;
                   } else {
                     return product;
                   }
                 })
               );
               successCallback();
               handleClose();
             });
           };

       const handleClose = () => {
           console.log("handleClose");
           setIsProductsShowVisible(false);
         };


         const handleDestroyProduct = (product) => {
              console.log("handleDestroyProduct", product);
               axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
                 setProducts(products.filter((p) => p.id !== product.id));
                 handleClose();
               });
             };

  useEffect(handleProductsIndex, []);


  return (
    <div>
      <h1>Welcome to React!</h1>
      <Login />
      <LogoutLink />
      <Signup />
      <ProductsNew  onCreateProduct={handleCreateProduct}/>
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
      <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
      </Modal>
      
    </div>
  )
}