// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('');

  const handleDataChange = newData => {
    setSharedData(newData);
  };

  return (
    <DataContext.Provider value={{ sharedData, handleDataChange }}>
      {children}
    </DataContext.Provider>
  );
};


