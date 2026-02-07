"use client";

import { useRef, useMemo } from "react";
import { useFrame, extend, ReactThreeFiber } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

// Define the custom shader material
const LiquidGridMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color("#06B6D4") },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying float vElevation;
    uniform float time;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Complex wave distortion (Perlin-like)
      float elevation = sin(pos.x * 0.2 + time) * sin(pos.y * 0.15 + time) * 2.0;
      elevation += sin(pos.x * 0.5 - time * 0.5) * sin(pos.y * 0.5 - time * 0.5) * 0.5;
      
      pos.z += elevation;
      vElevation = elevation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform vec3 color;
    varying float vElevation;

    void main() {
      // mix color based on elevation for "liquid" feel
      vec3 finalColor = mix(color, color * 1.5, vElevation * 0.2 + 0.5);
      float alpha = 0.3 + vElevation * 0.1; // Higher points are more opaque
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

extend({ LiquidGridMaterial });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            liquidGridMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof LiquidGridMaterial>;
        }
    }
}

interface LiquidGridProps {
    performanceMode?: boolean; // If true, force low-end CPU mode
}

export function LiquidGrid({ performanceMode = false }: LiquidGridProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    // Generate a plane with many segments for distortion
    const geometry = useMemo(() => new THREE.PlaneGeometry(100, 100, 80, 80), []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const { clock } = state;
        const t = clock.getElapsedTime() * 0.5;

        // HIGH PERFORMANCE (Shader - GPU)
        if (!performanceMode && materialRef.current) {
            materialRef.current.uniforms.time.value = t;
        }
        // LOW PERFORMANCE (CPU Fallback)
        else {
            const position = meshRef.current.geometry.attributes.position;
            for (let i = 0; i < position.count; i++) {
                const x = position.getX(i);
                const y = position.getY(i);
                const z = Math.sin(x * 0.2 + t) * Math.cos(y * 0.15 + t) * 2;
                position.setZ(i, z);
            }
            position.needsUpdate = true;
        }
    });

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -10, 0]}
        >
            {performanceMode ? (
                <meshStandardMaterial
                    color="#06B6D4"
                    wireframe
                    transparent
                    opacity={0.3}
                    emissive="#06B6D4"
                    emissiveIntensity={0.5}
                />
            ) : (
                // @ts-ignore
                <liquidGridMaterial
                    ref={materialRef}
                    wireframe
                    transparent
                />
            )}
        </mesh>
    );
}
