import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
ReactDOM.render(
    <div>
        <Header />
        <App />
        <Footer />
    </div>
    ,document.getElementById('root')
    );
