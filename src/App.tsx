import React from 'react';
import './styles.css';
import {Layout} from "./app/common/components/Layout";
import {LandingPage} from "./app/landing-page/LandingPage";

function App() {
  return (
      <Layout>
          <LandingPage/>
      </Layout>
  );
}

export default App;
