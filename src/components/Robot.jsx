export default function Robot() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">

      {/* 🌞 SUN */}
      <div className="
        absolute w-32 h-32 rounded-full
        bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500
        shadow-[0_0_60px_rgba(251,191,36,0.8)]
      "></div>

      {/* ORBIT 1 */}
      <div className="absolute w-64 h-64 rounded-full border border-white/10"></div>

      {/* PLANET 1 */}
      <div className="absolute w-64 h-64 animate-orbit">
        <div className="
          w-4 h-4 bg-blue-400 rounded-full
          shadow-[0_0_10px_#60A5FA]
        "></div>
      </div>

      {/* ORBIT 2 */}
      <div className="absolute w-80 h-80 rounded-full border border-purple-400/10"></div>

      {/* PLANET 2 */}
      <div className="absolute w-80 h-80 animate-orbit-reverse">
        <div className="
          w-3 h-3 bg-purple-400 rounded-full
          shadow-[0_0_10px_#a855f7]
        "></div>
      </div>

      {/* ORBIT 3 */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-green-400/10"></div>

      {/* PLANET 3 */}
      <div className="absolute w-[420px] h-[420px] animate-orbit-slow">
        <div className="
          w-3 h-3 bg-green-400 rounded-full
          shadow-[0_0_10px_#4ade80]
        "></div>
      </div>

    </div>
  );
}