// Simple terminal state management
let terminalState = {
  isOpen: false,
  listeners: [],
}

export const useTerminalStore = {
  getState: () => terminalState,
  setState: (newState) => {
    terminalState = { ...terminalState, ...newState }
    terminalState.listeners.forEach((listener) => listener(terminalState))
  },
  subscribe: (listener) => {
    terminalState.listeners.push(listener)
    return () => {
      terminalState.listeners = terminalState.listeners.filter(
        (l) => l !== listener
      )
    }
  },
  openTerminal: () => {
    useTerminalStore.setState({ isOpen: true })
  },
  closeTerminal: () => {
    useTerminalStore.setState({ isOpen: false })
  },
}

