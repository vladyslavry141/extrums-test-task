import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './features/authentication/containers/AuthProvider';
import { ProtectedRoute } from './features/authentication/containers/ProtectedRoute';
import { useProfileGetQuery } from './features/authentication/services/profile/hooks';
import { CounterPage } from './pages/CounterPage';
import { LoginPage } from './pages/LoginPage';
import { Loader } from './shared/components/Loader';

export const Main = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <CounterPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  const { data, isLoading } = useProfileGetQuery();

  if (isLoading) return <Loader />;

  return (
    <AuthProvider initialUser={data?.user ?? null}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;
