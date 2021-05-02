import React from 'react'
import { useBasitToast } from 'basit-toast'

const ExampleUseBasitToast = () => {
  const { defaults } = useBasitToast()

  const handleClick = () => {
    defaults('Hallo', 'bottomcenter')
  }

  return <button onClick={handleClick}>click</button>
}

export default ExampleUseBasitToast
