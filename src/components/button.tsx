import { CSSProperties } from "react"

export const Button = ({ color }) => {

    const buttonStyle: CSSProperties = {
        backgroundColor: color
    }

    return (
        <button style={buttonStyle}>ABRAZOS GRATIS!!!</button>
    )
}