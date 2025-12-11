"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

export default function Hero3D() {
    // Placeholder for floating 3D elements (e.g. 3D letters or shapes)
    // For Scrapbook vibe, maybe just floating paper scraps?

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Simple floating geometric shapes representing blocks/toys */}
                <mesh position={[2, 1, -2]} rotation={[0.5, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#fe019a" />
                </mesh>
                <mesh position={[-2, -1, -3]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#39ff14" />
                </mesh>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
            </Float>
        </group>
    );
}
