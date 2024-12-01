export default function GradientBackground() {
    return (
      <div className="absolute inset-0">
        {/* Top gradient */}
        <div className="absolute top-10 left-0/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-80 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        {/* Additional ambient gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>
    );
  } 