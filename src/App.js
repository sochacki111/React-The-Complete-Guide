import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containters/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;