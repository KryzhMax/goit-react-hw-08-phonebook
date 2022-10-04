import { Routes, Route } from 'react-router-dom';
import { Section } from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';
import { Navigation } from './navigation/Navigation';
import Layout from './layout/Layout';
import { useDispatch } from 'react-redux';
import { SignUpForm } from './signUpForm/SignUpForm';
import { LoginForm } from './loginForm/LoginForm';
import ContactFormPage from 'pages/contactFormPage/ContactFormPage';
import HomePage from 'pages/homePage/HomePage';
import PrivateRoute from 'Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import AppBar from './appBar/AppBar';
// import { UserMenu } from './userMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <SignUpForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactFormPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
