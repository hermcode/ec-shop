import React from 'react';
import Layout from '../containers/Layout';
import NewPassword from '../containers/NewPassword';
import '../styles/global.scss'

const App = () => {
  return (
    <>
      <Layout>
        <NewPassword />
      </Layout>
    </>
  )
}

export default App