import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Home from "./pages/Home";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/resetpassword/:resetToken" element={<Reset />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
