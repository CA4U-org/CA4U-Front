import { createRoot } from 'react-dom/client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { cauTheme } from './shared/CAUTheme';
import { initializeApp } from 'firebase/app';
import Header from './Header';
import { Introduction } from './Introduction';
import AffiliationViewButton from './components/AffiliationViewButton';
import MainPage from './MainPage';
const firebaseConfig = {
  apiKey: 'AIzaSyCSLoTqZwqU2tvYCWG3v1eC5cHehbbnPGc',
  authDomain: 'ca4u-75cbe.firebaseapp.com',
  projectId: 'ca4u-75cbe',
  storageBucket: 'ca4u-75cbe.appspot.com',
  messagingSenderId: '572779157751',
  appId: '1:572779157751:web:3fec59a523e16e887ddbf2',
  measurementId: 'G-7FY38583K1',
};

//Firebase 초기화
const app = initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={cauTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
