
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'

import { BrowserRouter, Route } from  'react-router-dom'
import Login from './Components/Login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
