
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import ExternalLinks from "@/components/ExternalLinks";
import BambaGallery from "@/components/BambaGallery";
import { Instagram, Facebook, Youtube, Globe, BookOpen, Flame } from "lucide-react";

const Index = () => {
  // Images for gallery
  const galleryImages = [
    "/lovable-uploads/5a207a3c-44f7-4b0a-8246-bc7e7b16a4ba.png",
    "/lovable-uploads/23b8a627-2408-4b12-9372-8d0a1fc95bea.png",
    "/lovable-uploads/2da0c4ff-69cb-46a6-8f9e-7b121cc337fb.png",
    "/lovable-uploads/121d74c8-6435-41eb-b809-606c3182b22a.png",
    "/lovable-uploads/02f9e6b5-8ea8-444a-9ed6-96928f3550b0.png",
    "/lovable-uploads/354d7ca2-56e6-4e56-bbcf-be49638439ff.png",
    "/lovable-uploads/fe29c73d-e757-4e40-bfc5-3213d2aa1f5a.png",
    "/lovable-uploads/2ba14a73-a5cd-4ad6-8e48-f8926eda432a.png",
  ];

  // במבה וקולה project images
  const bambaImages = [
    "/lovable-uploads/489dedcf-401d-4c50-836d-934062769c22.png",
    "/lovable-uploads/ab23a1ff-26be-4c88-8e48-1a9fabea3a85.png",
    "/lovable-uploads/34f40273-3426-451f-84ac-9043e0b3b647.png",
    "/lovable-uploads/7ffd4761-7cd0-4424-ae1a-d2de458c917b.png",
    "/lovable-uploads/6092d9d8-3046-455e-90b1-f9cc64b69386.png",
    "/lovable-uploads/a9b6b2d1-221e-49dc-b5f0-84fc76b889ef.png",
    "/lovable-uploads/177e3d44-b707-439a-89f2-1a614fca0323.png",
    "/lovable-uploads/361a2aff-8a25-406f-b19d-05798479db72.png",
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

  return (
    <div className="min-h-screen bg-memorial-blue/30">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('${galleryImages[0]}')` }}
        ></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-20">
          <h1 className="text-5xl md:text-6xl font-alef font-bold text-white drop-shadow-lg">
            לזכרו של מימון מידן ביטון ז"ל
          </h1>
        </div>
      </section>

      {/* Tribute Text Panel */}
      <section className="bg-white py-16" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xl font-assistant text-memorial-charcoal space-y-4">
              <p>מידן היה האדם הכי מצחיק בעולם ובעל השמחת חיים הגדולה ביותר!</p>
              <p>הוא תמיד היה עושה חיקויים ומצחיק את כל החברים והמשפחה.</p>
              <p>הוא היה חבר טוב ובן משפחה מדהים, נתן לכל אחד להרגיש הכי מיוחד בעולם. ❤️</p>
              <p>הוא ראה את החיים באופטימיות ולא נתן לדברים לעכב אותו.</p>
              <p>מידן היה מדהים בחייו ולאחר מכן הבנו את זה טוב יותר לאחר מותו.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <ImageGallery 
        images={galleryImages} 
        title="תמונות לזיכרון 📸"
      />

      {/* Videos Section */}
      <VideoSection 
        title="סרטונים לזיכרון 🎥" 
        videos={memorialVideos} 
      />

      {/* במבה וקולה Gallery */}
      <BambaGallery 
        title="פרויקט לזכרו – במבה וקולה 🧡" 
        images={bambaImages}
      />

      {/* Social Links */}
      <div className="w-full py-12 px-4 bg-white" dir="rtl">
        <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">
          קישורים לזיכרון 🔗
        </h3>
        <div className="flex justify-center gap-8">
          <a 
            href="https://www.instagram.com/maydan_biton?igsh=MnN0eXNyMGQ5ajBn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-memorial-gold hover:text-memorial-charcoal transition-colors"
          >
            <Instagram size={32} />
          </a>
          <a 
            href="https://www.facebook.com/maydan23?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-memorial-gold hover:text-memorial-charcoal transition-colors"
          >
            <Facebook size={32} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-memorial-dark py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white font-assistant">
              © 2025 לזכרו של מימון מידן ביטון ז"ל
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
