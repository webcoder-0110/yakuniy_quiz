import type { Question, Topic } from './types'
import { shuffle } from './utils'

export type ShuffledQuestion = {
  id: string
  prompt: string
  options: { id: string; text: string; isCorrect: boolean }[]
  explanation?: string
}

export type QuizSession = {
  topicId: string
  timePerQuestionSec: number
  questions: ShuffledQuestion[]
}

export function buildSession(topic: Topic): QuizSession {
  const questions = shuffle(topic.questions).map((q) => {
    const options = q.options.map((text, idx) => ({
      id: `${q.id}-opt-${idx}`,
      text,
      isCorrect: idx === q.correctIndex,
    }))
    const shuffledOptions = shuffle(options)

    return {
      id: q.id,
      prompt: q.prompt,
      options: shuffledOptions,
      explanation: q.explanation,
    }
  })

  return {
    topicId: topic.id,
    timePerQuestionSec: topic.timePerQuestionSec,
    questions,
  }
}

export function scoreSession(session: QuizSession, answers: Record<string, string | null>) {
  const total = session.questions.length
  let correct = 0
  for (const q of session.questions) {
    const chosenOptionId = answers[q.id]
    if (!chosenOptionId) continue
    const opt = q.options.find((o) => o.id === chosenOptionId)
    if (opt?.isCorrect) correct++
  }
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100)
  return { total, correct, wrong: total - correct, percent }
}

export function isAnswerCorrect(session: QuizSession, questionId: string, optionId: string | null) {
  const q = session.questions.find((x) => x.id === questionId)
  if (!q || !optionId) return false
  const opt = q.options.find((o) => o.id === optionId)
  return Boolean(opt?.isCorrect)
}
