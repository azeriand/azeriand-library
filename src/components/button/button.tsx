import { MouseEventHandler, ReactNode, useContext, useEffect, useState } from 'react';
import { Card } from '../card/card'
import './button.css';

type ButtonProps = {
    children?: ReactNode;
    label?: string;
    icon?: ReactNode;
    position?: string
    onClick?: MouseEventHandler<HTMLElement>;
    size?: string;
    className?: string;
    noPadding?: boolean;
    noBlur?: boolean;
    appearance?: string;
    color?: string;
    intensity?: number;
    dark?: boolean;
    style?: React.CSSProperties;
}

export function Button({children, label, icon, position='left', onClick, size, className, ...cardProps} : ButtonProps){

    let defaultCardClassNames = 'flex justify-center items-center gap-x-[0.40rem] box-border cursor-pointer w-fit '
    
    
    let specificCardClassNames = 'min-w-[2.5rem] px-4 py-2.5'

    if (size === 'sm'){
        specificCardClassNames = 'min-w-auto text-xs px-2.5 py-1.5'
        className = `${className}`
    }

    if (icon && !label){
        specificCardClassNames = 'square-8 p-2'
    }

    let cardClassNames = `${specificCardClassNames} ${defaultCardClassNames}`

    if (className){
        const roundedMatch = className.match(/rounded\-[a-z0-9]+/g)
        if (roundedMatch){
            cardClassNames += ' ' + roundedMatch[roundedMatch.length-1]
        }
    }

    if (true){
        cardClassNames += 'hoverable '
    }

    const buttonClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
        if (typeof onClick === 'function') { 
            onClick(ev)
        }
    }
   
    return(
        <Card as="button" noBlur noPadding className={cardClassNames + className} onClick={buttonClick} {...cardProps}>
            {position === 'left' && icon}
            {label}
            {children}
            {position === 'right' && icon}
        </Card>
    )
}