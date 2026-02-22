export const Button = ({ href, children, variant = 'primary', target }: any) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 hover:scale-105";
  const variants: any = {
    primary: "bg-[#1e293b] text-white hover:bg-black shadow-xl",
    secondary: "border-2 border-slate-400 bg-white/70 text-slate-800 hover:bg-white shadow-md"
  };

  return (
    <a href={href} target={target} rel={target ? "noreferrer" : ""} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
};

export const Tag = ({ children }: { children: string }) => (
  <span className="text-[10px] px-3 py-1 bg-white text-blue-900 border border-blue-200 rounded-full font-black uppercase shadow-sm tracking-tighter">
    {children}
  </span>
);

export const ImageFrame = ({ src, alt }: { src: string, alt: string }) => (
  <div className="w-full md:w-56 h-56 shrink-0 rounded-2xl shadow-inner bg-slate-200 overflow-hidden border border-white/50">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
    />
  </div>
);