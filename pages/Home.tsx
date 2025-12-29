
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fix: Accessing global GSAP via any cast to window to resolve TS errors
    const win = window as any;
    if (win.gsap) {
      const gsap = win.gsap;
      
      // Hero Animation
      gsap.fromTo(".hero-content > *", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
      );

      // Scroll reveals
      gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
        gsap.fromTo(elem, 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
          }
        );
      });
    }
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-20 py-8 lg:py-12 max-w-[1440px] mx-auto">
        <div 
          className="relative overflow-hidden rounded-3xl min-h-[650px] flex items-end p-8 sm:p-12 lg:p-20 bg-cover bg-center shadow-2xl"
          style={{ 
            backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPpRe0B0yVcnD1nn4br9s4zNPvSmgdUjkxsL-U-Af6fBcvXiu4WV_kuI5hbQsU0U8ltqpYgBEtwX93nohW-r0wl_j8A_WCga10nZHbTJ3gy_oo91-144PERI5blhUSJf4-OXeRWALdLCEH2nOQndWOYhIsSwM7X12-XjcrHbIs6SkyQC9u9eVyTgLNDiGHevqYh96NuoyzKUCNoI4YTQTuJQP2n2ByH_PBtag8_X5PcnQ4hyfoLv8MgitKLMMb66acdjG89L3DAu0")' 
          }}
        >
          <div className="hero-content relative z-10 w-full max-w-2xl flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md w-fit border border-white/20">
              <span className="material-symbols-outlined text-primary text-sm font-bold">bolt</span>
              <span className="uppercase tracking-widest">The New Standard in EV</span>
            </div>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight uppercase">
              Smart <span className="text-primary text-4xl">•</span> Sustainable <span className="text-primary text-4xl">•</span> Electric
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl font-medium max-w-lg leading-relaxed">
              The Future of Indian Commuting. Zero emissions. 100% Thrill. Engineered for the modern urban explorer who demands style and power.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/test-ride" className="h-14 px-10 rounded-xl bg-primary text-slate-950 text-base font-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
                <span>Book Test Ride</span>
                <span className="material-symbols-outlined font-black">arrow_forward</span>
              </Link>
              <Link to="/products" className="h-14 px-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white text-base font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center shadow-lg">
                Explore Models
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Specs */}
      <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto bg-white rounded-[40px] my-12 shadow-sm">
        <div className="flex flex-col gap-6 mb-16 text-center">
          <h2 className="text-slate-900 text-3xl md:text-5xl font-black tracking-tight gsap-reveal">Performance Specs</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto gsap-reveal">
            Engineered for the modern rider. High efficiency meets high performance with our proprietary Prakriti Powertrain technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'True Range', value: '120km', icon: 'battery_charging_full', desc: 'Optimized for city commuting and long weekends.' },
            { label: 'Fast Charge', value: '3.5hrs', icon: 'electric_bolt', desc: 'Rapid technology gets you back on the road in no time.' },
            { label: 'Top Speed', value: '75km/h', icon: 'speed', desc: 'Smooth acceleration to glide through urban traffic.' }
          ].map((spec, i) => (
            <div key={i} className="gsap-reveal group p-10 rounded-3xl border border-slate-100 hover:border-primary/50 bg-slate-50 transition-all hover:shadow-2xl">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-900 transition-all mb-8">
                <span className="material-symbols-outlined text-4xl">{spec.icon}</span>
              </div>
              <h3 className="text-slate-900 text-3xl font-black mb-3">{spec.value}</h3>
              <p className="font-bold text-slate-700 text-lg mb-2">{spec.label}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Grid */}
      <section className="py-12 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 gsap-reveal relative overflow-hidden rounded-3xl h-[400px] group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUKrx1zhBxFhCerbyi57jFP1mecMRngPXGb3Palmi9ZaVDqUgZIisNmiMWhTmzXW-z935rRQ7-l9jp3njoQ6Y40j4LcrnaZ5STkmkGoQDEb4iA9cwDtK4KMjWOERyQHaSaLG3AgzJm3b0mWVTdZogHmAFMiWWWmbKoEoAQXDIN2t7gJQiZEvmBjWxhX384c4FQko9QPIObMIIMesKzAyrS5bGlYKZq23NAfUeeFOHl2PGNI23oWN-LPcdG3X8DpCEuxqpnLhdf0yY")' }}></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="font-black text-2xl uppercase tracking-tighter">Urban Mobility</p>
            </div>
          </div>
          <div className="gsap-reveal relative overflow-hidden rounded-3xl h-[400px] group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOcwAW145ztDZMdGsZ-3jSdIO6_8O5zsLYJmHMoVEh_W5PZBsyWpKsMRDpc4NZM-utqXm_07YjLJlicJSWIudFNnbmizQL33BCaXG4p70EHp8w5wLs1FkXgmRXgFfnY1Je8J3jJvJK-ToMvqnlq7gyxtfdjzrkim4z-9-omsa-RRzVyc__f7sHaG6T1GaHB77EaqAnu-KEKf4DtvEMdt8THbts-IcPdRXxiKmLDBxe_jJdvG7Hjcl02p8TKqXv-o7OIO2aNndYZHM")' }}></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="font-black text-2xl uppercase tracking-tighter">Smart Dash</p>
            </div>
          </div>
          <div className="gsap-reveal relative overflow-hidden rounded-3xl h-[400px] group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZWVkUiJRNAyEhrvpfQvS5sFiQYYKalQIQcQNk2E7W9_XZi0jwvSArvVAybTMSzHnh-weABEZGGlyb7yyenAAbjKUG6NaZHaVR6CCsmfZfQyo1k3mgO4ysBHgb0p_oGTS9xmTFh24-Wn3ZRacHOj2bda7TBrh0VsBWLKn3CyQJq_CcG-H5DnXwfEpcEI2tuJpgj40ZPkrDawWe_FVeQbxPJYt_mfoUX9ex_Z0Bny8QyELqnYn0SGh8UGbVlPHUrGw2ir-3tz8Y0TM")' }}></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="font-black text-2xl uppercase tracking-tighter">Easy Charging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Prakriti */}
      <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm gsap-reveal">
              <span className="w-12 h-1 bg-primary"></span>
              Why Choose Prakriti?
            </div>
            <h2 className="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tight gsap-reveal">
              Designed for Indian Roads & Conditions.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed gsap-reveal">
              We didn't just build an electric scooter; we built a tank for the tarmac. From potholes to monsoon floods, Prakriti EV is tested to endure everything India throws at it.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {[
                { icon: 'terrain', title: 'Rugged Suspension', desc: 'Hydraulic systems tuned specifically for potholes.' },
                { icon: 'memory', title: 'AI Thermal Management', desc: 'Smart cooling systems for harsh Indian summers.' },
                { icon: 'verified_user', title: '5-Year Warranty', desc: 'Comprehensive coverage on battery and powertrain.' }
              ].map((item, idx) => (
                <div key={idx} className="gsap-reveal flex items-start gap-6 group">
                  <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 gsap-reveal">
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCjV5cg5TlH0mc-U2O9Ce9dxTqs6tkbQWLIcxReTRjrGYrgrbIq_kjVc01WI17vBFqGGVHz-FgLrkAtkfZxYKhpz0evI49mqMD0I5TzvPUMeyyexCZKerDSHBdNdf6OWdmQ3ZPlpSYvseIKjWsYl5gnOXa9N7sifTtDQbR5WVlMGWyHD_eLzKtNeH3B-7WjbA3Hj9VJiWQL-uQKxQv0v7puYiQ51fOFBOwlvGKGsubdgkzWdXzLwzbYlH7FhvyzQVPyeqOVqvekIo")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="flex items-center justify-between border-t border-white/20 pt-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-300 mb-2">Starting Price</p>
                    <p className="text-4xl font-black">₹ 1,15,000</p>
                  </div>
                  <Link to="/products" className="size-16 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined font-bold">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto bg-slate-950 rounded-[50px] overflow-hidden relative isolate p-12 lg:p-24 text-center flex flex-col items-center">
          <div 
            className="absolute inset-0 -z-10 opacity-30" 
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-Q2--Azf6MzBz4ewQYIiE1OifiFg3ddV6nCXYJqgX4QsrTChsjcllymlznrM04-SijsUimsRRszVBmWpc5-wroeLiFsUg5lKcvwOpGKsc5oN2K6V8wdDiXiOV8I7EpKCm85wtqUefGKtFQFpxUUCw7RW1pnT9EdB7UwzV4P-P6dvinKQnpzxXIHRwqF3RRAoPdzkH3Pz1nSIsFzLBhwo5uO1JLbe7M2lL9nwuhpJ7YJvc9YysGjl9wWEHipnjftMK2JkGkW9z7fI")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              mixBlendMode: 'overlay' 
            }}
          ></div>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight max-w-3xl mb-8 gsap-reveal">
            Ready to experience the future?
          </h2>
          <p className="text-slate-400 text-xl max-w-xl mb-12 gsap-reveal leading-relaxed">
            Join 10,000+ happy riders who have switched to Prakriti. Your free doorstep trial is just a click away.
          </p>
          <div className="gsap-reveal w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <input type="text" placeholder="Enter your city" className="flex-1 bg-transparent border-0 px-6 py-4 text-white focus:ring-0 placeholder-gray-500 font-bold" />
              <Link to="/test-ride" className="h-14 px-10 rounded-xl bg-primary text-slate-950 font-black hover:bg-white transition-all flex items-center justify-center">
                Book Test Ride
              </Link>
            </div>
            <p className="text-xs text-slate-600 mt-6">*Doorstep service available in 20+ major Indian cities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
