import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const codeSnippets = [
  "const charan = new Developer();",
  "import { motion } from 'framer-motion';",
  "async function deploy() { ... }",
  "npm run build",
  "01001001 01001100",
  "<Hero3D />",
  "SELECT * FROM Users;",
  "res.status(200).json(data);",
  "export default App;",
  "git commit -m 'feat: 3D background'",
  "while (true) { code(); }",
  "db.collection('projects').find()",
  "React.useEffect(() => {}, [])"
];

function FloatingCode({ count = 100 }) {
  const group = useRef();
  
  // Generate random positions, rotations, and strings
  const items = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 60, 
          (Math.random() - 0.5) * 60, 
          (Math.random() - 0.5) * 40 - 20 
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          0
        ],
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: 0.02 + Math.random() * 0.04,
        isText: Math.random() > 0.4, // 60% text, 40% wireframes
        scale: 0.3 + Math.random() * 0.4 // randomize size
      });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    group.current.children.forEach((child, i) => {
      child.position.z += items[i].speed;
      child.rotation.x += 0.002;
      child.rotation.y += 0.002;
      
      if (child.position.z > 5) {
        child.position.z = -35;
        child.position.x = (Math.random() - 0.5) * 60;
        child.position.y = (Math.random() - 0.5) * 60;
      }
    });
  });

  return (
    <group ref={group}>
      {items.map((data, i) => (
        data.isText ? (
          <Text
            key={i}
            position={data.position}
            rotation={data.rotation}
            fontSize={data.scale}
            color="#34d399"
            fillOpacity={0.15}
            anchorX="center"
            anchorY="middle"
          >
            {data.text}
          </Text>
        ) : (
          <mesh key={i} position={data.position} rotation={data.rotation}>
            <boxGeometry args={[data.scale, data.scale, data.scale]} />
            <meshBasicMaterial color="#059669" wireframe={true} transparent opacity={0.1} />
          </mesh>
        )
      ))}
    </group>
  );
}

export default function DeveloperBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      {/* Subtle glow flares behind canvas */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[150px] z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[150px] z-0"></div>

      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <fog attach="fog" args={['#050505', 10, 35]} />
          <FloatingCode count={60} />
        </Canvas>
      </div>

      {/* Very light gradient vignette to soften edges without hiding the canvas */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050505]/90"></div>
    </div>
  );
}
