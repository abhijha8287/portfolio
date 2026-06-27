"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 140;
const CONNECT_DISTANCE = 2.1;

function generateNodes(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 5 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function generateEdges(positions: Float32Array) {
  const pts: number[] = [];
  const count = positions.length / 3;
  for (let i = 0; i < count; i++) {
    const ax = positions[i * 3];
    const ay = positions[i * 3 + 1];
    const az = positions[i * 3 + 2];
    let connections = 0;
    for (let j = i + 1; j < count && connections < 2; j++) {
      const bx = positions[j * 3];
      const by = positions[j * 3 + 1];
      const bz = positions[j * 3 + 2];
      const d = Math.hypot(ax - bx, ay - by, az - bz);
      if (d < CONNECT_DISTANCE) {
        pts.push(ax, ay, az, bx, by, bz);
        connections++;
      }
    }
  }
  return new Float32Array(pts);
}

function NeuralMesh() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => generateNodes(NODE_COUNT), []);
  const edgePositions = useMemo(() => generateEdges(positions), [positions]);

  useFrame((state, delta) => {
    const { pointer } = state;
    target.current.x += (pointer.x - target.current.x) * 0.04;
    target.current.y += (pointer.y - target.current.y) * 0.04;
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x = target.current.y * 0.15;
      group.current.rotation.y += target.current.x * 0.0008;
    }
  });

  return (
    <group ref={group} scale={Math.min(viewport.width / 9, 1.1)}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#60a5fa"
          size={0.055}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#7c3aed" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

export function NeuralField() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <NeuralMesh />
    </Canvas>
  );
}
