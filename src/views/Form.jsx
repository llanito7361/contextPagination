import {useState, useContext} from 'react'
import { ProductsContext } from '../context/productsContext'


const Form = () => {

  const {addProduct} = useContext(ProductsContext)

  const [product, setProduct] = useState({
    title: '',
    price: '',
    category: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setProduct({...product, [name] : value})
    console.log(product)
  }

  const onSubmit = e => {
    e.preventDefault()
    if( !product.title || !product.description || !product.price) {alert('camppos vacios')}
    else{

      addProduct(product)
      alert(`producto :${product.title} creado`) 
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">title : </label>
        <input name={'title'} value={product.title} onChange={handleChange} placeholder='title' />
      </div>
      <div>
        <label htmlFor="price">price : </label>
        <input name={'price'} value={product.price} onChange={handleChange} placeholder='price' />
      </div>
       <div>
        <label htmlFor="description">description : </label>
        <input name={'description'} value={product.description} onChange={handleChange} placeholder='description' />
      </div>
      <button   type='submit'>submit</button>
    </form>
  )
}

export default Form