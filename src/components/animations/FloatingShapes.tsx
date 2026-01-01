const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div 
        className="absolute top-3/4 right-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float-medium"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-float-fast"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-1/4 w-16 h-16 border border-primary/10 rotate-45 animate-spin-slow" />
      <div 
        className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-primary/20 rounded-full animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      />
      <div 
        className="absolute top-2/3 right-1/3 w-8 h-8 bg-primary/10 rotate-12 animate-bounce-slow"
        style={{ animationDelay: "0.5s" }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-morph" />
      <div 
        className="absolute top-10 left-1/2 w-56 h-56 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-2xl animate-morph"
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
};

export default FloatingShapes;
