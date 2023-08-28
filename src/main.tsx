import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ErrorPage } from './error-page.tsx';
import { Debugs } from './routes/debug/index.tsx';
import { DebugCardList } from './routes/debugs/index.tsx';
import { Login } from './routes/login/index.tsx';
import { Signup } from './routes/signup/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/debugs',
    element: <Debugs />,
  },
  {
    path: '/debugs',
    element: <DebugCardList />,
    errorElement: <ErrorPage />,
  },
]);

export const theme = extendTheme({
  styles: {
    global: {
      '#root': {
        padding: 0,
        margin: 0,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
