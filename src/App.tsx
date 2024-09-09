import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import User from './pages/user/User'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import SharedLayout from './pages/SharedLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'users/:id',
        element: <User />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
