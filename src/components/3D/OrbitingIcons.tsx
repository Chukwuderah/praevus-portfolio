import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Vector3 } from 'three';

const OrbitingIcon = ({ position, speed, color }: { position: Vector3; speed: number; color: string }) => {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed * 2) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

export const OrbitingTechIcons = () => {
  const icons = [
    { position: new Vector3(2, 0, 0), speed: 0.5, color: '#997A8D' },
    { position: new Vector3(-2, 0, 0), speed: -0.3, color: '#702963' },
    { position: new Vector3(0, 2, 0), speed: 0.4, color: '#32174D' },
    { position: new Vector3(0, -2, 0), speed: -0.6, color: '#EAE0D5' },
    { position: new Vector3(1.5, 1.5, 0), speed: 0.7, color: '#997A8D' },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      
      {icons.map((icon, index) => (
        <OrbitingIcon 
          key={index} 
          position={icon.position} 
          speed={icon.speed} 
          color={icon.color} 
        />
      ))}
    </Canvas>
  );
};