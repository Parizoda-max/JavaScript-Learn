import CodeBlock from './CodeBlock'

function renderInline(text) {
  const parts = text.split('`')
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <code key={i} className="inline-code">
          {part}
        </code>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p>{renderInline(block.text)}</p>
    case 'heading':
      return <h3>{block.text}</h3>
    case 'list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      )
    case 'code':
      return <CodeBlock code={block.code} />
    case 'note':
      return <div className="note">{renderInline(block.text)}</div>
    default:
      return null
  }
}