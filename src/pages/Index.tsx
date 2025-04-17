
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import ExternalLinks from "@/components/ExternalLinks";
import { Instagram, Facebook } from "lucide-react";

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
    "/lovable-uploads/bc60d6e4-3310-466f-8b9d-ae75f4ccdba6.png",
    "/lovable-uploads/f76536b1-d9a5-4ded-8d1b-f9f50a74e433.png",
    "/lovable-uploads/924a50bd-792a-4d04-85a3-9a8b521e3b62.png",
    "/lovable-uploads/0d0157e9-9b35-4db6-9688-80595416e26f.png",
    "/lovable-uploads/0f365da3-437a-460e-ba5a-e8f85307b660.png"
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

  // External links
  const memorialLinks = [
    {
      icon: "instagram" as const,
      text: "עמוד אינסטגרם",
      url: "https://www.instagram.com/maydan_biton?igsh=MnN0eXNyMGQ5ajBn"
    },
    {
      icon: "facebook" as const,
      text: "עמוד פייסבוק אישי",
      url: "https://www.facebook.com/maydan23?mibextid=ZbWKwL"
    },
    {
      icon: "globe" as const,
      text: "עמוד יזכור ממשלתי",
      url: "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9E%D7%95%D7%9F-%D7%9E%D7%99%D7%93%D7%9F%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_884932dbbe301884aeb6edad38f6fac7"
    },
    {
      icon: "book" as const,
      text: "ספר זיכרון ב‑Canva",
      url: "https://www.canva.com/design/DAGFG5s8pzY/kpL2DwRv6Yh84s6VWVrPGA/edit"
    },
    {
      icon: "flame" as const,
      text: "עמודי הנצחה בפייסבוק",
      url: "https://www.facebook.com/profile.php?id=100064394576023"
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
        <div className="absolute inset-0 bg-memorial-blue/90 z-10"></div>
        
        <div className="container mx-auto px-4 z-20" dir="rtl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-alef font-bold text-memorial-charcoal mb-6">
              לזכרו של מימון מידן ביטון ז"ל
            </h1>
            <h2 className="text-2xl md:text-3xl font-alef font-medium text-memorial-charcoal mb-6">
              "הוא היה האדם הכי מצחיק בעולם ובעל השמחת חיים הגדולה ביותר!"
            </h2>
            <p className="text-xl font-assistant text-memorial-charcoal max-w-3xl mx-auto">
              מידן תמיד עשה חיקויים, הביא שמחה לכל החברים והמשפחה, ונתן לכל אחד להרגיש מיוחד.
              הוא ראה את החיים באופטימיות ולא נתן לשום דבר לעכב אותו.
            </p>
          </div>
        </div>
      </section>

      {/* Tribute Text Panel */}
      <section className="bg-white py-16" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="text-xl font-assistant text-memorial-charcoal">
                  <p className="mb-4">❤ מידן היה חבר טוב ובן משפחה מדהים, נתן לכל אחד להרגיש הכי מיוחד בעולם.</p>
                </div>
              </div>
              <div className="flex">
                <div className="text-xl font-assistant text-memorial-charcoal">
                  <p className="mb-4">❤ הוא ראה את החיים באופטימיות ולא נתן לדברים לעכב אותו.</p>
                  <p>❤ אחרי לכתו למדנו להעריך את שמחת החיים שלו אפילו יותר.</p>
                </div>
              </div>
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

      {/* External Links */}
      <ExternalLinks 
        title="קישורים לזיכרון 🔗" 
        links={memorialLinks} 
      />

      {/* Footer */}
      <footer className="bg-memorial-dark py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white font-assistant">
              © 2025 לזכרו של מימון מידן ביטון ז"ל
            </p>
            <div className="flex justify-center mt-4 gap-4">
              <a 
                href="https://www.instagram.com/maydan_biton?igsh=MnN0eXNyMGQ5ajBn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-memorial-gold hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/maydan23?mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-memorial-gold hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
