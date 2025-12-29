
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  useEffect(() => {
    // Fix: Accessing global GSAP via any cast to window to resolve TS errors
    const win = window as any;
    if (win.gsap) {
      const gsap = win.gsap;
      gsap.fromTo(".product-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const products = [
    {
      id: 'e-vpa',
      name: 'E-VPA',
      badge: 'Bestseller',
      tagline: 'The Daily Commuter',
      price: '₹85,000',
      range: '80 km',
      speed: '45 km/h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDISLNEGZbpxo5dnyklic8pv-ozro_cDZrX1xHgbBATzUdHv4v-6cy6nWtZG4oPU6w7XTmWy8g8RNMDaWJ-ll89cQff9ovfRPIqkFIK_CtjyAezNM8s6v68Ul5aAfV5f2GDDgQ1diG4SCraaye50hw6eUl0pVoTL_NEH8t_QJzORWEYGgwonX4LGdsLDKkzCW7FnrB5ljWGxGOamhlJBNd6ZLsmCzYWxQgF5jeCeCvneH4Fn2qHZD5nlLyDQBErPiCnEpGKHiF0MBk'
    },
    {
      id: 'neo',
      name: 'Neo',
      badge: 'New Launch',
      tagline: 'The Modern Choice',
      price: '₹98,000',
      range: '100 km',
      speed: '60 km/h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD4ULSe15zDKdgVTD7stK2ljVDQGiAgWEBihYOwgOY07sfoyAJUhlyx2UuUHVcVvkXocmkNztGshduK0CJv95DaVW6-qatllE3rmjBTHw4QgmVoimQLm7xD9yfiqAj2rdyD1X7GfWVYr3NK5U2LJM982areeZ-u7ClVd8wrhyP7lofrq1wHjLS3x62MWGrH0bAh-RniSc9bZ-YorCgeyTDDFX9aPC-7Gy-lh5mBKg_UOorjWVP0Egah_F8KvjyxhnE42uSvlBxDQk'
    },
    {
      id: 'defender',
      name: 'Defender',
      badge: 'Rugged',
      tagline: 'Built for Performance',
      price: '₹1,15,000',
      range: '120 km',
      speed: '75 km/h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqXFQbEDLVM256gbikOc89db-fTnaHK21hpEdjVayW-ai0CXFnOr4Ree5ZVIVM4pIkQ9ajjzsgFmRUVc1b2MIuQww8HMWQAhy6HKvlVxWXwei48MHrYJ0NQUKQr-oiBa8VTRnEsRC_sAwNTOOZ9hXauHTviH2giuiia48WWN26WQfCoYNjvkAKlwKCCjVyuqMADs-qB7Le9sptRwl1eYYDXlrhAXjIteWt5UVfLyL1K2HV5Omty1y0t5UEBPFX-VHpxmrQXDkJwa0'
    },
    {
      id: 'espa',
      name: 'ESPA',
      badge: 'Retro',
      tagline: 'Classic Aesthetic',
      price: '₹92,000',
      range: '90 km',
      speed: '55 km/h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmkicnpVKHWz9i63eIOKZWD14NmiwfhnhhdeJkg0wOU8b-KPiBTRTj1VSE29PuF9i7Jj8MSjqFSYul6H3rBqOKlR2UlbIhbU7EPdb3ZC4jnTvIlv6jL6ov5c0YxuN9-4tPIpyB61zFLtm6lGcCyB074dpTyyOUc9ulWi1RhlP-KIGq1EHYlbXr29_MZMKRtWL-o0NSbWYhrKKmXFRywqn5x8Vr4i_wmb4mZOFjk2MOt-Slrwp_IFNlLRxXnwgJwmos8nJlsSR7p-0'
    },
    {
      id: 'super-royal',
      name: 'Super Royal',
      badge: 'Premium',
      tagline: 'The Ultimate Cruiser',
      price: '₹1,45,000',
      range: '150 km',
      speed: '90 km/h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHyUogsVkCYzaA6NQHvtcpp-uaI6AbhNog00VONzPGERvW-TdpU0R9DELeze_Z0TY--NxXCyKs7igJmpfzMvI3nnAXitHM9tZYJeZP2yYaV-mZP6eRjqTA7raBpHkOf7NVDST4AclX8KnH-S8M7W9O2qD1BQeItcDdZh_Glj-_QzfqS8t8QyJLh5kTSOnEhxpv788Z6fErlsiD5FhVbDBpsfVvQLERhEsqcq1vhB60RBSZh6_3EfE5E-pMpzsCPMRVQU6cPQ3zyMY'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase mb-4">Our Collection</h1>
            <p className="text-slate-500 text-lg md:text-xl">Discover the perfect ride tailored for your urban lifestyle. From daily commuters to performance beasts.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Commuter', 'Performance', 'Retro'].map((cat) => (
              <button key={cat} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === 'All' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="product-card group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <div className="absolute top-6 left-6 z-10 bg-primary text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  {item.badge}
                </div>
                <div 
                  className="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              </div>
              <div className="p-8 flex flex-col gap-6 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-slate-900 text-2xl font-black tracking-tight mb-1 uppercase">{item.name}</h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{item.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 text-2xl font-black">{item.price}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Ex-showroom</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">battery_charging_full</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Range</p>
                      <p className="text-sm font-black text-slate-800">{item.range}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">speed</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Speed</p>
                      <p className="text-sm font-black text-slate-800">{item.speed}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-auto pt-2">
                  <button className="flex-1 h-12 rounded-xl border border-slate-100 text-slate-900 font-bold text-sm hover:bg-slate-50 transition-colors uppercase">
                    Details
                  </button>
                  <Link to="/test-ride" className="flex-1 h-12 rounded-xl bg-primary text-slate-950 font-black text-sm hover:bg-slate-950 hover:text-white transition-all shadow-md flex items-center justify-center uppercase">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison CTA */}
        <div className="mt-24 p-12 rounded-[40px] bg-slate-950 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h3 className="text-white text-3xl md:text-4xl font-black mb-4 uppercase">Not sure which Prakriti is for you?</h3>
            <p className="text-slate-400 text-lg">Compare models side-by-side based on range, performance, and features to find your soulmate on wheels.</p>
          </div>
          <button className="relative z-10 h-14 px-10 bg-white text-slate-950 rounded-xl font-black hover:bg-primary transition-all shadow-xl uppercase">
            Compare Models
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;