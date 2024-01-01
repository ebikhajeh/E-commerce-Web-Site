
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Wrapper from './layout/Wrapper';
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import WishlistPage from './pages/WishlistPage';
// ... other imports

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                    <Wrapper>
                        <Routes>
                            {/* Home Page */}
                            <Route path="/" exact element={<HomePage />} />

                            {/* Product Routes */}
                            <Route path="/products" exact element={<ProductListPage/>} />
                            <Route path="/products/:id" element={<ProductDetailPage/>} />
                            <Route path="/wishlist" element={<WishlistPage/>} />
                            {/* <Route path="/categories/:category" element={CategoryPage} /> */}

                            {/* Shopping Cart */}
                            <Route path="/cart" element={<ShoppingCartPage/>} />

                            {/* User Account and Authentication */}
                            <Route path="/register" element={<RegisterPage/>} />
                            <Route path="/login" element={<LoginPage/>} />
                            {/* 
                            
                            <Route path="/account" element={AccountPage} />
                            <Route path="/account/orders" element={OrderHistoryPage} />
                            <Route path="/account/wishlist" element={WishListPage} /> */}

                            {/* Checkout Process */}
                            {/* <Route path="/checkout" element={CheckoutPage} />
                            <Route path="/order/confirmation" element={OrderConfirmationPage} /> */}

                            {/* Additional Pages */}
                            {/* <Route path="/about" element={AboutPage} />
                            <Route path="/contact" element={ContactPage} />
                            <Route path="/faq" element={FAQPage} />
                            <Route path="/terms" element={TermsPage} />
                            <Route path="/privacy" element={PrivacyPolicyPage} /> */}

                            {/* Handling 404 - Page Not Found */}
                            {/* <Route element={NotFoundPage} /> */}
                            </Routes>
                    </Wrapper>
                <Footer />
            </Router>
        </AuthProvider>

    );
};

export default App;






















// import React from 'react';
// import Layout from './Layout';
// import AppRouter from './AppRouter';

// function App() {
//   return (
//     <Layout>
//      <AppRouter />
//     {/* Other pages/components go here */}
//     </Layout>
//   );
// }

// export default App;
