import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingSphere() {
    const sphereRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Sphere ref={sphereRef} args={[2, 32, 32]}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#8b5cf6"
                    emissiveIntensity={0.3}
                />
            </Sphere>

            {/* Orbiting rings */}
            {[0, 120].map((rotation, i) => (
                <mesh key={i} rotation={[Math.PI / 2, 0, (rotation * Math.PI) / 180]}>
                    <torusGeometry args={[3, 0.05, 8, 50]} />
                    <meshStandardMaterial
                        color={i === 0 ? '#ec4899' : '#8b5cf6'}
                        emissive={i === 0 ? '#ec4899' : '#8b5cf6'}
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.6}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function RotatingSkillSphere() {
    return (
        <div className="w-full h-[400px] relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }} performance={{ min: 0.5 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <RotatingSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
