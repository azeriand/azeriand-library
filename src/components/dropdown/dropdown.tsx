import './dropdown.css'
import { DropdownButton } from './dropdown-button'
import { Card } from '../card/card'
import { useState } from 'react';

type DropdownProps = {
    buttonText?: string;
    options?: string[];
    onSelected?: (option: string) => void;
}

export function Dropdown({buttonText, options = [], onSelected}: DropdownProps) {

    const [open, setOpen] = useState(false);
    const [optionSelected, setOptionSelected] = useState(buttonText);
    
    const toggleDropdown = () => {
        setOpen(open => !open);
    }

    const itemClicked = (option: string) => {
        setOptionSelected(option);
        onSelected?.(option);
        setOpen(false);
    }

    return(
        <div tabIndex={0} className='relative w-fit' onBlur={() => setOpen(false)}>
            <DropdownButton toggle={toggleDropdown} open={open}>{ optionSelected }</DropdownButton>
            {
                open &&
                <Card noPadding noBlur appearance='outlined' className="absolute flex flex-col items-center p-[0.5rem] mt-[0.5rem] w-full text-center rounded-lg overflow-y-scroll dropdown-content">
                    {
                        options.map(option => (
                            <div key={option} className='p-[0.5rem] m-[0.1rem] w-full rounded-lg cursor-pointer' onMouseDown={() => itemClicked(option)}>
                                {option}
                            </div>
                        ))
                    }
                </Card>
            }
        </div>
    )
}