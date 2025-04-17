
import { Instagram, Facebook, Globe, BookOpen, Flame } from 'lucide-react';

interface Link {
  icon: 'instagram' | 'facebook' | 'globe' | 'book' | 'flame';
  text: string;
  url: string;
}

interface ExternalLinksProps {
  title: string;
  links: Link[];
}

export default function ExternalLinks({ title, links }: ExternalLinksProps) {
  const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram size={size} className="ml-2 text-memorial-gold" />;
      case 'facebook':
        return <Facebook size={size} className="ml-2 text-memorial-gold" />;
      case 'globe':
        return <Globe size={size} className="ml-2 text-memorial-gold" />;
      case 'book':
        return <BookOpen size={size} className="ml-2 text-memorial-gold" />;
      case 'flame':
        return <Flame size={size} className="ml-2 text-memorial-gold" />;
      default:
        return <Globe size={size} className="ml-2 text-memorial-gold" />;
    }
  };

  return (
    <div className="w-full py-12 px-4" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">{title}</h3>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-lg font-assistant hover:text-memorial-gold transition-colors"
              >
                {getIcon(link.icon)}
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
