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

    let cardClassNames = 'flex justify-center items-center gap-x-[0.40rem] h-[2.5rem] min-w-[2.5rem] box-border p-0'

    if (label) {
        cardClassNames += ' px-0 py-1'
    }


    if (className){
        const roundedMatch = className.match(/rounded\-[a-z0-9]+/g)
        if (roundedMatch){
            cardClassNames += ' ' + roundedMatch[roundedMatch.length-1]
        }
    }

    if (size === 'sm'){
        cardClassNames += ' h-[2rem] w-[2rem] min-w-auto'
    }

    const buttonClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
        if (typeof onClick === 'function') { 
            onClick(ev)
        }
    }
   
    return(
        <button className={className} onClick={buttonClick}>
            <Card noBlur noPadding className={cardClassNames} {...cardProps}>
                {position === 'left' && icon}
                {label}
                {children}
                {position === 'right' && icon}
            </Card>
        </button>
    )
}