import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/src/assets/3D_Models/iPhone-The-Blenderender.glb');
  
  return (
<primitive 
  object={scene} 
  scale={1.2}
  position={[0, 0, 0]}
  rotation={[0, 0, 0]}
/>
  );
}
export default function PhoneViewer() {
  return (
    <motion.div 
      className="phone-viewer"
      whileInView={{ 
        scale: [1, 1],
        rotateY: [0, 360],
        translateZ: [0, 20]
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 1]
      }}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 25 }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
          />
          <Environment preset="city" />
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 3]} intensity={1.2} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}