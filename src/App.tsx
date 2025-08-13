import { useState } from 'react'

import { RoadmapPresentation } from './roadmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RoadmapPresentation />
  )
}

export default App
