import './timeline.css'
import { Card, CardProps } from '../card/card'

type TimelineProps = CardProps & {
    children?: React.ReactNode;
    faded?: boolean;
}

export function Timeline({children, faded, ...cardProps}: TimelineProps) {
    const timelineStyle: React.CSSProperties = {
        overflowY: 'visible',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
    }

    return(
        <Card className='rounded-sm' noPadding appearance='ghost' {...cardProps} style={{...cardProps.style, ...timelineStyle}}>
            <ul className='vertical-line list-disc font-bold text-start relative' style={{paddingInlineStart: 20}}>
                {children}
            </ul>
        </Card>
    )
}