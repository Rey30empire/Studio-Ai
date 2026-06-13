import { Zap, Eye, Heart, Wrench } from 'lucide-react'

interface FloatingPanelProps {
  position: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

function FloatingPanel({ position, title, icon, content }: FloatingPanelProps) {
  return (
    <div className={`absolute ${position} floating-element`}>
      <div className="rounded-lg p-3 w-48 border border-glass-blue/40 shadow-lg hover:shadow-neon-purple transition-shadow bg-gradient-to-br from-glass-sm to-glass-md" style={{ backdropFilter: 'blur(10px)' }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="text-nexus-purple">{icon}</div>
          <h3 className="text-xs font-semibold text-white uppercase tracking-wide">{title}</h3>
        </div>
        <div className="text-xs text-gray-400 space-y-1">
          {content}
        </div>
      </div>
    </div>
  )
}

export function FloatingPanels() {
  return (
    <>
      {/* Top Left - Agent Status */}
      <FloatingPanel
        position="top-12 left-12"
        title="ESTADO DEL AGENTE"
        icon={<Zap className="w-4 h-4" />}
        content={
          <>
            <div className="flex justify-between py-1">
              <span>Modelo:</span>
              <span className="text-nexus-blue font-semibold">Nexus-Omni v2.5</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Modo:</span>
              <span className="text-nexus-purple font-semibold">Autónomo</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Memoria:</span>
              <span className="text-green-400 font-semibold">98.7%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Herramientas:</span>
              <span className="text-nexus-blue font-semibold">24/32</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Conexión:</span>
              <span className="text-green-400 font-semibold">Óptima ✓</span>
            </div>
          </>
        }
      />

      {/* Top Right - Voice & Emotions */}
      <FloatingPanel
        position="top-12 right-12"
        title="EMOCIONES & VOZ"
        icon={<Heart className="w-4 h-4" />}
        content={
          <>
            <div className="flex gap-2 py-2">
              <button className="flex-1 px-2 py-1 rounded text-xs bg-glass-lighter hover:bg-glass-medium transition-colors border border-glass-blue/40">
                😊 Feliz
              </button>
              <button className="flex-1 px-2 py-1 rounded text-xs bg-glass-lighter hover:bg-glass-medium transition-colors border border-glass-blue/40">
                🤔 Pensativo
              </button>
            </div>
            <div className="flex gap-2 py-2">
              <button className="flex-1 px-2 py-1 rounded text-xs bg-glass-lighter hover:bg-glass-medium transition-colors border border-glass-blue/40">
                😎 Confiado
              </button>
              <button className="flex-1 px-2 py-1 rounded text-xs bg-glass-lighter hover:bg-glass-medium transition-colors border border-glass-blue/40">
                🧊 Enfocado
              </button>
            </div>
          </>
        }
      />

      {/* Bottom Left - Connections */}
      <FloatingPanel
        position="bottom-12 left-12"
        title="MCP TOOLS"
        icon={<Wrench className="w-4 h-4" />}
        content={
          <>
            <div className="flex justify-between py-1">
              <span>Conexiones:</span>
              <span className="text-green-400 font-semibold">8 Activas</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Latencia:</span>
              <span className="text-nexus-blue font-semibold">12ms</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Caché:</span>
              <span className="text-nexus-purple font-semibold">Activo</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Sincronización:</span>
              <span className="text-green-400 font-semibold">Sincronizado</span>
            </div>
          </>
        }
      />

      {/* Bottom Right - Performance */}
      <FloatingPanel
        position="bottom-12 right-12"
        title="PERFORMANCE"
        icon={<Eye className="w-4 h-4" />}
        content={
          <>
            <div className="flex justify-between py-1">
              <span>CPU:</span>
              <span className="text-yellow-400 font-semibold">32%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>RAM:</span>
              <span className="text-orange-400 font-semibold">68%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>GPU:</span>
              <span className="text-blue-400 font-semibold">45%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Latencia:</span>
              <span className="text-green-400 font-semibold">&lt;100ms</span>
            </div>
          </>
        }
      />

      {/* Center Bottom - Emotions Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 floating-element">
        <div className="rounded-full px-6 py-3 border border-glass-blue/40 shadow-lg flex gap-3 items-center bg-gradient-to-r from-glass-sm via-glass-sm to-glass-md" style={{ backdropFilter: 'blur(10px)' }}>
          <span className="text-xl">😊</span>
          <span className="text-xs font-semibold glow-text-purple">Feliz</span>
          <div className="w-px h-4 bg-glass-medium"></div>
          <span className="text-xl">🤔</span>
          <span className="text-xs font-semibold glow-text-blue">Pensativo</span>
          <div className="w-px h-4 bg-glass-medium"></div>
          <span className="text-xl">😎</span>
          <span className="text-xs font-semibold text-gray-300">Confiado</span>
          <div className="w-px h-4 bg-glass-medium"></div>
          <span className="text-xl">🧊</span>
          <span className="text-xs font-semibold text-gray-300">Enfocado</span>
          <div className="w-px h-4 bg-glass-medium"></div>
          <span className="text-xl">🤖</span>
          <span className="text-xs font-semibold text-gray-300">Cool</span>
        </div>
      </div>
    </>
  )
}
