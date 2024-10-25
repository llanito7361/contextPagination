import {NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h4 className='bg-blue-500  '>home</h4>
      <NavLink to='/products'><button>products</button></NavLink>
    </div>
  );
};

export default Home;
