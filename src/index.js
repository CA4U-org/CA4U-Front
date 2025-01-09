import { createRoot } from 'react-dom/client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './shared/useAuth';
import 'pretendard/dist/web/static/pretendard.css';
import { mergedTheme } from './shared/theme/mergedTheme';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={mergedTheme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>
);
