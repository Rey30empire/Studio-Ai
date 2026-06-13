import { X, ChevronRight } from 'lucide-react'
import { ScrollArea } from './ui/ScrollArea'

const toolSections = [
  { label: 'Buscar', icon: '🔍' },
  { label: 'Leer', icon: '📖' },
  { label: 'Escribir', icon: '✍️' },
  { label: 'Ejecutar', icon: '▶️' },
  { label: 'Navegar', icon: '🧭' },
  { label: 'API Call', icon: '🔌' },
  { label: 'DB Query', icon: '🗄️' },
]

const skills = [
  { name: 'Desarrollo Full Stack', progress: 98, icon: '⚡' },
  { name: 'UI/UX & Diseño', progress: 95, icon: '🎨' },
  { name: 'Análisis de Datos', progress: 93, icon: '📊' },
  { name: 'DevOps & Cloud', progress: 90, icon: '☁️' },
  { name: 'IA & Machine Learning', progress: 89, icon: '🤖' },
]

const sampleMessages = [
  { role: 'Nova', message: 'Crea un dashboard analítico con IA y gráficos en 3D', time: '12:45' },
]

export function SidebarRight() {
  return (
    <div className="h-full flex flex-col w-full border-l border-glass-blue/40 bg-gradient-to-b from-glass-md to-glass-lg" style={{ backdropFilter: 'blur(10px)' }}>
      {/* Header */}
      <div className="p-4 border-b border-glass-blue/30">
        <div className="flex items-center justify-between mb-3">
          <h2 className="glow-text-purple font-semibold text-sm">CALLING TOOLS</h2>
          <X className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Tools */}
      <div className="px-4 py-3 border-b border-glass-blue/30">
        <div className="space-y-2">
          {toolSections.map((tool, idx) => (
            <button
              key={idx}
              className="w-full glass-border rounded-lg p-3 flex items-center justify-between text-sm hover:bg-glass-lighter transition-all group border-glass-blue/40"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{tool.icon}</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">{tool.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-nexus-blue transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="px-4 py-3 border-b border-glass-blue/30">
          <h3 className="text-sm font-semibold glow-text-blue">CHAT CON NOVA</h3>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            {sampleMessages.map((msg, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-xs font-semibold text-nexus-purple">{msg.role}</p>
                <div className="glass-border rounded-lg p-3 text-sm text-gray-300 leading-relaxed">
                  {msg.message}
                </div>
                <p className="text-xs text-gray-500 text-right">{msg.time}</p>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-glass-blue/30">
          <div className="relative">
            <input
              type="text"
              placeholder="Escriba su mensaje..."
              className="w-full glass-border rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexus-purple/50 border-glass-blue/40"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-nexus-blue hover:text-nexus-blue-bright transition-colors">
              ▶️
            </button>
          </div>
        </div>
      </div>

      {/* Skills Panel */}
      <div className="border-t border-glass-blue/30 p-4 max-h-48">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">HABILIDADES</h3>
        <ScrollArea className="h-40">
          <div className="space-y-3 pr-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span>{skill.icon}</span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-nexus-blue font-semibold">{skill.progress}%</span>
                </div>
                <div className="h-1.5 bg-glass-lighter rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-nexus-purple to-nexus-blue rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
