import { AvatarDisplay } from './AvatarDisplay'
import { FloatingPanels } from './FloatingPanels'

export function CenterPanel() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-nexus-dark via-nexus-dark to-nexus-darker">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-nexus-purple rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-nexus-blue rounded-full blur-3xl opacity-10 pointer-events-none"></div>

      {/* Avatar area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/3 h-4/5 max-w-2xl">
          <AvatarDisplay />
        </div>
      </div>

      {/* Floating panels */}
      <FloatingPanels />
    </div>
  )
}
