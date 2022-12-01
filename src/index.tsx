// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth'

// Local Imports
import { store } from './redux/store';
import { theme } from './Theme/themes';
import { Home, Dashboard, SignIn, SignUp } from './components';
import { firebaseConfig } from './firebaseConfig';
import reportWebVitals from './reportWebVitals';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store = {store}>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home title = {'Marvel Characters'}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
    </Provider>
    </FirebaseAppProvider>
    
  </React.StrictMode>
);

reportWebVitals();