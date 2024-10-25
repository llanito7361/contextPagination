import {useContext} from 'react'
import { PostsContext } from '../../context/postsContext'
import Post from '../../components/Post/Post'


const Posts = () => {

  const {currentPosts,error,loading, page, previousPage, nextPage, totalPages} = useContext(PostsContext)

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los posts.</p>;
  return (
    <div>
      <h3 className='text-center'>posteos</h3>
      <ul>
        {currentPosts && currentPosts.map(posti => (
          <Post 
            key={posti.id}
            id={posti.id}
            title={posti.title}
            body={posti.body}
          />
        ))}
      </ul>

        <div >
          <button onClick={previousPage} disabled={page === 1}>previousPag</button>
          <label>{page}</label>
          <button onClick={nextPage} disabled={page ===totalPages}>nextPage</button>
        </div>

    </div>
  )
}

export default Posts