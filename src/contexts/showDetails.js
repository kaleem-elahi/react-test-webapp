import React from 'react'

const initialState = {
  showDetails: false,
  toggle: () => { }
}

const GlobalSettingsContext = React.createContext(initialState)

function GlobalSettingsProvider({ children }) {
  const [showDetails, setShowDetails] = React.useState(false) // Default showDetails to false 
  // To toggle between Show & Hide Details
  const toggle = () => {
    setShowDetails(!showDetails)
  }
  return (
    <GlobalSettingsContext.Provider value={{ showDetails, toggle }}>
      {children}
    </GlobalSettingsContext.Provider>
  )
}

export { GlobalSettingsProvider, GlobalSettingsContext }
