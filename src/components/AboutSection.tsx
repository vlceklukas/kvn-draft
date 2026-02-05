import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            O produktu <span className="text-gradient">KIVANO</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            KIVANO SPORTGLASSES spojují sportovní brýle a bezdrátový zvuk v jednom. 
            Ultralehká konstrukce zajišťuje pohodlí bez otlaků i při celodenním nošení. 
            Integrované Bluetooth reproduktory a mikrofon ti umožní poslouchat hudbu až 8 hodin vkuse, 
            ale také vyřizovat hovory nebo spustit hlasového asistenta.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kvalitní optika a UV ochrana ochrání tvoje oči a zajistí ostré vidění. 
            Vyber si svůj styl ze tří designů – klasické K01, moderní K02 nebo prémiové K03 
            s fotochromatickými skly, která se automaticky přizpůsobují světelným podmínkám – 
            a dopřej si maximální komfort, bezpečí a styl při každé aktivitě.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
