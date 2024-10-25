import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import style from './Product.module.css'

const Product = ({id, title, image, price, category}) => {

  const {deleteProduct, editPrice} = useContext(ProductsContext)

  const [isEditing, setIsEditing] = useState(false)
  const [newPrice, setNewPrice] = useState(null)

  const editacion = () => {
    setIsEditing(!isEditing)
    if(isEditing)
      editPrice(id, newPrice)
  }

  return (
    <li key={ id } className="bg-red-500">
      <h5>{ title}</h5>
      <img src={ image} alt="" />
      {/* <p>price: { price}</p> */}
      {isEditing? ( 
        <div>
          <label htmlFor="newPrice">newPrice</label>
          <input name="newPrice" value={newPrice} onChange={(e)=>{setNewPrice(e.target.value)}} />
        </div>
      ) : (
               <p>price: { price}</p> 
) }

      <p>category: { category}</p>
      <button onClick={()=>deleteProduct(id)}>delete</button>      
      <button onClick={editacion}>
        {isEditing ? 'guardar' : 'editar'}
      </button>
     </li>
  );
};

export default Product;
