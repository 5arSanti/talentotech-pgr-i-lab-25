/* eslint-disable react/prop-types */
import React from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [responseData, setResponseData] = React.useState(null);

    

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

