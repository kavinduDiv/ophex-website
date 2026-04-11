// FloatingShapes — GPU-friendly version
// Hidden entirely on mobile to eliminate 8 simultaneous blurred/animated layers.
// On desktop: blur levels reduced, morph animation removed (it causes reflow via border-radius changes).

const FloatingShapes = () => {
  return (
    // Hidden on mobile & tablet — too GPU-intensive for small devices
    <div className="hidden lg:block fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Reduced from blur-3xl to blur-2xl, morph removed, using opacity-driven pulse instead */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float-slow" />
      <div
        className="absolute top-3/4 right-20 w-48 h-48 bg-primary/8 rounded-full blur-xl animate-float-medium"
        style={{ animationDelay: "2s" }}
      />

      {/* Geometric shapes — kept lightweight: no blur, just border */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border border-primary/10 rotate-45 animate-spin-slow" />

      {/* Single gradient orb — reduced from two, blur-2xl instead of blur-3xl, no morph */}
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-primary/4 to-accent/4 rounded-full blur-2xl animate-float-slow"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};

export default FloatingShapes;
