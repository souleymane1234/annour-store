import './App.css'
import Home from './pages/Home'
import Products from './pages/products'
import ProductsDetails from './pages/ProductDetail'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  return (
    <Router>
    <Routes>
    <Route
      path="/*"
      element={<Layout />}
    >
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="products/detail" element={<ProductsDetails />} />
      {/* Ajoute d'autres routes ici si nécessaire */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Route>
  </Routes>
  </Router>
  )
}

export default App
