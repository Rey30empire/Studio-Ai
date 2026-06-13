import { Suspense } from 'react'
import { SidebarLeft } from './components/SidebarLeft'
import { SidebarRight } from './components/SidebarRight'
import { CenterPanel } from './components/CenterPanel'
import { BottomPanel } from './components/BottomPanel'

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-nexus-dark via-nexus-darker to-nexus-dark text-white overflow-hidden flex flex-col">
      {/* Main layout: 3 column with left/right sidebars and center */}
      <div className="flex-1 flex gap-px overflow-hidden bg-nexus-darker/30">
        {/* Left Sidebar */}
        <div className="w-64 min-w-64 max-h-full overflow-hidden">
          <SidebarLeft />
        </div>

        {/* Center: Avatar and floating panels */}
        <div className="flex-1 min-w-0">
          <Suspense fallback={<div className="w-full h-full bg-nexus-darker flex items-center justify-center">Loading...</div>}>
            <CenterPanel />
          </Suspense>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 min-w-80 max-h-full overflow-hidden">
          <SidebarRight />
        </div>
      </div>

      {/* Bottom Panel: Code editor and pipeline */}
      <div className="h-80 min-h-80 border-t border-glass-blue bg-nexus-darker/50">
        <BottomPanel />
      </div>
    </div>
  )
}

export default App
