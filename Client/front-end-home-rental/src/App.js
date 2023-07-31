import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import ShowAll from "./pages/ShowAll";
import Filter from "./pages/Filter";
import Search from "./pages/Search";
import PostAd from "./pages/PostAd";
import Login from "./pages/Login";

import Register from "./pages/Register";
import { myContext } from "./pages/Context";
import LandingPage from "./pages/LandingPage";

function App() {
  const context = useContext(myContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="ShowAll" element={<ShowAll />} />
        <Route path="Filter" element={<Filter />} />
        <Route path="Search" element={<Search />} />

        {context === "undefined" ? (
          <>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="PostAd" element={<PostAd />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
