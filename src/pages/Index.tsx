import React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import VideoSection from "@/components/VideoSection";
import EnhancedSocialLinks from "@/components/EnhancedSocialLinks";
import {
  Instagram,
  Facebook,
  Globe,
  BookOpen,
  Flame,
} from "lucide-react";

const Index = () => {
  // 1. Hero background image (rename your file to hero-500x500.png)
  const heroImage = "/head/hero-500x500.png";

  // 2. Auto‑import every JPG/PNG under /public/memory
  const memoryModules = import.meta.glob("/memory/*.{jpg,png}", {
    eager: true,
    as: "url",
  });
  const galleryImages = Object.values(memoryModules) as string[];

  // 3. Auto‑import every JPG/PNG under /public/project
  const projectModules = import.meta.glob("/project/*.{jpg,png}", {
    eager: true,
    as: "url",
  });
  const bambaImages = Object.values(projectModules) as string[];

  // 4. Videos for the video section
  const memorialVideos = [
    {
      url: "https://www.youtube.com/watch?v=H6LHFxywNSk&t=10s",
      description: "סרטון חיקויים",
    },
    {
      url: "https://www.youtube.com/watch?v=dcT-d4h2Ur0",
      description: "סרטון תמונות",
    },
  ];

  // 5. Social links
  const socialLinks = [
    {
      icon: <Flame size={32} />,
      url: "https://www.facebook.com/profile.php?id=100064394576023",
      label: "עמוד הנצחה בפייסבוק",
    },
    {
      icon: <BookOpen size={32} />,
      url: "https://www.canva.com/design/DAGFG5s8pzY/kpL2DwRv6Yh84s6VWVrPGA/edit",
      label: "ספר זיכרון",
    },
    {
      icon: <Globe size={32} />,
      url:
        "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9E%D7%95%D7%9F-%D7%9E%D7%99%D7%93%D7%9F%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_884932dbbe301884aeb6edad38f6fac7",
      label: "עמוד יזכור ממשלתי",
    },
    {
      icon: <Facebook size={32} />,
      url: "https://www.facebook.com/maydan23?mibextid=ZbWKwL",
      label: "עמוד פייסבוק אישי",
    },
    {
      icon: <Instagram size={32} />,
      url: "https://www.instagram.com/maydan_biton?igsh=MnN0eXNyMGQ5ajBn",
      label: "עמוד אינסטגרם",
    },
  ];

  return (
    <div className="min-h-screen bg-memorial-blue/30">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-20">
          <h1
            className="
              text-5xl md:text-7xl font-alef font-bold text-white mb-8
              bg-sky-400/70 inline-block px-8 py-4 rounded-full
              transform transition-all duration-300 md:text-5xl text-2xl
            "
          >
            לזכרו של מימון מידן ביטון ז"ל
          </h1>
        </div>
      </section>

      {/* Tribute Text */}
      <section className="bg-white py-16 shadow-inner" dir="rtl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-xl font-assistant text-memorial-charcoal leading-relaxed">
              מידן היה האדם הכי מצחיק בעולם ובעל השמחת חיים הגדולה ביותר! הוא תמיד היה עושה חיקויים ומצחיק את כל החברים והמשפחה, היה חבר טוב ובן
              משפחה מדהים שנתן לכל אחד להרגיש הכי מיוחד בעולם, ראה את החיים
              באופטימיות ולא נתן לשום דבר לעכב אותו, ומידת ההערכה אל חייו רק
              גדלה לאחר מותו.
            </p>
          </div>
        </div>
      </section>

      {/* Memorial Photo Carousel */}
      <ImageCarousel images={galleryImages} title="תמונות לזיכרון 📸" />

      {/* Video Section */}
      <VideoSection title="סרטונים לזיכרון 🎥" videos={memorialVideos} />

      {/* Bamba & Cola Photo Carousel */}
      <ImageCarousel images={bambaImages} title="פרויקט לזכרו – במבה וקולה 🧡" />

      {/* Social Links */}
      <EnhancedSocialLinks title="קישורים לזיכרון 🔗" links={socialLinks} />

      {/* Footer */}
      <footer className="bg-memorial-dark py-8" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-assistant">
            © 2025 לזכרו של מימון מידן ביטון ז"ל
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
