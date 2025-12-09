import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Individual floating shape component
function FloatingShape({ geometry, position, color, speed = 1 }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001 * speed;
            meshRef.current.rotation.y += 0.002 * speed;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                {geometry === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
                {geometry === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
                {geometry === 'torus' && <torusGeometry args={[1, 0.4, 16, 100]} />}
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

// Main component
export default function FloatingShapes() {
    const shapes = [
        { geometry: 'sphere', position: [-4, 2, -5], color: '#3b82f6', speed: 0.8 },
        { geometry: 'box', position: [4, -1, -8], color: '#8b5cf6', speed: 1.2 },
        { geometry: 'torus', position: [2, 3, -6], color: '#ec4899', speed: 1 },
    ];

    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} performance={{ min: 0.5 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                {shapes.map((shape, index) => (
                    <FloatingShape key={index} {...shape} />
                ))}
            </Canvas>
        </div>
    );
}
