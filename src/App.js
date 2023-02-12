import { createContext, useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';

import products from './data/products';

import Heading from './components/Heading';
import Footer from './components/Footer';

import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDetail from './pages/UserDetail';
import Profile from './pages/Profile';

import AddProduct from './pages/AddProduct';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery, CssBaseline } from '@mui/material';

import './styles/App.css';

export const Context = createContext({
  activeCategory: null,
  setActiveCategory: null,
  currentUser: null,
  setCurrentUser: null,
  session: null,
  setSession: null,
  products: null,
  cartContext: null,
  setCartContext: null,
  categories: null,
  users: null,
  currency: null,
  setCurrency: null,
  pageStart: null,
  setPageStart: null,
  pageEnd: null,
  setPageEnd: null,
  searching: null,
  setSearching: null,
  searchWord: null,
  setSearchWord: null,
  themePreference: null,
  setThemePreference: null
});

function App() {
  const [themePreference, setThemePreference] = useState("System");
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [active, setActive] = useState("All");
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartContext, setCartContext ] = useState([])
  const [users, setUsers] = useState([])
  const [currency, setCurrency] = useState("€")
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const mode = useMemo(() => {
    if(themePreference === "Dark") return true
    else if(themePreference === "Light") return false
    else return prefersDarkMode
  }, [themePreference])

  const theme = useMemo(() => (
    createTheme({
      palette: {
        mode: mode ? 'dark' : 'light',
        primary: {
          main: mode ? '#fff' : '#000',
        }
      },
      shape: {
        borderRadius: 20,
      }
    })
  ), [mode])

  async function getProfile() {
    try {
      const { user } = session

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, first_name, avatar_url, location`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUser(data)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async function getProducts() {
    let { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_categories (
          categories (
            name
          ),
          subcategories (
            name
          )
        ),
        images (
          id,
          url
        )
      `) // seller needs to be updated

    const products = data.map(({ product_categories, ...product }) => (
      Object.assign({
        ...product,
        categories: Object.assign({
          category: [...new Set(product_categories.map((category) => (
            category.categories.name
          )))],
          subcategories: product_categories.map((subcategory) => (
            subcategory.subcategories.name
          ))
        })
      })
    ))
    setProducts(products)
  }

  async function getCategories() {
    let { data, error } = await supabase
      .from('categories')
      .select('name')
    
    let { data: subcategories } = await supabase
      .from('subcategories')
      .select('name')

    console.log(data.map((category) => category.name).concat(subcategories.map(subcategory => subcategory.name)))
    // categories and subcategories

    setCategories(data.map((category) => category.name))
  }

  async function getUsers() {
    let { data, error } = await supabase
      .from('profiles')
      .select('*')

    setUsers(data)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    getProducts()
    getCategories()
    getUsers()
  }, [])

  useEffect(() => {
    if(session) getProfile()
  }, [session])

  return (
    <Context.Provider 
      value={{ 
        activeCategory: active, 
        setActiveCategory: setActive, 
        currentUser: user,
        setCurrentUser: setUser,
        session: session,
        setSession: setSession,
        products: products,
        categories: categories,
        cartContext: cartContext,
        setCartContext: setCartContext,
        users: users,
        currency: currency,
        setCurrency: setCurrency,
        pageStart: pageStart,
        setPageStart: setPageStart,
        pageEnd: pageEnd,
        setPageEnd: setPageEnd,
        searching: searchStatus,
        setSearching: setSearchStatus,
        searchWord: searchWord,
        setSearchWord: setSearchWord,
        themePreference: themePreference,
        setThemePreference: setThemePreference 
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <Heading />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile session={session} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            {/* <Route path="/users/:userId" element={<UserDetails />} /> */}
            <Route path="/seller/:sellerName" element={<SellersPage />}/>
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/users/:userId/add-product" element={<AddProduct />} />
          </Routes>

          <Footer />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
