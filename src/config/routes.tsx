import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../modules/home/home.page.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        index: true
    }
])