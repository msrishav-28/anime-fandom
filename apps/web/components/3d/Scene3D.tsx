"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface Scene3DProps {
    children: React.ReactNode;
    className?: string;
}

export function Scene3D({ children, className }: Scene3DProps) {
    return (
        <div className={`fixed inset-0 -z-50 ${className}`}>
            <Canvas
                camera={{ position: [0, 5, 10], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <fog attach="fog" args={["#050505", 5, 20]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#06B6D4" />
                    {children}
                </Suspense>
            </Canvas>
        </div>
    );
}
