import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
/**
 * Statefull component (this component manages state) aka "smart components" or "container components"
 * You only want them of a couple
 */
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
