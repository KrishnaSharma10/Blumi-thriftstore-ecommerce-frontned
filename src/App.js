import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Register from './components/login/Register';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import BrowseProducts from './pages/BrowseProducts';
import MainLayout from './Layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import AuthLayout from './Layouts/AuthLayout';
import Login from './components/login/Login';
import ProductPage from './pages/ProductPage';
import { AuthProvider } from '../src/contexts/authcontext';
import AddProductForm from './components/Products/addproduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'browseproducts', element: <BrowseProducts /> },
      { path: '*', element: <NotFoundPage /> },
      { path: 'productpage/:id', element: <ProductPage /> },
      { path: 'addproduct', element: <AddProductForm /> },
    ],
  },
  {
    path: '/authentication',
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }, { path: 'register', element: <Register /> }],
  },
]);

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
