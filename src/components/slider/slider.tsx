import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Card } from '../card/card';

type SliderProps = {
    defaultValue: number;
    className?: string;
    onChange?: (event: Event, value: number | number[]) => void;
}

export function NewSlider({defaultValue, className, onChange}: SliderProps) {
    return (
        <Card noPadding appearance='ghost' className={className}>
            <Box sx={{ width: 150 }}>
                <Slider defaultValue={defaultValue} aria-label="Default" valueLabelDisplay="auto" onChange={onChange} />
            </Box>
        </Card>
    );
}