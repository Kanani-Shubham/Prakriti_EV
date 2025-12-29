
import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    // Fix: Accessing global GSAP via any cast to window to resolve TS errors
    const win = window as any;
    if (win.gsap) {
      const gsap = win.gsap;
      gsap.fromTo(".about-reveal", 
        { y: 30, opacity: 0 },
        { 
          scrollTrigger: {
            trigger: ".about-reveal",
            start: "top 90%"
          },
          y: 0, opacity: 1, stagger: 0.2, duration: 0.8 
        }
      );
    }
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[500px] px-6 py-20 text-center bg-slate-950 rounded-b-[60px] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgi0yX7IVDal8Q4WJAJAZr5-_tbbh_bBrBMINv-nMoK2PV10ajs_XTa6uxePtqVzFImQ_wsyiFlesV9FclrzDcAInWZEvRd7H_w7RTe2LWhuSSp90cGEu9yYP0pa8aSrRyQID1WFiPKzk9t1K0DRribsw_cMkBbeGRSeYf-vrWSiPok8w1ri-Ta6G05JhxhyuuresoEtSvfrLxgi2gMhvXaRI4OlK5x_NML0LoIEB4TLzRzmT5MmxzukXwFcmi1KXoUokRvaor2Fk")' }}
        ></div>
        <div className="relative z-10 max-w-4xl flex flex-col gap-6 items-center">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-black uppercase tracking-widest">
            Driven by Nature
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">
            Designed for You.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            We are bridging the gap between premium technology and mass accessibility. Our mission is to transform urban commuting into a sustainable, joyful experience.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="about-reveal flex flex-col p-12 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-10">
              <span className="material-symbols-outlined text-4xl">bolt</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Mission</h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              To provide high-quality, smart electric mobility that empowers every Indian commuter. We believe clean energy shouldn't be a luxury, but a standard for everyone.
            </p>
          </div>
          <div className="about-reveal flex flex-col p-12 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="size-16 rounded-full bg-white/10 flex items-center justify-center text-primary mb-10">
                <span className="material-symbols-outlined text-4xl">eco</span>
              </div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To create a zero-pollution future where technology and nature coexist in harmony. We envision cleaner air, quieter streets, and a healthier planet for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { label: 'KM Driven', val: '10,000+', icon: 'map' },
            { label: 'CO2 Saved', val: '500kg', icon: 'co2' },
            { label: 'Made in India', val: '100%', icon: 'factory' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-primary text-5xl">{stat.icon}</span>
              <p className="text-5xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-20 max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-tight">Our Journey So Far</h2>
        <div className="relative space-y-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
          
          {[
            { year: '2021', title: 'The Inception', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANw6Dt5MxNirkLHx3o1LJ-1XeExZQdpICXFFksl2gyOHHcp04Gtn7sGkb_AsOKujUh-jiOq-06CRFYvGEr-opR4hl_krhEbWMSAenbgrZbsaXgb2V70V9faxFak2l9b2X82L9gjmin1Wkr-GFxCfePNOOBroW4mio9CowFvV4o9d4cQHNM93qB4psxJjc-B7KjWZEt6LUlROnQeFhuLQXFyS9Npt2u3hm0PfAuWcrmrubAZeOJMCr510gWHjsU5HxjX_kjuJT5g9E', side: 'left' },
            { year: '2022', title: 'Engineered in India', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyLo1L7flu1Xea1AI9izfIlOkar9SHNL0FVKL4Ep6mEG3o4OloXOGbFLgommbqrRev1lkIWqN8tyxXNnEQNk1KWAbWS3U8-TsUnyizTf36S89erVOFfnpCb4Q5JwF7UuuUtvZptIo0NNv2DMSSLivDY6t6Ps-tr-5rr6km1dFL1dx6Mv0ZPHP1a5zW3yeq3-7D_ckSyAfeygbCZtZRrcrtF3IoNXUYAnx2a7pZFYM1A--SuSyNvh96NU1O2a5XS7vB9_ej3aLEDVY', side: 'right' },
            { year: '2023', title: 'First Ride', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJumu1ygBnIe32K-Vaj-XWzCQnkvSCO84msN0e3ppBsMlnsJVzml7FIMAL-BByif5B2Fh1qYdBUxgjtxpJtAQUll93G9lbLGB6XqEXvxIUxrdmxAZtgp5PKGSUjS0jPygILDge3guMrx5Vh5F80OSmJn85INTc1LGmAG5L2SLvAI485sNetL-MI6hyrZusJDwZsN0DMjp8Boonhm7196hCA1NSAQ0e5fSFIJZhsBgL_PPbsVUE8oKeHs-4Y-TCPfCMpDZSmt2Pwew', side: 'left' }
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                <p className="text-primary font-black text-2xl tracking-widest uppercase">{item.year}</p>
                <h3 className="text-2xl font-black text-slate-900 uppercase">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">Pioneering the future of EVs with rigorous testing and 100% indigenous engineering.</p>
              </div>
              <div className="relative md:absolute left-1/2 -translate-x-1/2 size-12 bg-white border-4 border-primary rounded-full z-10 hidden md:flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm font-black">radio_button_checked</span>
              </div>
              <div className="w-full md:w-1/2 h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;