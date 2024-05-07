import * as THREE from 'three';
import { type MotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { GLTF } from 'three-stdlib';
import React from 'react';

interface Props {
  gltf: {
    nodes: {
      defaultMaterial: THREE.Mesh;
    };
    materials: {
      Material__50: THREE.MeshStandardMaterial;
    };
  } & GLTF;
  progress: MotionValue;
  position: THREE.Vector3Tuple;
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

const ItemMesh = ({ gltf, progress, position }: Props) => {
  const meshRef = useRef(null) as any;
  const { nodes, materials } = gltf;

  const rotate = useTransform(progress, [0, 1], [0, -6]);
  const rotateCounter = useTransform(progress, [0, 1], [0, 6]);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <motion.group dispose={null} rotateZ={rotate as any}>
      <motion.mesh
        ref={meshRef}
        position={position}
        rotateZ={rotateCounter as any}
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Material__50}
        scale={0.15}
      />
    </motion.group>
  );
};

export default ItemMesh;
