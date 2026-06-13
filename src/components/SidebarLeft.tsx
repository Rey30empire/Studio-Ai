import { ChevronDown, Plus } from 'lucide-react'
import { ScrollArea } from './ui/ScrollArea'

const agents = [
  { id: 1, name: 'Nova', role: 'Agente Principal', status: 'Online', avatar: '👩‍🔬', color: 'from-nexus-purple' },
  { id: 2, name: 'Codex', role: 'Arquitecto de Código', status: 'Active', avatar: '👨‍💻' },
  { id: 3, name: 'Lumen', role: 'Diseñador UI/UX', status: 'Active', avatar: '🎨' },
  { id: 4, name: 'Byte', role: 'Analista de Datos', status: 'En espera', avatar: '📊' },
  { id: 5, name: 'Echo', role: 'DevOps & Deploy', status: 'Active', avatar: '🚀' },
  { id: 6, name: 'Sage', role: 'Documentación IA', status: 'Active', avatar: '📚' },
]

const navItems = [
  { icon: '📊', label: 'Dashboard', active: false },
  { icon: '📁', label: 'Proyectos', active: false },
  { icon: '⚙️', label: 'Pipeline', active: false },
  { icon: '🎯', label: 'Habilidades', active: false },
  { icon: '🛠️', label: 'Herramientas', active: false },
  { icon: '🧠', label: 'MCP Tools', active: false },
  { icon: '💾', label: 'Memoria', active: false },
  { icon: '✨', label: 'Creaciones', active: false },
  { icon: '⚡', label: 'Automatizaciones', active: false },
  { icon: '⚙️', label: 'Configuración', active: false },
]

export function SidebarLeft() {
  return (
    <div className="h-full flex flex-col w-full border-r border-glass-blue/40 bg-gradient-to-b from-glass-md to-glass-lg" style={{ backdropFilter: 'blur(10px)' }}>
      {/* Header */}
      <div className="p-4 border-b border-glass-blue/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nexus-purple via-nexus-purple-bright to-nexus-blue flex items-center justify-center shadow-glow-purple">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <div>
            <p className="font-semibold text-sm glow-text-purple">NEXUS AI</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">AGENTIC STUDIO</p>
          </div>
        </div>
      </div>

      {/* Active Agent */}
      <div className="p-4 border-b border-glass-blue/30">
        <div className="glass-border rounded-lg p-3 mb-3 border-glass-blue shadow-glow-purple/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center flex-shrink-0 shadow-glow-purple">
              👩‍🔬
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-white">NOVA</p>
              <p className="text-xs text-gray-500 truncate">Agente Principal</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-nexus-purple flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Agents List */}
      <div className="px-4 py-3 border-b border-glass-blue/30">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Agentes Activos</h3>
          <Plus className="w-4 h-4 text-nexus-purple cursor-pointer hover:text-nexus-purple-bright transition-colors" />
        </div>
        <ScrollArea className="h-40">
          <div className="space-y-2 pr-4">
            {agents.slice(1).map((agent) => (
              <div key={agent.id} className="glass-border rounded-lg p-2 hover:bg-glass-lighter transition-all cursor-pointer group border-glass-blue/40">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{agent.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{agent.name}</p>
                    <p className="text-xs text-gray-500 truncate">{agent.role}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    agent.status === 'Active' ? 'bg-green-500' : agent.status === 'Online' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <button className="w-full mt-3 text-xs text-nexus-purple hover:text-nexus-purple-bright transition-colors font-medium">
          Ver todos los agentes
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="px-4 py-3 border-b border-glass-blue/30">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">NAVEGACIÓN</h3>
        </div>
        <ScrollArea className="flex-1">
          <div className="px-4 space-y-1 py-2">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-glass-lighter hover:text-white transition-all group"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Voice Control Footer */}
      <div className="p-3 border-t border-glass-blue/30 space-y-2">
        <div className="flex gap-2">
          <button className="flex-1 glass-border rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-xs font-medium text-nexus-blue hover:bg-glass-lighter transition-all group border-glass-blue/40">
            🎤 Falar
          </button>
          <button className="flex-1 glass-border rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-xs font-medium text-nexus-purple hover:bg-glass-lighter transition-all group border-glass-blue/40">
            🔇 Silenciar
          </button>
        </div>
        <div className="text-xs text-gray-500 px-2 space-y-0.5">
          <p>Conectado a</p>
          <p className="text-nexus-blue font-semibold">MCP Network</p>
        </div>
      </div>
    </div>
  )
}
