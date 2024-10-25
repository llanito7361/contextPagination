// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import './index.css'
import * as React from 'react';
import *  as ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { About, Home, Root,Form, Products, Posts } from './views/';
import { ProductsProvider } from './context/productsContext';
import { PostsProvider } from './context/postsContext';

const router = createBrowserRouter([{
  path: '/',
  element: <Root /> ,
  children: [
    {path : '/', element: <Home/>},
    {path : '/about', element: <About/>},
    {path : '/form', element: <Form/>},
    {path : '/products', element: <Products/>},
    {path:  '/posts', element: <Posts />}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <PostsProvider>
       <RouterProvider router={router} />
      </PostsProvider>
    </ProductsProvider>
  </React.StrictMode>

)