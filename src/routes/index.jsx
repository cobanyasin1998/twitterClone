import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import Explore from "~/pages/explore/index.jsx";
import Notification from "~/pages/notification/index.jsx";
import NotFound from "~/pages/errors/404.jsx";


const routes = createBrowserRouter([
    {
        path: "/",
        element : <Home/>
    },
    {
        path: "/explore",
        element : <Explore/>
    },
    {
        path: "/notification",
        element : <Notification/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default  routes