export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full filter blur-3xl animate-float-slow-delay"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-400/30 dark:bg-pink-600/20 rounded-full filter blur-3xl animate-float-slower"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 dark:bg-cyan-600/20 rounded-full filter blur-3xl animate-float-slow"></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-300/30 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}