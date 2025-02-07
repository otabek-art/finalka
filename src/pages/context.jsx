import { createContext, useContext, useState } from 'react';


const AppContext = createContext();


export const AppContextProvider = ({ children }) => {

    // НAЧАЛО КОНТЕСТА
    const [state, setstate] = useState(false);

    const actionName = () => {
        setstate(!state);
    };

    const value = {
        state,
        actionName,
    };

    //  КОНЕЦ КОНТЕКСТА

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};
