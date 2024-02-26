import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAccount from "./Container/Components/MyAccount";
import Banking from "./Container/Components/Banking";
import HomeLoans from "./Container/Components/HomeLoans";
import Login from "./Container/Components/Login";
import NavBar from './Container/Header/NavBar'
import ProtectedRoute from "./Container/Router/ProtectedRoute";
import { AuthProvider } from "./Container/hooks/CustomAuth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route index path="/homeloans" element={<HomeLoans />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/banking" element={<Banking />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
