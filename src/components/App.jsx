import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from 'pages/NotFound';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperation';
import { useAuth } from '../components/hooks/useAuth';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('../pages/Home/Home'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));
const ContactsView = lazy(() => import('../pages/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsView />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
