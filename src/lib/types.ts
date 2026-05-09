export type SubjectId = 'dinshunoslik' | 'falsafa' | 'dasturlash'

export type Question = {
  id: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export type Topic = {
  id: string
  title: string
  description?: string
  timePerQuestionSec: number
  questions: Question[]
}

export type Subject = {
  id: SubjectId
  title: string
  tagline: string
  topics: Topic[]
}
