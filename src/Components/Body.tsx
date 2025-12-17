import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.tsx";
import Login from "./Login.tsx";
import Authentication from "./Autentication.tsx";

const Body = () => {
    const approute  = createBrowserRouter([
        {   
            path: "/", 
            element: <Login />
        },
        {   
            path: "/login", 
            element: <Authentication />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    return (
        <div>
            <RouterProvider router={approute} />
        </div>
    );
};

export default Body;