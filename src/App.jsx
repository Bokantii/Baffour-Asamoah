import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import YouthSupport from "./pages/Blog/BlogPages/YouthSupport/YouthSupport";
import Trauma from "./pages/Blog/BlogPages/Trauma/Trauma";
import AntiOppression from "./pages/Blog/BlogPages/AntiOppression/AntiOppression";
import MentalWellness from "./pages/Blog/BlogPages/MentalWellness/MentalWellness";
import MentalHealth from "./pages/Blog/BlogPages/MentalHealth/MentalHealth";
import FAQs from "./pages/FAQs/FAQs";
import Events from "./pages/Events/Events";

import "./Main.scss";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/services", element: <Services /> },
    { path: "/faqs", element: <FAQs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/events", element: <Events /> },
    { path: "/blog/youth-support", element: <YouthSupport /> },
    { path: "/blog/trauma", element: <Trauma /> },
    { path: "/blog/anti-oppression", element: <AntiOppression /> },
    { path: "/blog/mental-wellness", element: <MentalWellness /> },
    { path: "/blog/mental-health", element: <MentalHealth /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
