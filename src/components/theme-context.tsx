import { useState, createContext } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

type ThemeMode = 'dark' | 'light';
const DEFAULT_THEME = 'dark';

type CardProps = {
    theme?: ThemeMode,
    color?: string,
    intensity?: number,
    appearance?: 'glass' | 'mate' | 'outlined' | 'ghost',
};
const DEFAULT_CARD_PROPS: CardProps = {
    theme: DEFAULT_THEME,
    color: 'gray',
    intensity: 400,
    appearance: 'glass'
}

type ThemeContext = {
    theme: ThemeMode,
    setTheme: (val: ThemeMode) => void,
    cardDefaults: CardProps,
}

export const ThemeContext = createContext<ThemeContext>({
    theme: DEFAULT_THEME,
    setTheme: () => {},
    cardDefaults: DEFAULT_CARD_PROPS
}); //Creando el 'espacio compartido' al que los componentes pueden acceder??

import { ReactNode } from 'react';

export function ThemeContextComponent({children, defaultTheme}: {children: ReactNode, defaultTheme?: CardProps}){

    const [theme, setTheme] = useState<ThemeMode>(defaultTheme?.theme || DEFAULT_THEME);
    const [cardDefaults] = useState<CardProps>({...DEFAULT_CARD_PROPS, ...defaultTheme});

    //Creando el componente donde todos los hijos pueden acceder al contexto (siendo children los props)
    return(
        <ThemeContext.Provider value={{theme, setTheme, cardDefaults}}> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
            </LocalizationProvider>
        </ThemeContext.Provider>
    )
}