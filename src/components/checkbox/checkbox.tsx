import { Button } from '../button/button'
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';


type CheckboxProps = {
    label?: string;
    checkedDefault: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({label, checkedDefault = false, onChange} : CheckboxProps){
    const [checked, setChecked] = useState(checkedDefault)

    function checkboxClicked(){
        const newValue = !checked
        setChecked(newValue);
        onChange(newValue);
    }

    return(
        <div className='flex items-center gap-[0.5rem]' onClick={checkboxClicked}>
            <Button icon={checked ? <FaCheck/> : null } className='min-w-[2rem] min-h-[2rem]'/>
            {label}
        </div>
    )
}