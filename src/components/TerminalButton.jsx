import React, { useState, useEffect } from 'react'
import Terminal from './Terminal'
import { useTerminalStore } from '../store/terminalStore'

const TerminalButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = useTerminalStore.subscribe((state) => {
      setIsOpen(state.isOpen)
    })

    // Set initial state
    setIsOpen(useTerminalStore.getState().isOpen)

    return unsubscribe
  }, [])

  return (
    <>
      {/* Full-screen Terminal */}
      {isOpen && (
        <Terminal
          isFullScreen={true}
          onClose={() => useTerminalStore.closeTerminal()}
        />
      )}
    </>
  )
}

export default TerminalButton
