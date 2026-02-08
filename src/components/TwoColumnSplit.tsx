import { ReactNode } from 'react'

interface TwoColumnSplitProps {
    children: [ReactNode, ReactNode]
    reversed?: boolean
    className?: string
    alignItems?: 'start' | 'center' | 'end'
}

export default function TwoColumnSplit({
    children,
    reversed = false,
    className = '',
    alignItems = 'center'
}: TwoColumnSplitProps) {
    return (
        <div
            className={`two-col ${reversed ? 'two-col--reverse' : ''} ${className}`}
            style={{ alignItems }}
        >
            {children[0]}
            {children[1]}
        </div>
    )
}
