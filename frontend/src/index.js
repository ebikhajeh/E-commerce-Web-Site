
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
















// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Wrapper from './Wrapper';
// import AppRouter from './AppRouter';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import ProductDetails from './components/ProductDetails';
// import reportWebVitals from './reportWebVitals';
// import { AuthProvider } from './context/AuthContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* Wrap the entire app with AuthProvider */}
//     <AuthProvider>
//       <Router>
//         <div>
//           <Header />
//           <Wrapper>
//             <Routes>
//               <Route path="/" element={<ProductList />} />
//               <Route
//                 path="/signup"
//                 element={<SignUp onSuccessRegistration={() => <Navigate to="/login" />} />}
//               />
//               <Route path="/login" element={<Login />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/products/:id" element={<ProductDetails />} />
//             </Routes>
//           </Wrapper>
//           <Footer />
//         </div>
//       </Router>
//     </AuthProvider>
//   </React.StrictMode>
// );

// reportWebVitals();
