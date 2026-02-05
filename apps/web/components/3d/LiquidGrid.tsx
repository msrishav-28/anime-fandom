"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function LiquidGrid() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Generate a plane with many segments for displacement
    const geometry = useMemo(() => new THREE.PlaneGeometry(100, 100, 80, 80), []);

    useFrame((state) => {
        if (!meshRef.current) return;

        const { clock } = state;
        const t = clock.getElapsedTime() * 0.5;

        // Access position attribute
        const position = meshRef.current.geometry.attributes.position;

        // Simple wave displacement (mocking perlin noise for MVP)
        for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const y = position.getY(i);

            // Combine sine waves for organic look
            const z = Math.sin(x * 0.2 + t) * Math.cos(y * 0.15 + t) * 2;

            position.setZ(i, z);
        }

        position.needsUpdate = true;
    });

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -10, 0]}
        >
            <meshStandardMaterial
                color="#06B6D4"
                wireframe
                transparent
                opacity={0.3}
                emissive="#06B6D4"
                emissiveIntensity={0.5}
            />
        </mesh>
    );
}
