    import {useLocation, Outlet} from 'react-router-dom'
    import Navbar from '../components/Navbar/Navbar'

    const Root = () => {

        const location = useLocation()

        return (
            <div>
                {location.pathname !== '/' && <Navbar />}

                <Outlet />
         </div>
        )
    }

    export default Root