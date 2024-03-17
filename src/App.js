import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

// Components
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

// Pages
import Home      from './pages/Home/Index';
import Company   from './pages/Company/Index';
import Impressum from './pages/Impressum/Index';
import Jobs      from './pages/Jobs/Index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />

        <WhatsAppWidget
          companyName='Square'
          replyTimeText='Typically replies within a day'
          phoneNumber="+48223970853"
          message="Hello! 👋🏼 How we can help you today?"
          sendButtonText='Send'
          open={false}
        />
      </div>
    </Router>
  );
}

export default App;
