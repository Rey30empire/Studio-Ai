import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { ScrollArea } from './ui/ScrollArea'

const pipelineStages = [
  { name: 'PLAN', status: 'Analizando', icon: '📋', color: 'text-nexus-blue' },
  { name: 'RAZONAR', status: 'Descomponiendo tareas', icon: '🧠', color: 'text-nexus-purple' },
  { name: 'CREAR', status: 'Generando código', icon: '⚡', color: 'text-yellow-400' },
  { name: 'PROBAR', status: 'Ejecutando pruebas', icon: '✅', color: 'text-green-400' },
  { name: 'OPTIMIZAR', status: 'Mejorando rendimiento', icon: '🚀', color: 'text-blue-400' },
  { name: 'DESPLEGAR', status: 'Listo para producción', icon: '🎯', color: 'text-cyan-400' },
]

const sampleCode = `import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'

export function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchAnalytics().then(setData)
  }, [])

  return (
    <div className="dashboard">
      <Canvas>
        <DataVisualization data={data} />
      </Canvas>
    </div>
  )
}`

export function BottomPanel() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col border-t border-glass-blue/40 bg-gradient-to-r from-glass-md to-glass-lg" style={{ backdropFilter: 'blur(10px)' }}>
      {/* Tabs */}
      <div className="flex border-b border-glass-blue/30">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-nexus-purple border-b-2 border-nexus-purple bg-glass-lighter/50">
          🔄 EXPLORADOR
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 hover:text-white transition-colors">
          📊 ANALYTICS
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 hover:text-white transition-colors">
          💾 ESTILOS
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden flex">
        {/* Left: Code Editor */}
        <div className="flex-1 flex flex-col border-r border-glass-blue/30">
          <div className="flex items-center justify-between px-4 py-2 border-b border-glass-blue/30">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-nexus-blue">📄</span>
              <span className="font-medium">dashboard.tsx</span>
              <span className="text-gray-500">48%</span>
            </div>
            <X className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" />
          </div>
          <ScrollArea className="flex-1">
            <div className="font-mono text-xs leading-relaxed p-4 text-gray-300">
              <div className="space-y-1">
                {sampleCode.split('\n').map((line, idx) => (
                  <div key={idx} className="flex">
                    <span className="w-8 text-gray-600 select-none">{idx + 1}</span>
                    <code className="flex-1 text-gray-300">{line}</code>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Right: Pipeline */}
        <div className="w-80 flex flex-col border-l border-glass-blue/30">
          <div className="px-4 py-3 border-b border-glass-blue/30">
            <h3 className="text-sm font-semibold glow-text-purple">PIPELINE ACTIVO</h3>
          </div>
          <ScrollArea className="flex-1">
            <div className="space-y-2 p-3">
              {pipelineStages.map((stage, idx) => (
                <div key={idx} className="glass-border rounded-lg overflow-hidden border-glass-blue/40">
                  <button
                    onClick={() => setExpandedStage(expandedStage === idx ? null : idx)}
                    className="w-full px-3 py-2 flex items-center gap-2 hover:bg-glass-lighter transition-all text-left"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-nexus-purple transition-transform ${
                        expandedStage === idx ? 'rotate-180' : ''
                      }`}
                    />
                    <span className="text-lg">{stage.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-white">{stage.name}</p>
                      <p className="text-xs text-gray-500">{stage.status}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </button>
                  {expandedStage === idx && (
                    <div className="px-3 py-2 border-t border-glass-blue/30 bg-glass-lighter/50 text-xs text-gray-400 space-y-1">
                      <p>• Procesando entrada...</p>
                      <p>• Analizando contexto...</p>
                      <p>• Generando solución...</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
