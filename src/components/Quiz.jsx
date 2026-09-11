import { useState } from 'react'
import CodeBlock from './CodeBlock'

export default function Quiz({ questions, strings }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[index]
  const answered = selected !== null

  function choose(i) {
    if (answered) return
    setSelected(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex(index + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  function reset() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  function optionClass(i) {
    if (!answered) return ''
    if (i === q.answer) return 'correct'
    if (i === selected) return 'wrong'
    return ''
  }

  return (
    <div className="quiz">
      {done ? (
        <div className="quiz-done">
          <h3>{strings.quizComplete}</h3>
          <p>
            {strings.quizScored
              .replace('{score}', score)
              .replace('{total}', questions.length)}
          </p>
          <button className="quiz-next" type="button" onClick={reset}>
            {strings.quizRestart}
          </button>
        </div>
      ) : (
        <>
          <div className="quiz-score">
            {strings.quizQuestionOf
              .replace('{current}', index + 1)
              .replace('{total}', questions.length)}
          </div>
          <span className="quiz-type">{strings.quizTypes[q.type]}</span>
          <div className="quiz-question">{q.question}</div>
          {q.code && <CodeBlock code={q.code} />}
          <div className="quiz-options">
            {q.type === 'tf'
              ? [strings.quizTrue, strings.quizFalse].map((label, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`quiz-option ${optionClass(i)}`}
                    onClick={() => choose(i)}
                    disabled={answered}
                  >
                    {label}
                  </button>
                ))
              : q.options.map((option, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`quiz-option ${optionClass(i)}`}
                    onClick={() => choose(i)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                ))}
          </div>
          {answered && (
            <div className="quiz-feedback">
              <div className={`quiz-result ${selected === q.answer ? 'correct' : 'wrong'}`}>
                {selected === q.answer ? strings.quizCorrect : strings.quizWrong}
              </div>
              <div className="quiz-explain">{q.explain}</div>
              <button className="quiz-next" type="button" onClick={next}>
                {index + 1 < questions.length ? strings.quizNext : strings.quizResults}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}