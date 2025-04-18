
import { Instagram, Facebook, Youtube, Globe, BookOpen, Flame } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface EnhancedSocialLinksProps {
  title: string;
  links: SocialLink[];
}

export default function EnhancedSocialLinks({ title, links }: EnhancedSocialLinksProps) {
  return (
    <div className="w-full py-12 px-4 bg-white" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">
        {title}
      </h3>
      <div className="flex justify-center gap-10 flex-wrap">
        {links.map((link, i) => (
          <a 
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="p-3 rounded-full bg-white shadow-md group-hover:shadow-lg
                       transform transition-all duration-300
                       group-hover:scale-110 group-hover:text-memorial-gold
                       border-2 border-transparent group-hover:border-memorial-gold mb-2">
              {link.icon}
            </div>
            <span className="text-xs font-assistant text-memorial-charcoal group-hover:text-memorial-gold transition-colors">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
