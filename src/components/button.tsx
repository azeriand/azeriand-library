import { CSSProperties } from "react"

export interface ButtonProps {
    color?: string;
}

export const Button = ({ color }: ButtonProps) => {

    const buttonStyle: CSSProperties = {
        backgroundColor: color
    }

    return (
        <button className="pl-4 py-2 px-4 rounded hover:opacity-80 transition-opacity" style={buttonStyle}>
            ABRAZOS GRATIS!!!
        </button>
    )
}