interface EditorDemoProps {
    className?: string
}

export default function EditorDemo({ className = '' }: EditorDemoProps) {
    const codeLines = [
        { lineNum: 1, content: [{ text: 'async ', cls: 'syntax-keyword' }, { text: 'function ', cls: 'syntax-keyword' }, { text: 'deployService', cls: 'syntax-function' }, { text: '() {', cls: '' }] },
        { lineNum: 2, content: [{ text: '  ', cls: '' }, { text: 'const ', cls: 'syntax-keyword' }, { text: 'config', cls: 'syntax-variable' }, { text: ' = ', cls: '' }, { text: 'await ', cls: 'syntax-keyword' }, { text: 'loadConfig', cls: 'syntax-function' }, { text: '();', cls: '' }] },
        { lineNum: 3, content: [{ text: '  ', cls: '' }, { text: '// Initialize cloud resources', cls: 'syntax-comment' }] },
        { lineNum: 4, content: [{ text: '  ', cls: '' }, { text: 'const ', cls: 'syntax-keyword' }, { text: 'cluster', cls: 'syntax-variable' }, { text: ' = ', cls: '' }, { text: 'new ', cls: 'syntax-keyword' }, { text: 'K8sCluster', cls: 'syntax-function' }, { text: '(config);', cls: '' }] },
        { lineNum: 5, content: [{ text: '  ', cls: '' }, { text: 'await ', cls: 'syntax-keyword' }, { text: 'cluster.', cls: '' }, { text: 'scale', cls: 'syntax-function' }, { text: '(', cls: '' }, { text: '3', cls: 'syntax-number' }, { text: ');', cls: '' }] },
        { lineNum: 6, content: [{ text: '  ', cls: '' }, { text: 'return ', cls: 'syntax-keyword' }, { text: '"deployed"', cls: 'syntax-string' }, { text: ';', cls: '' }] },
        { lineNum: 7, content: [{ text: '}', cls: '' }] },
    ]

    const agentCards = [
        { title: 'Build Agent', status: 'running', body: 'Compiling TypeScript...' },
        { title: 'Deploy Agent', status: 'idle', body: 'Waiting for build' },
        { title: 'Monitor Agent', status: 'completed', body: 'Health check passed' },
    ]

    return (
        <div className={`two-col ${className}`} style={{ gap: 'var(--gap)' }}>
            {/* Code Editor */}
            <div className="editor-demo">
                <div className="editor-demo__header">
                    <span className="editor-demo__dot editor-demo__dot--red" />
                    <span className="editor-demo__dot editor-demo__dot--yellow" />
                    <span className="editor-demo__dot editor-demo__dot--green" />
                    <span style={{ marginLeft: 'auto', fontSize: 'var(--tiny)', color: 'var(--muted)' }}>
                        deploy.ts
                    </span>
                </div>
                <div className="editor-demo__content">
                    {codeLines.map((line) => (
                        <div key={line.lineNum} className="editor-demo__line">
                            <span className="editor-demo__line-number">{line.lineNum}</span>
                            <span>
                                {line.content.map((segment, i) => (
                                    <span key={i} className={segment.cls}>{segment.text}</span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Agent Manager */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <h4 className="h4" style={{ marginBottom: 'var(--space-sm)' }}>Agent Manager</h4>
                {agentCards.map((card, index) => (
                    <div
                        key={card.title}
                        className="agent-card"
                        style={{ animationDelay: `${index * -2}s` }}
                    >
                        <div className="agent-card__header">
                            <span className="agent-card__title">{card.title}</span>
                            <span
                                className={`agent-card__status ${card.status === 'running' ? 'agent-card__status--running' : ''}`}
                                style={{
                                    background: card.status === 'completed' ? 'var(--accent-green)' :
                                        card.status === 'idle' ? 'var(--muted)' : undefined
                                }}
                            />
                        </div>
                        <p className="agent-card__body">{card.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
