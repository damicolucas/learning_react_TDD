import React, { ReactNode } from "react"
import { CardContainer } from "./styles"

type CardProps = {
    children: ReactNode
}
export default function Card ({ children }: CardProps) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}
