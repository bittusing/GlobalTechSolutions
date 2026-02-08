import { useEffect, useRef, useState } from 'react'

interface QuotaData {
    name: string
    allocated: number
    used: number
    unit: string
}

const quotaData: QuotaData[] = [
    { name: 'API Requests', allocated: 100000, used: 67234, unit: 'requests/mo' },
    { name: 'Storage', allocated: 500, used: 312, unit: 'GB' },
    { name: 'Bandwidth', allocated: 1000, used: 456, unit: 'GB/mo' },
    { name: 'Team Seats', allocated: 50, used: 42, unit: 'users' },
    { name: 'Integrations', allocated: 25, used: 18, unit: 'active' },
    { name: 'Webhooks', allocated: 100, used: 73, unit: 'endpoints' },
]

interface AnimatedCounterProps {
    value: number
    duration?: number
    suffix?: string
}

function AnimatedCounter({ value, duration = 1500, suffix = '' }: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const startTime = performance.now()

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)

                        // Easing function
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setDisplayValue(Math.floor(eased * value))

                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [value, duration])

    return (
        <span ref={ref}>
            {displayValue.toLocaleString()}{suffix}
        </span>
    )
}

interface SortConfig {
    key: keyof QuotaData
    direction: 'asc' | 'desc'
}

export default function QuotasGridDemo() {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' })

    const sortedData = [...quotaData].sort((a, b) => {
        const aVal = a[sortConfig.key]
        const bVal = b[sortConfig.key]

        if (typeof aVal === 'string' && typeof bVal === 'string') {
            return sortConfig.direction === 'asc'
                ? aVal.localeCompare(bVal)
                : bVal.localeCompare(aVal)
        }

        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal
        }

        return 0
    })

    const handleSort = (key: keyof QuotaData) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }))
    }

    const SortIcon = ({ active, direction }: { active: boolean; direction: 'asc' | 'desc' }) => (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{
                opacity: active ? 1 : 0.3,
                transform: direction === 'desc' ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s'
            }}
        >
            <path d="M6 2L10 7H2L6 2Z" fill="currentColor" />
        </svg>
    )

    // Calculate totals
    const totalAllocated = quotaData.reduce((sum, q) => sum + q.allocated, 0)
    const totalUsed = quotaData.reduce((sum, q) => sum + q.used, 0)

    return (
        <div>
            {/* Metrics Cards */}
            <div className="grid grid--3 mb-xl">
                <div className="card metric">
                    <div className="metric__value">
                        <AnimatedCounter value={totalUsed} />
                    </div>
                    <div className="metric__label">Total Used</div>
                </div>

                <div className="card metric">
                    <div className="metric__value">
                        <AnimatedCounter value={totalAllocated} />
                    </div>
                    <div className="metric__label">Total Allocated</div>
                </div>

                <div className="card metric">
                    <div className="metric__value" style={{ color: 'var(--accent-green)' }}>
                        <AnimatedCounter value={Math.round((totalUsed / totalAllocated) * 100)} suffix="%" />
                    </div>
                    <div className="metric__label">Overall Usage</div>
                </div>
            </div>

            {/* Quotas Table */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{
                            background: 'var(--bg-elev-2)',
                            borderBottom: '1px solid var(--bg-elev-3)'
                        }}>
                            <th
                                onClick={() => handleSort('name')}
                                style={{
                                    padding: 'var(--space-md)',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    fontSize: 'var(--small)',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    Resource
                                    <SortIcon active={sortConfig.key === 'name'} direction={sortConfig.direction} />
                                </span>
                            </th>
                            <th
                                onClick={() => handleSort('allocated')}
                                style={{
                                    padding: 'var(--space-md)',
                                    textAlign: 'right',
                                    cursor: 'pointer',
                                    fontSize: 'var(--small)',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                                    Allocated
                                    <SortIcon active={sortConfig.key === 'allocated'} direction={sortConfig.direction} />
                                </span>
                            </th>
                            <th
                                onClick={() => handleSort('used')}
                                style={{
                                    padding: 'var(--space-md)',
                                    textAlign: 'right',
                                    cursor: 'pointer',
                                    fontSize: 'var(--small)',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                                    Used
                                    <SortIcon active={sortConfig.key === 'used'} direction={sortConfig.direction} />
                                </span>
                            </th>
                            <th style={{
                                padding: 'var(--space-md)',
                                textAlign: 'right',
                                fontSize: 'var(--small)',
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                            }}>
                                Usage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((quota, index) => {
                            const percentage = Math.round((quota.used / quota.allocated) * 100)
                            const isHigh = percentage > 80
                            const isMedium = percentage > 60 && percentage <= 80

                            return (
                                <tr
                                    key={quota.name}
                                    style={{
                                        borderBottom: index < sortedData.length - 1 ? '1px solid var(--bg-elev-2)' : 'none'
                                    }}
                                >
                                    <td style={{
                                        padding: 'var(--space-md)',
                                        fontSize: 'var(--body)',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {quota.name}
                                        <span style={{
                                            display: 'block',
                                            fontSize: 'var(--tiny)',
                                            color: 'var(--muted)'
                                        }}>
                                            {quota.unit}
                                        </span>
                                    </td>
                                    <td style={{
                                        padding: 'var(--space-md)',
                                        textAlign: 'right',
                                        fontSize: 'var(--body)',
                                        color: 'var(--text-secondary)',
                                        fontFamily: 'var(--font-mono)'
                                    }}>
                                        {quota.allocated.toLocaleString()}
                                    </td>
                                    <td style={{
                                        padding: 'var(--space-md)',
                                        textAlign: 'right',
                                        fontSize: 'var(--body)',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-mono)'
                                    }}>
                                        {quota.used.toLocaleString()}
                                    </td>
                                    <td style={{
                                        padding: 'var(--space-md)',
                                        textAlign: 'right'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', justifyContent: 'flex-end' }}>
                                            <div style={{
                                                width: 80,
                                                height: 6,
                                                background: 'var(--bg-elev-3)',
                                                borderRadius: 3,
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    width: `${percentage}%`,
                                                    height: '100%',
                                                    background: isHigh ? 'var(--accent-red)' : isMedium ? 'var(--accent-yellow)' : 'var(--accent-green)',
                                                    borderRadius: 3,
                                                    transition: 'width 0.3s ease'
                                                }} />
                                            </div>
                                            <span style={{
                                                fontSize: 'var(--small)',
                                                fontFamily: 'var(--font-mono)',
                                                color: isHigh ? 'var(--accent-red)' : isMedium ? 'var(--accent-yellow)' : 'var(--accent-green)',
                                                minWidth: 40,
                                                textAlign: 'right'
                                            }}>
                                                {percentage}%
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
