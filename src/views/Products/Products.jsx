import { useContext } from "react"
import Product from "../../components/Product/Product"
// import useFetch from "../../hooks/useFetch"
import style from './Products.module.css'
import { ProductsContext } from "../../context/productsContext"
const Products = () => {

  // const {data,loading, error} = useFetch('https://fakestoreapi.com/products#')

  const {products,loading, error}  = useContext(ProductsContext)

//  if(products)console.log(products)
  return (
    <div className={style.containeeer}>
      <h4 className={style.title}>Products</h4>
      <ul>
        {products&&products.map((dato)=> (
          // <li key={dato.id}>
          //   <h5>{dato.title}</h5>
          //   <img src={dato.image} alt="" />
          //   <p>price: {dato.price}</p> 
          //   <p>category: {dato.category}</p>           
          // </li>]
          <Product 
          key = {dato.id}
          id={dato.id}
           title ={dato.title}
          image={dato.image}
          price={dato.price}
          category={dato.category}
          />
        ))}
      </ul>
    </div>
  )
}

export default Products