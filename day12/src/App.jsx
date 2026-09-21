import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard"
import Profile from "./Profile";
import Settings from "./Settings";
import ContactForm from "./ContactForm"
import NotFound from "./NotFound";
import DashboardContent from "./DashboardContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="contact-form" element={<ContactForm />}/>
          </Route>

           <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="settings" element={<Settings />}/>
           </Route>

          <Route path="*" element={<NotFound />}/>



        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;