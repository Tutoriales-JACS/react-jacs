import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
