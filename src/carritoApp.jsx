import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBarComponent } from "./components/navBarComponent";
import { ProductPages } from "./pages/productPages";
import { CartPages } from './pages/cartPages';
import { ProductProvider } from './context/productProvider';
import { CartProvider } from './context/cartProvider';

export const CarritoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBarComponent />
        <div className="container">
          <Routes>
            <Route path='/' element={<ProductPages />} />
            <Route path='/carrito' element={<CartPages />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  );
};
