import { useState, createContext } from 'react'

type ThemeMode = 'dark' | 'light';
const DEFAULT_THEME = 'dark';

type ThemeContext = {
    theme: ThemeMode,
    setTheme: (val: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContext>({theme: DEFAULT_THEME, setTheme: () => {}}); //Creando el 'espacio compartido' al que los componentes pueden acceder??

import { ReactNode } from 'react';

export default function ThemeContextComponent({children}: {children: ReactNode}){

    const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME)

    //Creando el componente donde todos los hijos pueden acceder al contexto (siendo children los props)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}> 
            {children}
        </ThemeContext.Provider>
    )
}