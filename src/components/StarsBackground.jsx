import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1.5} // ⭐ THIS creates movement (shooting effect)
        />
      </Canvas>
    </div>
  );
}