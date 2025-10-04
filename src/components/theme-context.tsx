import { useState, createContext } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

type ThemeMode = 'dark' | 'light';
const DEFAULT_THEME = 'dark';

type ThemeContext = {
    theme: ThemeMode,
    setTheme: (val: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContext>({theme: DEFAULT_THEME, setTheme: () => {}}); //Creando el 'espacio compartido' al que los componentes pueden acceder??

import { ReactNode } from 'react';

export function ThemeContextComponent({children}: {children: ReactNode}){

    const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME)

    //Creando el componente donde todos los hijos pueden acceder al contexto (siendo children los props)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
            </LocalizationProvider>
        </ThemeContext.Provider>
    )
}