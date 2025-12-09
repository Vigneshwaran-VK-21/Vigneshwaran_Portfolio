import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 500 }) {
    const meshRef = useRef();
    const particlesRef = useRef();

    // Generate random particle positions
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, [count]);

    // Generate random colors
    const colors = useMemo(() => {
        const colors = new Float32Array(count * 3);
        const colorPalette = [
            new THREE.Color('#3b82f6'),
            new THREE.Color('#8b5cf6'),
            new THREE.Color('#ec4899'),
            new THREE.Color('#06b6d4'),
        ];

        for (let i = 0; i < count; i++) {
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return colors;
    }, [count]);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function ParticleField() {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} performance={{ min: 0.5 }}>
                <Particles count={500} />
            </Canvas>
        </div>
    );
}
