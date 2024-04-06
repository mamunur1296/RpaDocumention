import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/MainPage/Main";
import Home from "../Pages/Home/Home";
import QuestionComponent from "../Component/QuestionComponent";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "ans/:ansId",
                element: <QuestionComponent />
                
            }
        ]
    }
])