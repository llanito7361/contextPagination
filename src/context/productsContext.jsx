import {createContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(null)


    const {data, error, loading} = useFetch('https://fakestoreapi.com/products#')
 

    //AGREGAR ppara q meta cambio
 
    useEffect(()=>{
        const storedProducts = localStorage.getItem('products')
        if(storedProducts){
            setProducts(JSON.parse(storedProducts))
        }

            else  if(data){
            setProducts(data)
        }
    },[data])

    useEffect(()=>{
        if(products){
            localStorage.setItem('products', JSON.stringify(products))
        }
//si ya existe y esta guardado products, creo su lugar en localStorage
    },[products])
    
    const addProduct = (newProduct) =>{
    setProducts(prevArray => [newProduct, ...prevArray])    
    }

    const  deleteProduct = (id) => {
        setProducts(prevArray => prevArray.filter(product => product.id !== id))
    }

    const editPrice = (id, newPrice) => {
        setProducts( prevArray => prevArray.map(product => product.id === id ?  {...product, price: newPrice}  : product) )
    }

    return(
        <ProductsContext.Provider value={{products,error,loading, addProduct, deleteProduct, editPrice}}>
            {children}
        </ProductsContext.Provider>
    )

}