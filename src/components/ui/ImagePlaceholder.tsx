import { useState } from 'react';
import { Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  dark?: boolean;
  aspectRatio?: string;
  src?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  label,
  className = '',
  dark = true,
  aspectRatio = 'aspect-[4/3]',
  src,
  alt,
}: ImagePlaceholderProps) {
  const [imgError, setImgError] = useState(false);

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={alt || label}
        loading="lazy"
        onError={() => setImgError(true)}
        className={`${aspectRatio} w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`${dark ? 'img-placeholder' : 'img-placeholder-light'} ${aspectRatio} w-full ${className}`}>
      <Camera size={28} className={dark ? 'text-primary/60' : 'text-primary/40'} />
      <span className={`text-center leading-snug text-[11px] font-semibold ${dark ? 'text-blue-300/70' : 'text-slate-500'}`}>
        Official image will be added here.
      </span>
      <span className={`text-center text-[10px] ${dark ? 'text-white/30' : 'text-slate-400'}`}>
        {label}
      </span>
    </div>
  );
}
