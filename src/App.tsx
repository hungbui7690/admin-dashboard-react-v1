import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
