import React from 'react';
//yonlendirme için reactrouterdom componentini kullanıyoruz
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';

//sayfalar
import anasayfa from './pages/anasayfa';
import giris from './pages/anasayfa';
import uyeol from './pages/anasayfa';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={anasayfa} />
            <Route exact path="/giris" component={giris} />
            <Route exact path="/uyeol" component={uyeol} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
