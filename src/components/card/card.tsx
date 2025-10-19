import { MouseEventHandler, ReactNode, useContext, useEffect, useState, ElementType } from 'react';
import { ThemeContext } from '../theme-context';
import './card.css';

export type CardProps<T extends ElementType = 'article'> = {
    as?: T;
    children?: ReactNode;
    noPadding?: boolean;
    noBlur?: boolean;
    appearance?: string;
    color?: string;
    intensity?: number;
    dark?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<T>;

export function Card<T extends ElementType = 'article'>({
    as,
    children,
    noPadding,
    noBlur = false,
    appearance = 'glass',
    color = 'neutral',
    intensity,
    dark = true,
    onClick,
    className,
    style,
    ...rest
}: CardProps<T>) {
    const Component = as || 'article';

    let [classNames, setClassNames] = useState("");
    let [cardStyle, setCardStyle] = useState({});
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        let intensityValue = intensity;

        if (intensityValue === undefined) {
            intensityValue = theme === 'dark' ? 600 : 300;
        }

        setCardStyle({
            "--glass-color": `var(--color-${color}-${intensityValue})`,
            "--card-text-color": `var(--color-${color}-${dark ? '100' : '800'})`,
            backdropFilter: appearance === 'glass' && !noBlur ? 'blur(10px)' : undefined,
            ...style,
        });

        let rounded = 'rounded-md';

        if (className) {
            const roundedMatch = className.match(/rounded\-[a-z0-9]+/g);
            if (roundedMatch) {
                rounded = roundedMatch[roundedMatch.length - 1];
            }
        }

        setClassNames(`card ${rounded} ${appearance} ${className} ${noPadding ? '' : 'p-[2rem]'}`);
    }, [color, intensity, dark, appearance, noBlur, className, theme]);

    return (
        <Component className={classNames} style={cardStyle} onClick={onClick} {...rest}>
            {children}
        </Component>
    );
}
