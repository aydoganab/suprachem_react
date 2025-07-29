import Home from "./pages/home/Home.tsx";

import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import Research from "./pages/research/Research.tsx";
import Publications from "./pages/publications/Publications.tsx";
import Members from "./pages/members/Members.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import "./styles/global.scss";

function App() {

    const Layout = () => {
        return(
           <div className="main">
               <Navbar />
               <div className="pageContent">
                   <Outlet />
               </div>
           </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children:[
                {
                    path: "/",
                    element: (
                        <Home/>
                    )
                },
                {
                    path: "/research",
                    element: (
                        <Research/>
                    )
                },
                {
                    path: "/publications",
                    element: (
                        <Publications/>
                    )
                },
                {
                    path: "/members",
                    element: (
                        <Members/>
                    )
                }
            ]
        }

    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App