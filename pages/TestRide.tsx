
import React, { useState } from 'react';

const TestRide: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm">
            <span className="material-symbols-outlined text-sm font-black">eco</span>
            Sustainable Future
          </div>
          <h1 className="text-slate-900 text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Experience the <span className="text-primary italic">Future</span> of Riding.
          </h1>
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
            Join 10,000+ happy riders who have switched to clean energy. Book your doorstep trial today and feel the Prakriti difference yourself.
          </p>

          <div className="relative rounded-[40px] overflow-hidden aspect-video shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsYjBzgw928WVm3Ga3zvvGc4vbfw9kDOLDHuJI-GAl1GU-Gluwqw-F7c6HoWv5b-v4lNgBhAhSVBjUXNGcTX6EDJ3mNYTryJpsHeHapDvy0D-UAcUf5eM2U25TTg2wzuEqrtWEhhZNo3QhiTgvGg3rlzMVRFYarYveCMEZiLDAGBS3J9mYgjjIYiCUlOfUVIRJ6Kl3ULyih9GFUeAUWpg3ouQXbTQugir7CWKAO-EkIDNr_Ddu2RsPwJnwnSKE8ObyWB8kD4p9oJw")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-10">
              <p className="text-white font-black text-xl uppercase tracking-widest">Model X Special</p>
              <p className="text-gray-300 text-sm">Available for doorstep trial</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 lg:p-12 rounded-[50px] shadow-2xl border border-slate-100 flex flex-col gap-10">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black uppercase tracking-tight">Book Test Ride</h2>
              <span className="text-xs font-black text-primary uppercase">Step {step} of 3</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 rounded-full" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">1</div>
                <h3 className="text-xl font-black uppercase tracking-tight">Contact Details</h3>
              </div>
              <div className="grid gap-4">
                <input type="text" placeholder="Full Name" className="w-full h-14 bg-slate-50 border-slate-100 rounded-2xl px-6 focus:ring-primary focus:border-primary font-medium" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="+91 Phone Number" className="w-full h-14 bg-slate-50 border-slate-100 rounded-2xl px-6 focus:ring-primary focus:border-primary font-medium" />
                  <input type="email" placeholder="Email Address" className="w-full h-14 bg-slate-50 border-slate-100 rounded-2xl px-6 focus:ring-primary focus:border-primary font-medium" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-black text-sm">2</div>
                <h3 className="text-xl font-black uppercase tracking-tight">Choose Model</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 1, name: 'Prakriti X1', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ro1WXv0yZkmP6Hx-MaNG7JvA36FK1V20dDyEVv_thMYWrCdQdjKUOm1XipIT4Csuif11yGC_dnQ9dqiNigdlGFDMAmZtVrdRuoOtKLVaqEcMkfnlPVauBA1R5TBrc1xqzz-aCrQCFTYJDbUc1_xbwX79QZuBxPkbfAz15XdtCuC1hWLpb7rvsgHuB0rap5VlNkIMTOgsExggzKlX4Ft9gO-NjU9QX4Z3V_ASm9Nvi_boU9taM0tBXmOFvX1a59fOXqM7Ni-lN4w' },
                  { id: 2, name: 'Prakriti Lite', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7x5YPiIPiYaLmKGeeFFKF6Ci-oIIFeUPUjUqYiS2XorntqHOix5F8MsCKuF7L1gkw3_lQDGXVtxW0QhGTw7Wf7J6YeM9FyRlt9IHpejjEAQMK519KHGU_08jxxhWtpEKSmOVwxaq4-_DmNHmpX6hbhj5gXHAUUZebXSCk0HVsyGmAmpFqhlOddTrIJBZGa6ZVGhAY593xbTMVwjwz5fUzSi1_pZeuWjs3F9BetxEGDiPJ1wSjCwG50R58MqM4dGiLmnD8dnTN6vo' }
                ].map((item) => (
                  <label key={item.id} className="cursor-pointer group relative">
                    <input type="radio" name="model" className="sr-only peer" />
                    <div className="p-4 rounded-3xl border-2 border-slate-100 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                      <img src={item.img} alt={item.name} className="w-full aspect-video object-contain mb-3 rounded-xl" />
                      <p className="text-sm font-black uppercase tracking-tight">{item.name}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-slate-950 hover:text-white text-slate-950 h-16 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 uppercase">
              Schedule Test Ride
              <span className="material-symbols-outlined font-black">arrow_forward</span>
            </button>
            <div className="flex justify-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm font-black text-primary">verified_user</span> Privacy Guaranteed</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm font-black text-primary">bolt</span> Fast Response</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestRide;
