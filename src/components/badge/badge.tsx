import { Card, CardProps } from '../card/card'

type BadgeProps = CardProps & {
    label: string;
    size?: 'sm' | 'lg';
}

export function Badge({label, size, ...cardProps}: BadgeProps){

    let cardClassNames = 'rounded-md'
    let divClassNames = 'px-1.5 py-0.5 text-[0.85rem]'

    if (size === 'sm'){
        cardClassNames = 'rounded-md'
        divClassNames = 'px-1 py-0.5 text-[0.65rem]'
    }
    else if (size === 'lg'){
        cardClassNames = 'rounded-lg'
        divClassNames = 'px-2 py-0.5 text-[1rem]'
    }



    return(
        <Card noBlur noPadding className= {`w-fit ${cardClassNames}`} {...cardProps}>
            <div className={`font-bold ${divClassNames}`}>
                {label}
            </div>
        </Card>
    )
}