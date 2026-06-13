import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by boundary:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen bg-nexus-dark flex items-center justify-center text-white p-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-nexus-purple">Error Loading NEXUS</h1>
            <p className="text-gray-400">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-nexus-purple rounded-lg hover:bg-nexus-purple-bright transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
