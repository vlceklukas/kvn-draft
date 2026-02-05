import { motion } from 'framer-motion';
import { Glasses, Music, Phone, Wifi, Zap, Shield } from 'lucide-react';
import { useState } from 'react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Glasses,
      title: 'Polarizovaná skla',
      description: 'Užijte si ostré vidění bez odlesků. Vyměnitelné skla s UV400 ochrání váš zrak i na ostrém slunci.',
      highlight: 'UV400',
      stat: '100%',
      statLabel: 'UV ochrana',
    },
    {
      icon: Music,
      title: 'Přehrávání hudby',
      description: 'Poslouchejte, aniž byste byli odříznutí od okolního světa. Chytré brýle přinášejí bezpečné propojení sportu a hudby.',
      highlight: 'Open-ear',
      stat: '8h',
      statLabel: 'přehrávání',
    },
    {
      icon: Phone,
      title: 'Přijímání hovorů',
      description: 'Hovory vyřídíte i bez hledání mobilu. Kromě reproduktorů mají brýle zabudovaný také mikrofon.',
      highlight: 'Hands-free',
      stat: '360°',
      statLabel: 'mikrofon',
    },
    {
      icon: Wifi,
      title: 'Bezdrátové připojení',
      description: 'Zažijte svobodu pohybu. Díky Bluetooth 5.3 budete mít stabilní připojení s dosahem až 30 metrů.',
      highlight: 'BT 5.3',
      stat: '30m',
      statLabel: 'dosah',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Technologie budoucnosti</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Proč si vybrat <span className="text-gradient">KIVANO</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spojení prémiové optiky a bezdrátového zvuku v jediném produktu
          </p>
        </motion.div>

        {/* Main feature showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Feature selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveFeature(index)}
                className={`group cursor-pointer p-6 rounded-2xl transition-all duration-500 ${
                  activeFeature === index
                    ? 'bg-primary/10 border-2 border-primary shadow-[0_0_30px_rgba(234,179,8,0.15)]'
                    : 'bg-card/50 border-2 border-transparent hover:border-border hover:bg-card'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'bg-secondary group-hover:bg-primary/20'
                  }`}>
                    <feature.icon className={`w-7 h-7 ${activeFeature === index ? '' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                        activeFeature === index 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {feature.highlight}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      activeFeature === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active feature visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-48 h-48 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute w-64 h-64 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                <div className="absolute w-80 h-80 rounded-full border border-primary/5 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  key={activeFeature}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8 glow-yellow-strong"
                >
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className="w-12 h-12 text-primary-foreground" />;
                  })()}
                </motion.div>

                <motion.div
                  key={`stat-${activeFeature}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="text-7xl font-display font-bold text-gradient mb-2">
                    {features[activeFeature].stat}
                  </div>
                  <div className="text-lg text-muted-foreground uppercase tracking-wider">
                    {features[activeFeature].statLabel}
                  </div>
                </motion.div>

                <motion.p
                  key={`desc-${activeFeature}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-8 text-muted-foreground max-w-sm mx-auto"
                >
                  {features[activeFeature].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Shield, value: 'IP55', label: 'Voděodolnost' },
            { icon: Zap, value: '37g', label: 'Ultralehké' },
            { icon: Music, value: '8h', label: 'Přehrávání' },
            { icon: Wifi, value: 'BT 5.3', label: 'Bluetooth' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center group hover-lift"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
