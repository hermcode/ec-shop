import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import NewPassword from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import EmailSent from '../pages/EmailSent';
import Home from '../pages/Home';
import PasswordRecovery from '../pages/PasswordRecovery';

import '../styles/global.scss'
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import ProductList from '../containers/ProductList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />}>
            <Route index element={<ProductList />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/password-recovery' element={<PasswordRecovery />} />
          <Route path='/email-sent' element={<EmailSent />} />
          <Route path='/new-password' element={<NewPassword />} />
          
          <Route path='/signup' element={<CreateAccount />} />
          
          
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App