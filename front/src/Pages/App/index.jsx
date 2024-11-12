import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import Home from '../Home/index';
import AboutMe from '../AboutMe';
import Contacto from '../Contacto';
import NotFound from '../NotFound';
import Productos from '../Productos';
import NavBar from '../../Components/Navbar';
import Perfil from '../Perfil';
import Footer from '../../Components/Footer';
import Preguntas from '../../Components/Componente/Preguntas';
import SalesBaño from '../../Components/SalesBaño/SalesBaño';
import DecoConcreto from '../../Components/DecoConcreto/index';
import Velas from '../../Components/Velas/index';
import Promociones from '../../Components/Promociones';
import ProductDetail from '../../Pages/ProductDetail';

import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut




  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/aboutme', element: <AboutMe /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/productos', element: <Productos /> },
    { path: '/jabones', element: <Productos /> },
    { path: '/promociones', element: <Promociones /> },
    { path: '/productdetail/:id', element: <ProductDetail /> },
    { path: '/sales-de-baño', element: <SalesBaño /> },
    { path: '/velas', element: <Velas /> },
    { path: '/deco-concreto', element: <DecoConcreto /> },
    { path: '/preguntas', element: <Preguntas /> },
    { path: '/perfil', element: <MyAccount /> },
    { path: '/*', element: <Home  /> },




    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
  ]);
  return routes;
};

const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
        <NavBar />
          <AppRoutes />
          <CheckoutSideMenu />
        <Footer />
    </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;















// const App = () => {
//   initializeLocalStorage()
//   return (
//     <ShoppingCartProvider>
//     <BrowserRouter>
//       <div className="flex   flex-col min-h-screen bg-gray-50">
//         <NavBar />
//         <main className="flex-grow">
//           <AppRoutes />
          
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//     </ShoppingCartProvider>
//   );
// };

// export default App;
