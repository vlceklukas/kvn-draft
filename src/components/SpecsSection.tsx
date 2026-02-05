import { motion } from 'framer-motion';
import { Battery, Usb, Droplets, Scale } from 'lucide-react';

const SpecsSection = () => {
  const specs = [
    { icon: Battery, value: '8h', label: 'výdrž baterie' },
    { icon: Usb, value: 'USB-C', label: 'konektor' },
    { icon: Droplets, value: 'IP55', label: 'voděodolnost' },
    { icon: Scale, value: '37g', label: 'váha' },
  ];

  return (
    <section id="specs" className="py-24 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technické <span className="text-gradient">specifikace</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Navrženo pro maximální výkon a pohodlí
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center hover-lift"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <spec.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-display font-bold text-primary mb-1">
                {spec.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {spec.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
