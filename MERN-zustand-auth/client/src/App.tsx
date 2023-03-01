import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./components/Navigation"
import { ProtectedRoute } from "./components/ProtectedRoute"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import { useAuthStore } from "./store/authStore"

function App() {

  const isAuth = useAuthStore(state => state.isAuth);


  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>

          <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
