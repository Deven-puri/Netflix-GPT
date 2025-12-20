import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.tsx";
import Login from "./Login.tsx";
import Authentication from "./Login2.tsx";
import { useEffect } from "react";
import { auth } from "../utils/firebase.tsx";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.tsx";
import { useDispatch } from "react-redux";

const approute = createBrowserRouter([
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

]);

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid, email, displayName}));
            } else {
                dispatch(removeUser());
            }
        });
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={approute} />
        </div>
    );
};

export default Body;