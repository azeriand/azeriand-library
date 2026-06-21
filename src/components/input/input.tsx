import './input.css'
import { Card, CardProps } from '../card/card'

export type InputProps = CardProps & {
    type?: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    size?: number;
    maxLength?: number;
    onChange?: (value: string) => void;
    iconPosition?: 'left' | 'right';
    centerText?: boolean;
    icon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function Input({type = 'text', value, disabled, placeholder, maxLength, onChange, iconPosition='left', centerText=false, icon, className, ...cardProps}: InputProps){
    function inputUpdated(ev: React.ChangeEvent<HTMLInputElement>){
        onChange?.(ev.target.value)
    }

    const normalizedValue = value ?? ''

    const inputClassName=`flex justify-center items-center border-none bg-transparent py-[0.5rem] ${icon && iconPosition ? 'px-[0.5rem]' : 'px-[1rem]'} m-0 w-full ${centerText ? 'text-center' : ''}`

    const directionClassName = iconPosition === 'left' ? 'pl-3' : 'flex-row-reverse pr-3'

    return(
        <Card className={`flex justify-center items-center rounded-md ${className} ${icon ? directionClassName : ''}`} noBlur noPadding {...cardProps} style={cardProps.style}>
            { icon && <div className='flex items-center'>{ icon }</div> }
            <input
                className={inputClassName}
                onChange={inputUpdated}
                placeholder={placeholder}
                value={normalizedValue}
                disabled={disabled}
                type={type}
                maxLength={maxLength}
                style={cardProps.style}
            />
        </Card>
    )
}