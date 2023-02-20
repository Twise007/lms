import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Loginwithcode from "./pages/auth/Loginwithcode";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Verify from "./pages/auth/Verify";
import ChangePassword from "./pages/change password/ChangePassword";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Users from "./pages/users/Users";




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
          <Route path="/loginwithcode/:email" element={<Loginwithcode />} />
          <Route path="/verify/:verificationToken" element={<Layout><Verify /></Layout>} />

          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/changepassword" element={<Layout><ChangePassword /></Layout>} />
          <Route path="/users" element={<Layout><Users /></Layout>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
