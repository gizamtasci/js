import React from 'react';
//yonlendirme için reactrouterdom componentini kullanıyoruz
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';

//sayfalar
import anasayfa from './pages/anasayfa';
import Raporlar from './pages/Raporlar';
import Istatislikler from './pages/Istatislikler';
import Ayarlar from './pages/Ayarlar';
import giris from './pages/giris';
import uyeol from './pages/uyeol';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={anasayfa} />
            <Route exact path="/raporlar" component={Raporlar} />
            <Route exact path="/istatislikler" component={Istatislikler} />
            <Route exact path="/ayarlar" component={Ayarlar} />
            <Route exact path="/giris" component={giris} />
            <Route exact path="/uyeol" component={uyeol} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
