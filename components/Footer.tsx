
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-4xl">electric_scooter</span>
              <span className="text-2xl font-black text-slate-900 uppercase">Prakriti EV</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Driving India towards a greener, cleaner, and quieter future. Engineered with cutting-edge technology and a passion for urban sustainability.
            </p>
            <div className="flex gap-4">
              {['public', 'link', 'photo_camera', 'smart_display'].map((icon) => (
                <a key={icon} href="#" className="flex items-center justify-center size-10 rounded-full bg-slate-50 text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-slate-500 hover:text-primary text-sm transition-colors">About Us</Link>
              <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">Careers</a>
              <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">Press Release</a>
              <Link to="/blog" className="text-slate-500 hover:text-primary text-sm transition-colors">Latest Blog</Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Our Models</h4>
            <div className="flex flex-col gap-3">
              <Link to="/products" className="text-slate-500 hover:text-primary text-sm transition-colors">E-VPA Classic</Link>
              <Link to="/products" className="text-slate-500 hover:text-primary text-sm transition-colors">Neo Smart</Link>
              <Link to="/products" className="text-slate-500 hover:text-primary text-sm transition-colors">Defender Offroad</Link>
              <Link to="/products" className="text-slate-500 hover:text-primary text-sm transition-colors">Super Royal</Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Support</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">Locate Dealer</a>
              <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">Service Centers</a>
              <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">Warranty Policy</a>
              <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">© 2024 Prakriti EV Motors Pvt Ltd. Proudly Made in India.</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-primary text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
