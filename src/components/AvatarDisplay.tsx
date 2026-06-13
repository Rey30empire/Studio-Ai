import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AvatarModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#a855f7" emissiveIntensity={0.5} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 1.2, 0.4]} />
        <meshStandardMaterial color="#6d28d9" emissive="#7c3aed" emissiveIntensity={0.3} />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.6, 0.5, 0]}>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial color="#6d28d9" emissive="#7c3aed" emissiveIntensity={0.3} />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.6, 0.5, 0]}>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial color="#6d28d9" emissive="#7c3aed" emissiveIntensity={0.3} />
      </mesh>

      {/* Glow sphere */}
      <mesh position={[0, 0, -1.5]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function AnimatedRing() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <mesh ref={ringRef} position={[0, -0.5, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
      <torusGeometry args={[1.5, 0.05, 32, 100]} />
      <meshBasicMaterial color="#06b6d4" />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#06b6d4" />
      <AvatarModel />
      <AnimatedRing />
    </>
  )
}

export function AvatarDisplay() {
  return (
    <div className="avatar-glow w-full h-full">
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-nexus-purple to-nexus-blue flex items-center justify-center text-white font-semibold">Loading Avatar...</div>}>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
