import * as THREE from 'three';
import { type MotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface Props {
  second?: THREE.BufferGeometry;
  geometry: THREE.BufferGeometry;
  material: THREE.MeshStandardMaterial;
  progress: MotionValue;
  position: THREE.Vector3Tuple;
}

const ItemMesh = ({ second, geometry, material, progress, position }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [RDN, setRDN] = useState(0);
  const meshRef = useRef(null) as any;

  const rotate = useTransform(progress, [0, 1], [0, -6]);
  const rotateCounter = useTransform(progress, [0, 1], [0, 6]);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  useEffect(() => {
    const rdn = Math.round(Math.random() * 180);
    setRDN(rdn);
  }, []);

  return (
    <motion.group dispose={null} rotateZ={rotate as any}>
      <motion.mesh
        ref={meshRef}
        position={position}
        rotation={[RDN, RDN, RDN]}
        // rotateZ={rotateCounter as any}
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        animate={isHover ? 'hover' : 'default'}
        variants={{
          default: {
            scale: 0.004,
            transition: {
              duration: 0.2,
              ease: 'linear',
            },
          },
          hover: {
            scale: 0.005,
            transition: {
              duration: 0.2,
              ease: 'linear',
            },
          },
        }}
        scale={0.004}
        onPointerOver={(e) => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
      >
        <meshPhongMaterial shininess={100} color={'#87CEEB'} emissive={'#0077B6'} specular={'#fff'} />
      </motion.mesh>
    </motion.group>
  );
};

export default ItemMesh;
