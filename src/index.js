import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import { createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import { Home, About, Portfolio } from "./components";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>} />
            <Route path="portfolio" element={<Portfolio/>}/>
        </Route>
    )
)

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
