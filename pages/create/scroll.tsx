import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import starterTemplates from '../data/throne-scrolls.json'

export default function ScrollCreator() {
  const router = useRouter()
  const { throne } = router.query
  const [template, setTemplate] = useState(null)

  useEffect(() => {
    if (throne) {
      const match = starterTemplates.find(t => t.throne === throne)
      setTemplate(match)
    }
  }, [throne])

  if (!template) return <p>Loading scroll...</p>

  return (
    <div className="scroll-container">
      <h1>{template.title}</h1>
      <p className="invocation">🌀 {template.invocation}</p>

      <textarea rows={10} placeholder="Begin your sacred writing here..." />

      <div className="tag-suggestions">
        Suggested Tags: {template.tags.map(tag => <span key={tag}>#{tag} </span>)}
      </div>

      <button>📜 Sanctify & Submit</button>
    </div>
  )
}
