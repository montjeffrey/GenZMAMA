"use client";

import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";

export default function Scene({ children }: { children?: React.ReactNode }) {
    return (
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: -1,
            }}
            eventSource={typeof window !== 'undefined' ? document.body : undefined}
            eventPrefix="client"
        >
            <View.Port />
            {children}
            <Preload all />
        </Canvas>
    );
}
