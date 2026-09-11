import Block from './Block'
import MethodCard from './MethodCard'
import Quiz from './Quiz'

export default function TopicView({ topic, strings }) {
  return (
    <article className="topic">
      <header className="topic-head">
        <h1>{topic.title}</h1>
        {topic.intro && <p className="topic-intro">{topic.intro}</p>}
      </header>

      {topic.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}

      {topic.methods?.length > 0 && (
        <>
          <h2>{strings.methodsHeading}</h2>
          {topic.methods.map((method, i) => (
            <MethodCard key={i} method={method} />
          ))}
        </>
      )}

      {topic.quiz?.length > 0 && (
        <>
          <h2>{strings.quizHeading}</h2>
          <Quiz questions={topic.quiz} strings={strings} />
        </>
      )}
    </article>
  )
}