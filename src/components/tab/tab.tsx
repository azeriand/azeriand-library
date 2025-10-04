import { useState } from 'react'
import { Card, CardProps } from '../card/card'
import { SectionName } from '../section-name/section-name'
import { Button } from '../button/button'

type TabProps = CardProps & {
    items?: string[];
    onTabSelected?: (item: string) => void;
    defaultValue?: string;
}

export function Tab({items, onTabSelected, defaultValue, ...cardProps}: TabProps) {
    const [tabSelected, setTabSelected] = useState(defaultValue);

    const selectTab = (item: string) => {
        setTabSelected(item);
        onTabSelected?.(item);
    }

    return (
        <>
            <SectionName section='Filter by'/>
            <Card className='rounded-md w-fit' noBlur noPadding {...cardProps} color='blue'>
                <div className='flex p-[0.4rem] gap-x-[0.5rem]'>
                    {
                        items && items.map(item => (
                            <Button
                                key={item}
                                onClick={() => selectTab(item)}
                                color='blue'
                                appearance={item === tabSelected ? 'mate' : 'ghost'}
                                dark={item === tabSelected ? false : true}
                                label={item}
                            />
                        ))
                    }
                </div>
            </Card>

        </>
    )
}