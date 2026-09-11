import CodeBlock from './CodeBlock'

export default function MethodCard({ method }) {
  return (
    <details className="method-card" open>
      <summary className="method-head">
        <span className="method-name">{method.name}</span>
        <span className="method-syntax">{method.syntax}</span>
        <span className="method-toggle">{'\u25BE'}</span>
      </summary>
      <div className="method-body">
        <p>{method.desc}</p>
        <CodeBlock code={method.code} />
        {method.note && <div className="note">{method.note}</div>}
      </div>
    </details>
  )
}