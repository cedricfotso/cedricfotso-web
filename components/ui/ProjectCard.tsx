// components/ui/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  slug: string;
  tagline: string;
  secteur: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ProjectCard({ title, slug, tagline, secteur, imageUrl, imageAlt }: ProjectCardProps) {
  return (
    <Link 
      href={`/projets/${slug}`} 
      className="group flex flex-col bg-white border border-[#EAEAEA] rounded-lg overflow-hidden hover:border-brand hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-56 w-full bg-neutral-50 border-b border-[#EAEAEA] overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <Image 
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <span className="text-neutral-300 font-mono text-sm">Pas d'image</span>
        )}
        
        {/* Badge "Orange Vercel" (petit, précis, sharp) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[10px] font-mono font-medium uppercase tracking-wider px-2 py-1 rounded bg-white text-brand border border-[#EAEAEA] shadow-sm">
            {secteur || 'Digital'}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg tracking-tight mb-1 group-hover:text-brand transition-colors text-black">{title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{tagline}</p>
      </div>
    </Link>
  );
}