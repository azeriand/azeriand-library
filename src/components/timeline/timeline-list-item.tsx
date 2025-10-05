import { Card, CardProps } from '../card/card'

type TlListItemProps = CardProps & {
    label?: string;
    badge?: React.ReactNode;
} 

export function TlListItem({label, badge, ...cardProps}: TlListItemProps) {
    return(
        <li>
            <Card noBlur appearance='ghost' noPadding {...cardProps}>
                <div className='flex justify-between items-center gap-x-[1rem] text-[1rem]'>
                    {label}
                    {badge}
                </div>
            </Card>
        </li>
    )
}