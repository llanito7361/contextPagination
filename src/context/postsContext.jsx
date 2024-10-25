import { useState, useEffect, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([ ]);
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const postsPerPagina = 20;
  const totalPages = 5;  // Limite de 5 páginas

  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  // Cargar posts desde localStorage o fetch
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else if (data) {
      setPosts(data);
    }
  }, [data]);

  // Guardar posts en localStorage
  useEffect(() => {
    if (posts && posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  // Actualizar los posts visibles al cambiar de página
  useEffect(() => {
    if (posts && posts.length > 0) {
      const firstIndexSlice = (page - 1) * postsPerPagina;
    //   const lastIndexSlice = page * postsPerPagina;
         const lastIndexSlice = firstIndexSlice + postsPerPagina
    setCurrentPosts(posts.slice(firstIndexSlice, lastIndexSlice));
    }
  }, [page, posts]);

  // Función para avanzar a la siguiente página (limitada a 5 páginas)
  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPag) => prevPag + 1);
    }
  };

  // Función para retroceder a la página anterior (limitada a 1)
  const previousPage = () => {
    if (page > 1) {
      setPage((prevPag) => prevPag - 1);
    }
  };

  return (
    <PostsContext.Provider value={{ currentPosts, page, totalPages, error, loading, nextPage, previousPage }}>
      {children}
    </PostsContext.Provider>
  );
};
