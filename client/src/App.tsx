import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/User/Home"
import Profile from "./pages/User/Profile/Profile"
import Explore from "./pages/User/Explore/Explore"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profile/:username" element={<Profile />} />
              <Route path="explore" element={<Explore />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
