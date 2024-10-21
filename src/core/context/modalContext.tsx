import React, { createContext, useState, ReactNode } from 'react';
import {ModalContextInterface} from '../interfaces/ModalContextInterface'

export const ModalContext = createContext<ModalContextInterface>({
  selectedElementId: null,
  setSelectedElementId: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedElementId, setSelectedElementId] = useState<number | null>(null);

  return (
    <ModalContext.Provider value={{ selectedElementId, setSelectedElementId }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext; 


