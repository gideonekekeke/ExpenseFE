import React, { createContext, PropsWithChildren, useState } from "react";

type glo = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<glo | false>(false);

export const globalContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ modal, setModal }}>
      {children}
    </UserContext.Provider>
  );
};
