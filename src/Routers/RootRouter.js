import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/MainPage/Main";
import Home from "../Pages/Home/Home";
import QuestionComponent from "../Component/QuestionComponent";
import PostChapter from "../Component/PostChapter";
import PostTopic from "../Component/PostTopic";
import PostQuestion from "../Component/PostQuestion";

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
            },
            {
                path: "/PostChapter",
                element: <PostChapter />
            }
            ,
            {
                path: "/PostTopic",
                element: <PostTopic />
            }
            ,
            {
                path: "/PostQuestion",
                element: <PostQuestion />
            }
        ]
    }
])