import { useState } from 'react'
import { Instagram, Phone, Star } from 'lucide-react'


function App() {
  const [links] = useState([
    // { id: 1, title: 'Nosso Site', icon: ShoppingBag, url: '', active: true },
    { id: 2, title: 'WhatsApp', icon: Phone, url: 'https://wa.me/5522981497127?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20o%20cat%C3%A1logo%20de%20velas%20e%20aromas!', active: true },
    { id: 3, title: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/velaslignum/', active: true },
    // { id: 4, title: 'Facebook', icon: Facebook, url: '', active: true },
    // { id: 5, title: 'Localização', icon: MapPin, url: '', active: true },
    { id: 6, title: 'Contato', icon: Phone, url: 'tel:+22981497127', active: true },
  ])

  return (
    <div className="min-h-screen geometric-pattern relative overflow-hidden">
      {/* Decorative Art Deco Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-lignum-brown/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lignum-brown/30 to-transparent pointer-events-none"></div>

      {/* Art Deco Corner Ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-lignum-gold/40 opacity-60"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-lignum-gold/40 opacity-60"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-lignum-gold/40 opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-lignum-gold/40 opacity-60"></div>

      <div className="container mx-auto px-4 py-12 max-w-2xl relative z-10">
        {/* Logo Space */}
        <div className="text-center mb-8 animate-fade-in-up opacity-0">
          <div className="inline-block relative">
  <div className="w-32 h-32 mx-auto mb-6 relative group">
    
    {/* Logo */}
    <div className="w-full h-full rounded-full overflow-hidden border-2 border-lignum-gold/50 transition-all duration-500 group-hover:scale-105 group-hover:border-lignum-accent">
      <img
        src="/logo.jpeg"
        alt="Logo da Lignum"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Decorative Ring */}
    <div className="absolute inset-0 rounded-full border border-lignum-gold/30 scale-110 animate-pulse pointer-events-none"></div>
  </div>

  {/* Art Deco Divider */}
  <div className="flex items-center justify-center mb-4">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-lignum-gold"></div>
    <Star className="w-4 h-4 text-lignum-gold mx-3" fill="#d4a574" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-lignum-gold"></div>
  </div>
</div>


          {/* Brand Name */}
          <h1 className="font-display text-5xl md:text-6xl font-bold text-lignum-gold mb-3 tracking-wider text-shadow-gold">
            Velas Lignum
          </h1>

          <p className="font-body text-lg md:text-xl text-lignum-cream/80 mb-2 tracking-wide">
            Velas Aromáticas Artesanais
          </p>

          <p className="font-body text-sm text-lignum-gold/60 italic max-w-md mx-auto leading-relaxed">
            Cimento Compósito • Vidro • Madeira
          </p>

          {/* Art Deco Divider Bottom */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-lignum-gold/50 to-transparent"></div>
            <div className="h-1 w-1 rounded-full bg-lignum-gold mx-2"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-lignum-gold/50 to-transparent"></div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.url || '#'}
                className={`block group relative animate-fade-in-up opacity-0 delay-${(index + 2) * 100}`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                target='_blank'
              >
                {/* Card Background with Art Deco styling */}
                <div className="relative bg-gradient-to-r from-lignum-brown/60 to-lignum-brown/40 backdrop-blur-sm border border-lignum-gold/30 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-lignum-accent group-hover:shadow-lg group-hover:shadow-lignum-gold/20 group-hover:scale-[1.02]">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 animate-shimmer"></div>
                  </div>

                  {/* Content */}
                  <div className="relative px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-lignum-gold/10 border border-lignum-gold/30 flex items-center justify-center group-hover:bg-lignum-gold/20 group-hover:border-lignum-accent transition-all duration-300">
                        <Icon className="w-6 h-6 text-lignum-gold group-hover:text-lignum-accent transition-colors duration-300" />
                      </div>
                      <span className="font-body text-lg text-lignum-cream group-hover:text-lignum-accent transition-colors duration-300 tracking-wide">
                        {link.title}
                      </span>
                    </div>

                    {/* Art Deco Arrow */}
                    <div className="flex items-center space-x-1 text-lignum-gold/50 group-hover:text-lignum-accent group-hover:translate-x-1 transition-all duration-300">
                      <div className="w-2 h-2 border-t-2 border-r-2 border-current transform rotate-45"></div>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-lignum-gold/20"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-lignum-gold/20"></div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="text-center animate-fade-in-up opacity-0 delay-600" style={{ animationDelay: '0.8s' }}>
          {/* Art Deco Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-lignum-gold/40"></div>
            <div className="flex space-x-2 mx-4">
              <div className="w-2 h-2 rounded-full bg-lignum-gold/40"></div>
              <div className="w-2 h-2 rounded-full bg-lignum-gold/60"></div>
              <div className="w-2 h-2 rounded-full bg-lignum-gold/40"></div>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-lignum-gold/40"></div>
          </div>

          <p className="font-body text-sm text-lignum-gold/60 mb-2 tracking-widest uppercase">
            Elegância e Aroma em Cada Momento
          </p>

          <p className="font-body text-xs text-lignum-cream/40">
            © 2026 Velas Lignum. Todos os direitos reservados.
          </p>

          {/* Final decorative element */}
          <div className="mt-6 flex justify-center">
            <div className="w-1 h-1 rounded-full bg-lignum-gold/30"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
