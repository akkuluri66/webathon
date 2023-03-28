import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Homeweb from './webathon/Homeweb';
import RootLayoutweb from './webathon/RootLayoutweb';
import Loginweb from './webathon/Loginweb';
import Homeweb2 from './webathon/Homeweb2';
import RRR from './webathon/RRR'
import Location from "./webathon/Location"
import Calculator from './webathon/Calculator';
import Transport from './webathon/Transport';
import Energy from './webathon/Energy';
function App() {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<RootLayoutweb/>,
            children:[
                {
                    path:"/",
                    element:<Homeweb/>
                },
                {
                    path:"/Login",
                    element:<Loginweb/>
                },
                {
                    path:"/home2",
                    element:<Homeweb2/>
                },
                {
                    path:"/rrr",
                    element:<RRR/>
                },
                {
                    path:"/location",
                    element:<Location/>
                },
                {
                    path:"/calculator",
                    element:<Calculator/>
                },
                {
                    path:"/transport",
                    element:<Transport/>
                },
                {
                    path:"/energy",
                    element:<Energy/>
                }
            ]
        }

    ])
  return (
    <div className='parent'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App