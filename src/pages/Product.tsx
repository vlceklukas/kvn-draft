import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Battery, Usb, Droplets, Scale, Bluetooth, Music, Phone, Shield, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = {
  k01: {
    id: 'K01',
    name: 'KIVANO K01',
    subtitle: 'Klasická elegance',
    description: 'Sportovní hudební brýle s černým tělem a černými skly',
    longDescription: 'KIVANO K01 představuje klasický design v čistě černém provedení. Tyto brýle jsou ideální volbou pro ty, kteří preferují nadčasový a nenápadný styl. Černá polarizovaná skla poskytují vynikající ochranu očí a snižují odlesky při jakékoli aktivitě.',
    price: 1999,
    image: 'https://kivano.cz/imgcache/0/4/p2392430-1-k01-right-a_170_82_313321.png',
    color: 'Černá / Černá',
    lensType: 'Polarizovaná',
    features: [
      'Černé polarizované sklo',
      'UV400 ochrana',
      'Klasický nadčasový design',
      'Integrované reproduktory',
      'Vestavěný mikrofon',
      'Bluetooth 5.3',
    ],
  },
  k02: {
    id: 'K02',
    name: 'KIVANO K02',
    subtitle: 'Moderní styl',
    description: 'Sportovní hudební brýle s černým tělem a barevnými skly',
    longDescription: 'KIVANO K02 kombinuje černý rám s výrazným barevným zrcadlovým sklem. Tento model je určen pro ty, kteří chtějí vyniknout a nebojí se výrazného stylu. Zrcadlové sklo nejen skvěle vypadá, ale také poskytuje vynikající ochranu před slunečním zářením.',
    price: 1999,
    image: 'https://kivano.cz/imgcache/0/8/p2392429-1-k02-right-a_170_82_309951.png',
    color: 'Černá / Barevná',
    lensType: 'Zrcadlová polarizovaná',
    popular: true,
    features: [
      'Barevné zrcadlové sklo',
      'UV400 ochrana',
      'Moderní výrazný design',
      'Integrované reproduktory',
      'Vestavěný mikrofon',
      'Bluetooth 5.3',
    ],
  },
  k03: {
    id: 'K03',
    name: 'KIVANO K03',
    subtitle: 'Premium volba',
    description: 'Sportovní hudební brýle s bílým tělem a fotochromatickými skly',
    longDescription: 'KIVANO K03 je prémiový model s bílým rámem a unikátními fotochromatickými skly. Tato skla se automaticky přizpůsobují světelným podmínkám – ztmavnou na slunci a zesvětlí ve stínu. Ideální pro celodenní nošení při proměnlivém počasí.',
    price: 2199,
    image: 'https://kivano.cz/imgcache/a/c/p2392431-1-k03-right-a_170_82_250164.png',
    color: 'Bílá / Barevná',
    lensType: 'Fotochromatická',
    features: [
      'Fotochromatická skla',
      'Automatické přizpůsobení světlu',
      'UV400 ochrana',
      'Prémiový bílý design',
      'Integrované reproduktory',
      'Vestavěný mikrofon',
      'Bluetooth 5.3',
    ],
  },
};

const specs = [
  { icon: Battery, label: 'Výdrž baterie', value: '8 hodin' },
  { icon: Usb, label: 'Nabíjení', value: 'USB-C' },
  { icon: Droplets, label: 'Voděodolnost', value: 'IP55' },
  { icon: Scale, label: 'Hmotnost', value: '37g' },
  { icon: Bluetooth, label: 'Bluetooth', value: '5.3' },
  { icon: Shield, label: 'UV ochrana', value: 'UV400' },
];

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Produkt nenalezen</h1>
          <Link to="/" className="text-primary hover:underline">Zpět na hlavní stránku</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/#products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Zpět na produkty
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
                {'popular' in product && product.popular && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full">
                    Nejoblíbenější
                  </div>
                )}
                <div className="aspect-video flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain drop-shadow-[0_0_60px_rgba(234,179,8,0.3)] animate-float"
                  />
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-2">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  {product.subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Quick specs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="px-4 py-2 rounded-full bg-secondary">
                  <span className="text-sm text-muted-foreground">Barva: </span>
                  <span className="text-sm font-medium">{product.color}</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary">
                  <span className="text-sm text-muted-foreground">Skla: </span>
                  <span className="text-sm font-medium">{product.lensType}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-display font-semibold mb-4">Vlastnosti</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 glass-card rounded-2xl">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Cena</div>
                  <div className="text-4xl font-display font-bold text-primary">
                    {product.price.toLocaleString('cs-CZ')} Kč
                  </div>
                  <div className="text-sm text-primary font-medium mt-1">Skladem</div>
                </div>
                <a
                  href={`https://kivano.cz/kivano-0${product.id.slice(1)}-sportovni-hudebni-bryle/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:ml-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:glow-yellow-strong transition-all duration-300 flex items-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Koupit teď
                </a>
              </div>
            </motion.div>
          </div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Technické <span className="text-gradient">specifikace</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-lg font-bold text-primary mb-1">{spec.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Další <span className="text-gradient">modely</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(products)
                .filter(([key]) => key !== productId)
                .map(([key, prod]) => (
                  <Link
                    key={key}
                    to={`/produkt/${key}`}
                    className="glass-card rounded-2xl p-6 hover-lift group"
                  >
                    <div className="h-24 flex items-center justify-center mb-4">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-center mb-1">{prod.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{prod.description}</p>
                    <div className="text-center mt-3 text-primary font-bold">
                      {prod.price.toLocaleString('cs-CZ')} Kč
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
