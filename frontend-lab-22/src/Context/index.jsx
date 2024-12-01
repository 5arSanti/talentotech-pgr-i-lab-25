/* eslint-disable react/prop-types */
import React from 'react';
import { handleFetch } from '../Utils/handleFetch';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [responseData, setResponseData] = React.useState(null);

    React.useEffect(() => {
        handleFetch("users", setResponseData)
    }, [])

    return(
        <AppContext.Provider value={{
            responseData,
            setResponseData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext };

