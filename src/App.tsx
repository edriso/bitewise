import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Learn } from './pages/Learn'
import { LearnDetail } from './pages/LearnDetail'
import { Foods } from './pages/Foods'
import { Tools } from './pages/Tools'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:id" element={<LearnDetail />} />
          <Route path="foods" element={<Foods />} />
          <Route path="tools" element={<Tools />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
