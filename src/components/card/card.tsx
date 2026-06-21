import { MouseEventHandler, ReactNode, useContext, ElementType } from 'react';
import { ThemeContext } from '../theme-context';
import './card.css';

export type CardProps<T extends ElementType = 'article'> = {
    as?: T;
    children?: ReactNode;
    noPadding?: boolean;
    noBlur?: boolean;
    appearance?: string;
    blur?: number
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
    appearance,
    blur = 10,
    color,
    intensity,
    dark = true,
    onClick,
    className,
    style,
    ...rest
}: CardProps<T>) {
    const Component = as || 'article';
    const { theme, cardDefaults } = useContext(ThemeContext);

    const mergedProps = {
        appearance: appearance || cardDefaults.appearance,
        color: color || cardDefaults.color,
        intensity: intensity || cardDefaults.intensity,
        dark: dark !== undefined ? dark : cardDefaults.theme,
    };

    let intensityValue = mergedProps.intensity;
    if (intensityValue === undefined) {
        intensityValue = theme === 'dark' ? 600 : 300;
    }

    const cardStyle: React.CSSProperties = {
        ...(style || {}),
    } as React.CSSProperties;

    (cardStyle as any)['--glass-color'] = `var(--color-${mergedProps.color}-${intensityValue})`;
    (cardStyle as any)['--card-text-color'] = `var(--color-${mergedProps.color}-${mergedProps.dark ? '100' : '800'})`;
    if (mergedProps.appearance === 'glass' && !noBlur) {
        cardStyle.backdropFilter = `blur(${blur}px)`;
    }

    let rounded = 'rounded-md';

    if (className) {
        const roundedMatch = className.match(/rounded\-[a-z0-9]+/g);
        if (roundedMatch) {
            rounded = roundedMatch[roundedMatch.length - 1];
        }
    }

    const classNames = `card ${rounded} ${mergedProps.appearance} ${className || ''} ${noPadding ? '' : 'p-[2rem]'}`.trim();

    return (
        <Component className={classNames} style={cardStyle} onClick={onClick} {...rest}>
            {children}
        </Component>
    );
}
