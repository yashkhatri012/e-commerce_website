
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import NotAvailable from './pages/NotAvailable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  
  return (
    <div className='px-4 sm:px-[5vw]  md:px-[7vw]  lg:px-[9vw] '>
       <ScrollToTop />
      <ToastContainer 
      position="top-center"     
        autoClose={3000}         
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
      />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path="/not-available" element={<NotAvailable />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
