'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

type RouteContextType = {
  route?: string;
  setRoute?: Dispatch<SetStateAction<string>>;
};
export const RouteContext = createContext({} as RouteContextType);
const RouteContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [route, setRoute] = useState('intro');
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContextProvider;
