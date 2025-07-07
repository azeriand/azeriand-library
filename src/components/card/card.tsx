import { CSSProperties } from "react"
import "./card.modules.css"

export interface CardProps {
    color?: string;
}

export const Card = ({ color }: CardProps) => {

    return (
        <div className="card">ABRAZOS GRATIS!!!</div>
    )
}