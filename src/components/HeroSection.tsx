import { motion } from 'framer-motion';
import { Headphones, Bluetooth, Shield } from 'lucide-react';
import heroGlasses from '@/assets/hero-glasses.png';

const HeroSection = () => {
  const features = [
    { icon: Headphones, label: 'Music Glasses' },
    { icon: Bluetooth, label: 'Wireless V5.3' },
    { icon: Shield, label: 'Polarized' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-background to-background" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-4 mb-6">
              {features.map(({ icon: Icon, label }) => (
                <div 
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5"
                >
                  <Icon size={14} className="text-primary" />
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Sportovní brýle
              <br />
              <span className="text-gradient">nové generace</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg mb-8">
              Ultralehké brýle s integrovanými reproduktory a mikrofonem. 
              Poslouchejte hudbu, přijímejte hovory a zůstaňte připojeni k okolnímu světu.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:glow-yellow-strong transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Koupit teď
              </a>
              <a
                href="#specs"
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Specifikace
              </a>
            </div>
          </motion.div>

          {/* Glasses Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative animate-float">
              <img
                src={heroGlasses}
                alt="Kivano sportovní brýle"
                className="w-full max-w-2xl mx-auto drop-shadow-[0_0_80px_rgba(234,179,8,0.3)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
