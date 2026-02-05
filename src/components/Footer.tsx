import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-3xl font-display font-bold tracking-tight">
              KIV<span className="text-primary">A</span>NO
            </span>
            <p className="mt-4 text-muted-foreground max-w-md">
              Sportovní hudební brýle nové generace. Spojení stylu, technologie a svobody pohybu.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="tel:+420730110510" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+420 730 110 510</span>
              </a>
              <a 
                href="mailto:info@kivano.cz" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>info@kivano.cz</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Adresa</h4>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <div>
                <p>Kivano smart, s.r.o.</p>
                <p>Na Strži 1702/65</p>
                <p>140 00 Praha 4</p>
                <p className="mt-2 text-sm">IČO: 29046785</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kivano smart, s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
