import React, { JSX } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';
import { Card, CardProps } from '../card/card';
import './calendar.css';
import dayjs from "dayjs";
import { PickersDayProps } from '@mui/x-date-pickers';

type CalendarProps = CardProps & {
    selectedDates?: Date[];
}

interface CustomDayProps extends PickersDayProps {
    highlightedDays?: dayjs.Dayjs[];
}

function CustomDay(props: CustomDayProps) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected = highlightedDays.some((date: dayjs.Dayjs) => day.isSame(date, "day"));

    return (
        <PickersDay
            {...other}
            day={day}
            selected={isSelected}
            outsideCurrentMonth={outsideCurrentMonth}
            sx={{
                ...(isSelected && {
                    backgroundColor: "white !important", // Make selected day white
                    color: "black !important", // Text color to black for contrast
                }),
            }}
        />
    );
}

export function Calendar({ selectedDates, ...cardProps }: { selectedDates?: Date[] } & CardProps): JSX.Element {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <Card appearance={cardProps.appearance ?? 'ghost'} noPadding {...cardProps} className="w-fit">
            <ThemeProvider theme={theme}>
                <DateCalendar
                    slots={{ day: CustomDay }}
                    slotProps={{
                        day: { highlightedDays: selectedDates ? selectedDates.map(dayjs) : [] } as any,
                    }}
                />
            </ThemeProvider>
        </Card>
    );
}