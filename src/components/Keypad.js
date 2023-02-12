import React, { useEffect, useState } from 'react'

export default function Keypad({usedKeys}) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('data/db.json',
              {headers: 
                {'Content-Type': 'application/json','Accept': 'application/json'}
            })
        .then(res => res.json())
        .then(json => {
            setLetters(json.letters)
        })
  }, [])

  return (
    <div className="keypad">
        {letters && letters.map((l) => {
            const color = usedKeys[l.key]
            return (
                <div key={l.key} className={color}>{l.key}</div>
            )
        })}
    </div>
  )
}
