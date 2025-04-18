
import ImageCarousel from "@/components/ImageCarousel";
import VideoSection from "@/components/VideoSection";
import BambaGallery from "@/components/BambaGallery";
import EnhancedSocialLinks from "@/components/EnhancedSocialLinks";
import { Instagram, Facebook, Youtube, Globe, BookOpen, Flame } from 'lucide-react';

const Index = () => {
  // Images for gallery
  const galleryImages = [
    "/lovable-uploads/5a207a3c-44f7-4b0a-8246-bc7e7b16a4ba.png",
    "/lovable-uploads/23b8a627-2408-4b12-9372-8d0a1fc95bea.png",
    "/lovable-uploads/2da0c4ff-69cb-46a6-8f9e-7b121cc337fb.png",
    "/lovable-uploads/121d74c8-6435-41eb-b809-606c3182b22a.png",
    "/lovable-uploads/02f9e6b5-8ea8-444a-9ed6-96928f3550b0.png",
    "/lovable-uploads/354d7ca2-56e6-4e56-bbcf-be49638439ff.png",
    // Removing the 7th image as requested
    "/lovable-uploads/2ba14a73-a5cd-4ad6-8e48-f8926eda432a.png",
  ];

  // במבה וקולה project images - updated with new images
  const bambaImages = [
    "/lovable-uploads/30197937-48f2-4e04-9e00-875d7c19d3bd.png",
    "/lovable-uploads/e77b412f-5c3f-43a9-9002-10b13797ae80.png",
    "/lovable-uploads/3746898e-9eca-437e-a2c4-af2428743628.png",
    "/lovable-uploads/52325d5d-8f9f-4768-bc5d-138d761ec521.png",
    "/lovable-uploads/f2880b62-1a92-49b6-ad68-4246716b921e.png",
    "/lovable-uploads/c158c285-5418-49bf-a7ea-511a0df306e6.png",
    "/lovable-uploads/90bbc4e5-70a0-4143-956a-1ef0570a083b.png",
    "/lovable-uploads/5e947e38-329f-40d2-a74b-be9547176375.png"
  ];

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
            backgroundImage: `url('${galleryImages[0]}')`,
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

      {/* Photo Gallery - updated to use the new carousel component */}
      <ImageCarousel 
        images={galleryImages} 
        title="תמונות לזיכרון 📸"
      />

      {/* Videos Section */}
      <VideoSection 
        title="סרטונים לזיכרון 🎥" 
        videos={memorialVideos} 
      />

      {/* במבה וקולה Gallery - now a grid */}
      <BambaGallery 
        title="פרויקט לזכרו – במבה וקולה 🧡" 
        images={bambaImages}
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
          <div className="absolute inset-0 bg-[url('/lovable-uploads/5a207a3c-44f7-4b0a-8246-bc7e7b16a4ba.png')] 
                          opacity-5 bg-cover bg-center" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
