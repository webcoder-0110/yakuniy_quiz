import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './App'
import Home from './pages/Home'
import Subjects from './pages/Subjects'
import Topics from './pages/Topics'
import Quiz from './pages/Quiz'
import About from './pages/About'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'subjects', element: <Subjects /> },
      { path: 'subjects/:subjectId', element: <Topics /> },
      { path: 'quiz/:subjectId/:topicId', element: <Quiz /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
