import Header from "./components/Header"
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/contactPage"
import AboutUsPage from "./components/AboutUsPage"
import LoginFirst from "./components/loginFirst"
import SignUpFirst from "./components/SignupFirst"
import Profile from "./components/profile"
import Edit from "./components/editp"
import Dashboard from "./components/Dashboard1";

function App() {
  return (
   <div>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/contactUs" element={<ContactPage />} />
      <Route path="/aboutUs" element={<AboutUsPage/>} />
      <Route path="/firstLoginIn" element={<LoginFirst/>} />
      <Route path="/signUp" element={<SignUpFirst/>} />
      <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/edit" element={<Edit/>} ></Route>
            <Route path="/profile" element={<Profile/>} ></Route>
    </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
