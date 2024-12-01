/* eslint-disable react/prop-types */
import React from 'react';
import { handleFetch } from '../Utils/handleFetch';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [responseData, setResponseData] = React.useState(null);
    const [noticias, setNoticias] = React.useState(null);

    React.useEffect(() => {
        handleFetch("users", setResponseData)
        handleFetch("noticias", setNoticias)
    }, [])

    return(
        <AppContext.Provider value={{
            responseData,
            setResponseData,
            noticias,
            setNoticias
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext };

