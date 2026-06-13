# NEXUS AI - Agentic Studio

A premium AI operating system interface built with React, TypeScript, and Tailwind CSS. This is a high-fidelity recreation of a futuristic AI development environment with 3D avatar visualization, real-time agent management, and advanced code editing capabilities.

## Features

### 🎯 Core Components

- **3D Avatar Display**: Interactive 3D avatar using React Three Fiber with animations and dynamic lighting
- **Left Sidebar**: Agent navigation, multi-agent management, and comprehensive tool ecosystem
- **Right Sidebar**: Calling tools, chat interface with Nova, and agent skills dashboard
- **Center Panel**: Holographic command center with the 3D avatar as the primary focal point
- **Bottom Panel**: Integrated code editor with Monaco and active pipeline management
- **Floating Panels**: Status indicators, performance metrics, and control centers

### 🎨 Design System

- **Theme**: Premium dark theme with glassmorphism effects
- **Color Palette**: 
  - Primary: Neon Purple (`#a855f7`)
  - Secondary: Electric Blue (`#06b6d4`)
  - Accents: Bright Purple (`#d946ef`), Bright Blue (`#0ea5e9`)
- **Effects**:
  - Glass morphism with 10px blur
  - Glow effects and drop shadows
  - Floating animations
  - Smooth transitions and hover states

### 🏗️ Architecture

```
src/
├── components/
│   ├── AvatarDisplay.tsx         # 3D avatar with React Three Fiber
│   ├── SidebarLeft.tsx            # Main navigation and agents
│   ├── SidebarRight.tsx           # Tools and chat interface
│   ├── CenterPanel.tsx            # Avatar showcase area
│   ├── BottomPanel.tsx            # Code editor and pipeline
│   ├── FloatingPanels.tsx         # Floating status indicators
│   └── ui/
│       └── ScrollArea.tsx         # Custom scroll component
├── App.tsx                        # Main layout
├── main.tsx                       # React entry point
└── index.css                      # Global styles and animations
```

## Tech Stack

- **React 18.2**: UI framework with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **React Three Fiber 8.14**: 3D graphics (Three.js)
- **Three.js 0.157**: 3D scene management
- **Monaco Editor 4.5**: Code editing capabilities
- **Vite 5.0**: Fast build tooling
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Project Structure

### Layout Proportions
- **Left Sidebar**: 256px (fixed width)
- **Center Panel**: Flexible, takes remaining space
- **Right Sidebar**: 320px (fixed width)
- **Bottom Panel**: 320px (fixed height)
- **Total Aspect**: Optimized for ultra-wide monitors (2560px+), but responsive

### Visual Hierarchy
1. **Primary**: 3D Avatar (center, largest element)
2. **Secondary**: Agent tools, code editor, pipeline
3. **Tertiary**: Status indicators, metrics, chat
4. **Background**: Animated grid and glow effects

## Features Breakdown

### Left Sidebar
- NEXUS AI branding with logo
- Active agent display (Nova) with status
- Multi-agent manager (6 agents)
- Navigation menu (10 items)
- Voice control buttons
- MCP Network connection status

### Right Sidebar
- Calling Tools section with 7 tools
- Chat interface with Nova
- Message input with send button
- Skills panel with 5 skills and progress bars

### Center Panel
- 3D avatar with 4 geometric body parts
- Rotating animated ring
- Floating glow effects
- 4 floating status panels:
  - Agent Status (top-left)
  - Emotions & Voice (top-right)
  - MCP Tools (bottom-left)
  - Performance (bottom-right)
- Emotions indicator bar (bottom-center)

### Bottom Panel
- 3 tab system (Explorer, Analytics, Styles)
- Code editor with syntax highlighting
- Pipeline visualizer with 6 stages
- Expandable stage details
- Real-time status indicators

## Styling Conventions

### CSS Classes
- **Glass panels**: `glass-panel`, `glass-border`
- **Glowing text**: `glow-text-purple`, `glow-text-blue`
- **Animated elements**: `floating-element`, `avatar-glow`
- **Gradient borders**: `neon-border`

### Color Variables
```css
--nexus-dark: #0a0e27
--nexus-darker: #050710
--nexus-purple: #a855f7
--nexus-blue: #06b6d4
--glass-light: rgba(255, 255, 255, 0.05)
```

### Responsive Breakpoints
The layout is optimized for ultra-wide displays but maintains responsiveness using Tailwind's breakpoint system.

## Performance Optimization

- Lazy loading with React Suspense for the 3D component
- Efficient CSS grid/flexbox layouts
- Optimized animations using CSS transforms
- Code-split Monaco Editor and Three.js
- Production build size: ~1.3MB (JS), ~18KB (CSS)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires WebGL support for 3D rendering

## Future Enhancements

- Interactive 3D model customization
- Real-time data binding to agent state
- Monaco Editor integration with actual code
- WebSocket connection for live agent updates
- Custom theme selection
- Agent creation/deletion UI
- Real-time collaboration features

## License

Proprietary - NEXUS AI Agentic Studio
