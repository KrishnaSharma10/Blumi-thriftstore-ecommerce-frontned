import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Login from './components/login/register/Login';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import BrowseProducts from './pages/BrowseProducts';
import MainLayout from './Layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import AuthLayout from './Layouts/AuthLayout';

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
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
