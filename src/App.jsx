import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import "./Main.scss";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact/> },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
