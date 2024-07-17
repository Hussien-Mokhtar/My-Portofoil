import { createBrowserRouter } from "react-router-dom"
import Main from "./Component/Main";
import Skills from "./Component/Skills";

const routers = createBrowserRouter([
    {
        path:"/",
        element: <Main/>
    },
    {
        path:"/skills",
        element: <Skills/>
    }

])
export default routers;