import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { useDispatch } from 'react-redux';
import ContactFormPage from 'pages/contactFormPage/ContactFormPage';
import HomePage from 'pages/homePage/HomePage';
import PrivateRoute from 'Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import NotFound from 'pages/notFound/NotFound';

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
              <PublicRoute restricted>{/* <SignUpForm /> */}</PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>{/* <LoginForm /> */}</PublicRoute>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
