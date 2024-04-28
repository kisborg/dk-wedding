import RouteContextProvider from './contexts/RouteContextProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <RouteContextProvider>{children}</RouteContextProvider>;
};

export default RootLayout;
