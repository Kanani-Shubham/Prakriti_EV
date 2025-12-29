
import React, { useState, useEffect } from 'react';

interface Article {
  id: number;
  title: string;
  cat: string;
  date: string;
  read: string;
  img: string;
  excerpt: string;
  content: string;
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [selectedPost, setSelectedPost] = useState<Article | null>(null);

  const categories = ['All Topics', 'Technology', 'Lifestyle', 'Sustainability', 'Maintenance'];

  const articles: Article[] = [
    {
      id: 1,
      title: "The Future of Urban Commuting",
      cat: "Technology",
      date: "Oct 24, 2023",
      read: "5 min",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChOW5Sd3M3mYy1TpyTcmh0gUXiFJDOfJbSk8SE_MZ1tkD7H_JNLAJrjiG4a4grhRxUfomwSIsf2QjqDPCv_UkMxFVl0IvnFZyIkEe4xQxNVFOvQQtJ5kXT-Eqxj6qCqMwrm5rPdQenX_tNFM00vhh29mLCe3hiEofZiiLE-H1mDe3LjQ-LUmvjE1SgB4cNLU6oH4pFlBfekkQgE6YtazlLLhJDVU1Mi15oD1PHuo-pX6gUsaLs3NTl-uV7EItw4nJjCp6MeW9p-Tk",
      excerpt: "Stay updated with the latest in EV tech and how it's changing the face of transportation.",
      content: "Urban commuting is undergoing a radical transformation. As cities become more congested, the need for efficient, small-footprint transportation grows. Prakriti EV is at the forefront of this shift, integrating AI-driven battery management and swappable battery tech to ensure you never run out of juice in the middle of a traffic jam. In this article, we explore how smart connectivity is making city rides safer and more predictable."
    },
    {
      id: 2,
      title: "Best Electric Scooters for Ladies",
      cat: "Lifestyle",
      date: "Oct 20, 2023",
      read: "4 min",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQGR1c4WmY_y2QJxaNi6eDgozrurZVlN6LeNWSI8zQm68clAeZqCwhtwRFk2fbW5IjIGav60Dzv_7yzt_us8PQluuAkva3GqTXqjEj7QEOF-9BASzM-pi3qCerP6o0Pgzbf60tDHIHrnKojgGTG8Q6rz9SeM2g5i_CTeDyuh0c_SPsNyh64q-Hxwx0ioKmmECgP3CNg9H7kBg76G8maPAC9VJDgNC0LVUjj95sgTeed-faNs22H9QyyjN4agMs8heD_dclgymFpl8",
      excerpt: "Discover why Prakriti models are becoming the top choice for modern independent women.",
      content: "Weight, ease of handling, and style are the top priorities for many riders. Our latest lightweight models feature a low center of gravity and ergonomic seating, making them incredibly stable and easy to park. We've spoken to dozens of commuters who've made the switch and found that the silence and smooth acceleration significantly reduce morning stress."
    },
    {
      id: 3,
      title: "Impact on Public Health",
      cat: "Sustainability",
      date: "Oct 15, 2023",
      read: "6 min",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFW7flpTRtQNMrySELEZYD-1ofrLoO_9BNoc_qjCm7t2oOnA9Bswa8ghYyUIH5vUKfWsGC3SgWAwXGuyIdNhR3cKnW9gfaAIczxjikpUbwFPOqh4yn4K_H7qjNgTXzerXnNcZv_F9uNADjHMYGNH9vvGoiqu1Gj5p1hl9jVCbdNAWGOq1OAWibL1ddiLqqrArE2SIw-siYlMrHautk5m9Za3bEhmoNU-SbdbZPtA7vMruirl0XfRPBEhjOGvd9TvKilouQKLLXVQ0",
      excerpt: "How zero-emission vehicles are contributing to cleaner air in our bustling metropolises.",
      content: "Air pollution is a silent killer in many Indian cities. Every Prakriti EV on the road replaces a petrol-guzzling alternative, directly contributing to lower CO2 emissions and reduced particulate matter. Our study shows that a localized shift to 30% EV adoption could lead to a measurable improvement in respiratory health indices within just two years."
    },
    {
      id: 4,
      title: "Battery Maintenance 101",
      cat: "Maintenance",
      date: "Sep 28, 2023",
      read: "5 min",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJcO8E6SB1UKW9W9c4_JdxhxkDvhILmtbTeEkRscsb5bi61c-9fx9Kngf3C1iADbbElHghcr-FgXtq3TwdBYMgauMSDdESG_BloORgXk0qoYc-5-Z88mpGLBIYA9_XqIRv2zmzGCiQI3A_GSdxb-yQ7f3RaGnxFwemOlxWKym8h-1en1OC750kSM_nOYkZ1WCFFH4rvwHHXGPYv0Br68EVtz3_8W4XY6J2BmoktjaXvVvKZLWmRQDp-15Lg2tRKTjj8XlxQ65Bsk",
      excerpt: "Prolong your battery life with these simple yet effective charging tips and tricks.",
      content: "Your battery is the heart of your EV. To keep it healthy, we recommend keeping your charge levels between 20% and 80% for daily use. Avoid exposing the vehicle to direct sunlight for extended periods during peak summer, and always use the original Prakriti Smart Charger to ensure voltage stability. These small habits can extend your battery's lifecycle by up to 25%."
    },
    {
      id: 5,
      title: "The Rise of EV Infrastructure",
      cat: "Technology",
      date: "Sep 15, 2023",
      read: "7 min",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOcwAW145ztDZMdGsZ-3jSdIO6_8O5zsLYJmHMoVEh_W5PZBsyWpKsMRDpc4NZM-utqXm_07YjLJlicJSWIudFNnbmizQL33BCaXG4p70EHp8w5wLs1FkXgmRXgFfnY1Je8J3jJvJK-ToMvqnlq7gyxtfdjzrkim4z-9-omsa-RRzVyc__f7sHaG6T1GaHB77EaqAnu-KEKf4DtvEMdt8THbts-IcPdRXxiKmLDBxe_jJdvG7Hjcl02p8TKqXv-o7OIO2aNndYZHM",
      excerpt: "A deep dive into the growing network of charging stations across the country.",
      content: "Range anxiety is quickly becoming a thing of the past. Governments and private enterprises are rapidly installing fast-charging points at shopping malls, metro stations, and office complexes. Prakriti's own network of 'PowerPoints' has doubled in the last six months, ensuring our riders are never more than 5km away from a quick top-up."
    }
  ];

  const filteredArticles = activeCategory === 'All Topics' 
    ? articles 
    : articles.filter(art => art.cat === activeCategory);

  useEffect(() => {
    const win = window as any;
    if (win.gsap) {
      win.gsap.fromTo(".blog-card", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out", overwrite: true }
      );
    }
  }, [activeCategory]);

  return (
    <div className="w-full bg-slate-50 py-12 lg:py-20 relative min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-40">
        <h1 className="text-slate-900 text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Prakriti Blog</h1>
        <p className="text-slate-500 text-lg mb-12 max-w-2xl">Expert insights into the world of electric mobility, sustainability, and urban lifestyle.</p>
        
        {/* Working Category Filter */}
        <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar sticky top-24 z-10 bg-slate-50/80 backdrop-blur-md">
          {categories.map((t) => (
            <button 
              key={t} 
              onClick={() => setActiveCategory(t)}
              className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                activeCategory === t 
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                : 'bg-white border-slate-200 text-slate-500 hover:border-primary hover:text-primary'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredArticles.map((art) => (
            <div 
              key={art.id} 
              className="blog-card group flex flex-col gap-6"
            >
              <div 
                className="relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-sm cursor-pointer"
                onClick={() => setSelectedPost(art)}
              >
                <img src={art.img} alt={art.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <span className="absolute top-6 left-6 px-5 py-2 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-sm border border-white/20">
                  {art.cat}
                </span>
              </div>
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-wider">
                  <span>{art.read} read</span>
                  <span className="size-1 rounded-full bg-primary/40"></span>
                  <span>{art.date}</span>
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight cursor-pointer"
                  onClick={() => setSelectedPost(art)}
                >
                  {art.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed line-clamp-2">
                  {art.excerpt}
                </p>
                
                {/* Working "READ FULL ARTICLE" Button */}
                <button 
                  onClick={() => setSelectedPost(art)}
                  className="flex items-center gap-2 text-slate-950 font-black uppercase text-xs pt-4 group/btn hover:gap-4 transition-all w-fit"
                >
                  Read Full Article
                  <span className="material-symbols-outlined text-sm font-black transition-transform group-hover/btn:translate-x-1">arrow_right_alt</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
            <p className="text-slate-400 font-bold uppercase tracking-widest">No articles found in this category.</p>
          </div>
        )}
      </div>

      {/* Post Modal - Workable Read Experience */}
      {selectedPost && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl" 
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[50px] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-8 right-8 z-10 size-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/30"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="overflow-y-auto no-scrollbar">
              <div className="w-full aspect-video relative">
                <img src={selectedPost.img} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-slate-950">
                      {selectedPost.cat}
                    </span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{selectedPost.date}</span>
                   </div>
                   <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">{selectedPost.title}</h2>
                </div>
              </div>
              
              <div className="p-10 md:p-16 lg:px-24">
                <div className="prose prose-slate max-w-none">
                  <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 italic border-l-4 border-primary pl-8">
                    {selectedPost.excerpt}
                  </p>
                  <div className="text-slate-600 text-lg leading-loose space-y-6">
                    {selectedPost.content}
                    <p>
                      As we look forward to the next decade of transportation, Prakriti EV remains committed to pushing the boundaries of what's possible with electric mobility in India. Join us as we ride toward a cleaner, greener tomorrow.
                    </p>
                    <p>
                      Want to experience these innovations firsthand? We invite you to book a test ride today at any of our 150+ experience centers across India.
                    </p>
                  </div>
                </div>
                
                <div className="mt-16 pt-12 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors uppercase font-black text-xs tracking-widest">
                      <span className="material-symbols-outlined text-sm">share</span> Share
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors uppercase font-black text-xs tracking-widest">
                      <span className="material-symbols-outlined text-sm">bookmark</span> Save
                    </button>
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black uppercase text-xs hover:bg-primary hover:text-slate-900 transition-all"
                  >
                    Back to Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
