import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import PrivateRoute from './Permission/PrivateRoute';
import PublicRoute from './Permission/PublicRoute';

const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));

export const App = () => {
  // useEffect(() => {
  //   if (!name.length) {
  //     dispatch(getInfoUserThunk());
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/register"
            element={<PublicRoute redirectTo="/contacts" restricted />}
          >
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/contacts" restricted />}
          >
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route
            exact
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" />}
          >
            <Route exact path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to={{ pathname: '/login' }} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
