import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.tsx";
import Login from "./Login.tsx";

const Body = () => {
    const approute  = createBrowserRouter([
        {   path: "/login", 
            element: <Login />

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