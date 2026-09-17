import './input.css'
import { Card, CardProps } from '../card/card'

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

type InputTypeConfig = {
    htmlType: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
    autoComplete?: string;
    /** Removes characters that are not allowed for the given type as the user types. */
    sanitize?: (value: string) => string;
};

const INPUT_TYPE_CONFIG: Record<InputType, InputTypeConfig> = {
    text: { htmlType: 'text' },
    email: {
        htmlType: 'email',
        inputMode: 'email',
        autoComplete: 'email',
        // Emails have no spaces
        sanitize: (value) => value.replace(/\s/g, ''),
    },
    password: { htmlType: 'password', autoComplete: 'current-password' },
    number: {
        htmlType: 'text',
        inputMode: 'numeric',
        // Only digits
        sanitize: (value) => value.replace(/[^0-9]/g, ''),
    },
    tel: {
        htmlType: 'tel',
        inputMode: 'tel',
        autoComplete: 'tel',
        // Digits plus common phone characters
        sanitize: (value) => value.replace(/[^0-9+\-\s()]/g, ''),
    },
    url: {
        htmlType: 'url',
        inputMode: 'url',
        autoComplete: 'url',
        // URLs have no spaces
        sanitize: (value) => value.replace(/\s/g, ''),
    },
    search: { htmlType: 'search', inputMode: 'search' },
};

export type InputProps = CardProps & {
    type?: InputType;
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
    const typeConfig = INPUT_TYPE_CONFIG[type] ?? INPUT_TYPE_CONFIG.text

    function inputUpdated(ev: React.ChangeEvent<HTMLInputElement>){
        const rawValue = ev.target.value
        const nextValue = typeConfig.sanitize ? typeConfig.sanitize(rawValue) : rawValue
        onChange?.(nextValue)
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
                type={typeConfig.htmlType}
                inputMode={typeConfig.inputMode}
                autoComplete={typeConfig.autoComplete}
                maxLength={maxLength}
                style={cardProps.style}
            />
        </Card>
    )
}