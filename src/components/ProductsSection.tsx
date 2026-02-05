import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      id: 'k01',
      name: 'KIVANO K01',
      description: 'Černé tělo s černými skly',
      price: 1999,
      image: 'https://kivano.cz/imgcache/0/4/p2392430-1-k01-right-a_170_82_313321.png',
      features: ['Černé polarizované sklo', 'Klasický design', 'UV400 ochrana'],
    },
    {
      id: 'k02',
      name: 'KIVANO K02',
      description: 'Černé tělo s barevnými skly',
      price: 1999,
      image: 'https://kivano.cz/imgcache/0/8/p2392429-1-k02-right-a_170_82_309951.png',
      features: ['Barevné zrcadlové sklo', 'Moderní styl', 'UV400 ochrana'],
      popular: true,
    },
    {
      id: 'k03',
      name: 'KIVANO K03',
      description: 'Bílé tělo s fotochromatickými skly',
      price: 2199,
      image: 'https://kivano.cz/imgcache/a/c/p2392431-1-k03-right-a_170_82_250164.png',
      features: ['Fotochromatická skla', 'Automatické přizpůsobení', 'Premium design'],
    },
  ];

  return (
    <section id="products" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Vyberte si svůj <span className="text-gradient">styl</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tři unikátní varianty pro každý vkus a příležitost
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative glass-card rounded-3xl p-8 hover-lift ${
                product.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-full">
                  Nejoblíbenější
                </div>
              )}

              <div className="relative h-32 flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-1">
                  {product.price.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="text-sm text-primary font-medium mb-4">Skladem</div>
                <Link
                  to={`/produkt/${product.id}`}
                  className={`block w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    product.popular
                      ? 'bg-primary text-primary-foreground hover:glow-yellow'
                      : 'border border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  Zobrazit detail
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
