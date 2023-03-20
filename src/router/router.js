import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/main/Main";
import Login from "../pages/user/Login";

import App from "../App";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <App />
            ),
            children: [
                {
                    path: '/',
                    element: <Login />
                },
                {
                    path: '/main',
                    element: <Main />
                },
            ]
        }
    ]
)