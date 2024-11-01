import { createRoot } from 'react-dom/client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import './index.css';
import App from './App';
import { cauTheme } from './shared/CAUTheme';
import { ChakraProvider } from '@chakra-ui/react';

import SignupForm from './components/Auth/SignupForm';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={cauTheme}>
      <SignupForm />
    </ChakraProvider>
  </React.StrictMode>
);
