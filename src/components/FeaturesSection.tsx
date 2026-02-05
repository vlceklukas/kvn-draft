import { motion } from 'framer-motion';
import { Glasses, Music, Phone, Wifi } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Glasses,
      title: 'Polarizovaná skla',
      description: 'Užijte si ostré vidění bez odlesků. Vyměnitelné skla s UV400 ochrání váš zrak i na ostrém slunci.',
    },
    {
      icon: Music,
      title: 'Přehrávání hudby',
      description: 'Poslouchejte, aniž byste byli odříznutí od okolního světa. Chytré brýle přinášejí bezpečné propojení sportu a hudby.',
    },
    {
      icon: Phone,
      title: 'Přijímání hovorů',
      description: 'Hovory vyřídíte i bez hledání mobilu. Kromě reproduktorů mají brýle zabudovaný také mikrofon.',
    },
    {
      icon: Wifi,
      title: 'Bezdrátové připojení',
      description: 'Zažijte svobodu pohybu. Díky Bluetooth 5.3 budete mít stabilní připojení s dosahem až 30 metrů.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Proč <span className="text-gradient">KIVANO</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologie, která vás spojí s hudbou a zároveň nechá připojené ke světu kolem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-yellow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
