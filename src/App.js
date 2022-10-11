//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main/Main';
import Shop from '../src/components/Shop/Shop'
import Order from './components/Order/Order';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children : [
        {
          path:'/',
          element:<Shop></Shop>,
        },
        {
          path:'/shop',
          loader : productsAndCartLoader,
          element:<Shop></Shop>,
        },
        {
          path:'/orders',
          loader : productsAndCartLoader,
          element:<Order></Order>,
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>,
        },
        {
          path:'/about',
          element:<About></About>,
        }
      ]
    },
   
  ]);
  return (
    <div >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
