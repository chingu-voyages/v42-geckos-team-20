import { createContext, useContext, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import products from './data/products';

import Heading from './components/Heading';
import SellersPage from './pages/SellerPage';
import Footer from './components/Footer';

import ProductDetail from './pages/productDetail';
import UserDetails from './pages/userDetails';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery, CssBaseline } from '@mui/material';

import './styles/App.css';

export const Context = createContext({
  activeCategory: null,
  setActiveCategory: null,
  currentUser: null,
  setCurrentUser: null,
  searching: null,
  setSearching: null
});

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [active, setActive] = useState("All");
  const [user, setUser] = useState(null);
  const [searchStatus, setSearchStatus] = useState(false);

  const theme = useMemo(() => (
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        primary: {
          main: prefersDarkMode ? '#fff' : '#000',
        }
      }
    })
  ), [prefersDarkMode])

  return (
    <Context.Provider 
      value={{ 
        activeCategory: active, 
        setActiveCategory: setActive, 
        currentUser: user,
        setCurrentUser: setUser,
        searching: searchStatus,
        setSearching: setSearchStatus
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <Heading />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/seller/:sellerName" element={<SellersPage />}/>
          </Routes>

          <Footer />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
