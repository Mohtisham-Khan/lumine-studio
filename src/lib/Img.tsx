export const Img = ({ src, alt }: { src: string; alt: string }) =>
  src ? <img src={src} alt={alt} className="w-full h-full object-cover object-center" /> : null