import ImageCarousel from "@/components/ImageCarousel";
import VideoSection from "@/components/VideoSection";
import BambaGallery from "@/components/BambaGallery";
import EnhancedSocialLinks from "@/components/EnhancedSocialLinks";
import { Instagram, Facebook, Youtube, Globe, BookOpen, Flame } from 'lucide-react';
import { staticImages } from '@/lib/staticData';

const Index = () => {
  // Videos for video section
  const memorialVideos = [
    {
      url: "https://www.youtube.com/watch?v=H6LHFxywNSk&t=10s",
      description: "סרטון חיקויים"
    },
    {
      url: "https://www.youtube.com/watch?v=dcT-d4h2Ur0",
      description: "סרטון תמונות"
    }
  ];

  // Social links with labels
  const socialLinks = [
    { 
      icon: <Flame size={32} />, 
      url: "https://www.facebook.com/profile.php?id=100064394576023",
      label: "עמוד הנצחה בפייסבוק"
    },
    { 
      icon: <BookOpen size={32} />, 
      url: "https://www.canva.com/design/DAGFG5s8pzY/kpL2DwRv6Yh84s6VWVrPGA/edit",
      label: "ספר זיכרון"
    },
    { 
      icon: <Globe size={32} />, 
      url: "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9E%D7%95%D7%9F-%D7%9E%D7%99%D7%93%D7%9F%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_884932dbbe301884aeb6edad38f6fac7",
      label: "עמוד יזכור ממשלתי"
    },
    { 
      icon: <Facebook size={32} />, 
      url: "https://www.facebook.com/maydan23?mibextid=ZbWKwL",
      label: "עמוד פייסבוק אישי"
    },
    { 
      icon: <Instagram size={32} />, 
      url: "https://www.instagram.com/maydan_biton?igsh=MnN0eXNyMGQ5ajBn",
      label: "עמוד אינסטגרם"
    }
  ];

  return (
    <div className="min-h-screen bg-memorial-blue/30">
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 
                     animate-in fade-in duration-1000" 
          style={{ 
            backgroundImage: `url('${staticImages.hero}')`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-20">
          <h1 className="text-5xl md:text-7xl font-alef font-bold text-white drop-shadow-lg
                        animate-in slide-in-from-bottom duration-700">
            לזכרו של מימון מידן ביטון ז"ל
          </h1>
        </div>
      </section>

      {/* Enhanced Tribute Text Panel */}
      <section className="bg-white py-16 shadow-inner" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xl font-assistant text-memorial-charcoal space-y-6
                          divide-y divide-memorial-blue/20">
              {[
                "מידן היה האדם הכי מצחיק בעולם ובעל השמחת חיים הגדולה ביותר!",
                "הוא תמיד היה עושה חיקויים ומצחיק את כל החברים והמשפחה.",
                "הוא היה חבר טוב ובן משפחה מדהים, נתן לכל אחד להרגיש הכי מיוחד בעולם. ❤️",
                "הוא ראה את החיים באופטימיות ולא נתן לדברים לעכב אותו.",
                "מידן היה מדהים בחייו ולאחר מכן הבנו את זה טוב יותר לאחר מותו."
              ].map((text, i) => (
                <p key={i} className="py-4 first:pt-0 last:pb-0
                                    transition-all duration-300 hover:text-memorial-gold">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - using new static images */}
      <ImageCarousel 
        images={staticImages.gallery} 
        title="תמונות לזיכרון 📸"
      />

      {/* Videos Section */}
      <VideoSection 
        title="סרטונים לזיכרון 🎥" 
        videos={memorialVideos} 
      />

      {/* במבה וקולה Gallery - using new static images */}
      <BambaGallery 
        title="פרויקט לזכרו – במבה וקולה 🧡" 
        images={staticImages.project}
      />

      {/* Enhanced Social Links with labels */}
      <EnhancedSocialLinks 
        title="קישורים לזיכרון 🔗" 
        links={socialLinks}
      />

      {/* Enhanced Footer */}
      <footer className="bg-memorial-dark py-8 relative overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10">
            <p className="text-white font-assistant">
              © 2025 לזכרו של מימון מידן ביטון ז"ל
            </p>
          </div>
          <div className="absolute inset-0 bg-[url('/תמונה ראשית/FB_IMG_1744902556835.jpg')] 
                          opacity-5 bg-cover bg-center" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
