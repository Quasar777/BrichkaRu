import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Autos from "./pages/Autos/Autos";
import Trucks from "./pages/Trucks/Trucks";
import AdPage from "./pages/AdPage/AdPage";
import Footer from "./components/Footer/Footer";
import CreateAdForm from "./components/UI/CreateAdForm/CreateAdForm";
import CreateAdPage from "./pages/CreateAdPage/CreateAdPage";
import SignUpForm from "./components/UI/SignUpForm/SignUpForm";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorCard from "./components/UI/ErrorCard/ErrorCard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("Sarmat");

  return (
    
      <BrowserRouter>
        <AuthContext.Provider value={{ isAuth, setIsAuth, username, setUsername }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="autos" element={<Autos />} />
            <Route path="autos/:id" element={<AdPage />} />
            <Route path="trucks" element={<Trucks />} />
            <Route path="createAd" element={<CreateAdPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </AuthContext.Provider>
      </BrowserRouter>
    
  );
}

export default App;
