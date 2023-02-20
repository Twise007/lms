import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Wave from "./components/Wave";
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
          <Route path="/login" element={<Wave><Login /></Wave>} />
          <Route path="/register" element={<Wave><Register /></Wave>} />
          <Route path="/forgotpassword" element={<Wave><Forgot /></Wave>} />
          <Route path="/resetpassword/:resetToken" element={<Wave><Reset /></Wave>} />
          <Route path="/loginwithcode/:email" element={<Wave><Loginwithcode /></Wave>} />
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
