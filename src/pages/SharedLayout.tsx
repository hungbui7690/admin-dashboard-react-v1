import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()

const SharedLayout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='container'>
        <div className='menuContainer'>
          <Menu />
        </div>
        <div className='contentContainer'>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SharedLayout
