import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/Menu';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import DeliveryBanner from './components/DeliveryBanner';
import OrderPlatformModal from './components/OrderPlatformModal';
import { OrderModalProvider } from './components/OrderModalContext';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';
import { PHONE_TEL } from '@/src/lib/site';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <OrderModalProvider
      value={{
        openOrderModal: () => setIsOrderModalOpen(true),
        closeOrderModal: () => setIsOrderModalOpen(false),
      }}
    >
    <div id="top" className="relative min-h-dvh overflow-x-hidden bg-dark selection:bg-gold selection:text-dark">
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-0 z-[100] -translate-y-full rounded-md bg-gold px-4 py-3 font-semibold text-dark shadow-lg outline-none ring-2 ring-cream transition-transform duration-200 focus:pointer-events-auto focus:translate-y-4"
      >
        Skip to main content
      </a>
      {/* Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main id="main-content" tabIndex={-1}>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="pt-[4.2rem] pb-24 md:py-24 px-6 bg-dark flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-7xl mx-auto gap-12 scroll-mt-[calc(2.1rem+env(safe-area-inset-top,0px))] md:scroll-mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-6 block">За нас</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-8 leading-tight">
              Пицата е изкуство.
              <br />
              <span className="text-gold">Ние сме майсторите.</span>
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed font-light pb-4">
              В Da Michele Biga Family вярваме, че всяка пица заслужава да бъде шедьовър. Тестото ни е приготвено по автентична италианска рецепта — тънко, хрупкаво и с внимателно подбрани висококачествени съставки.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full h-[400px] rounded-2xl overflow-hidden group shadow-md border border-gold/20"
          >
            <img
              src="/images/about.jpg"
              alt="Пица с прошуто от Da Michele Biga Family"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </section>

        <MenuSection />

        <DeliveryBanner />
        
        {/* Atmospheric Image Break */}
        <div className="h-[400px] w-full relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2070&auto=format&fit=crop" 
            alt="Неаполитанска пица с надупен борд"
            width={2070}
            height={1380}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover fixed-bg brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-dark/30" />
        </div>

        <Reviews />
        <Location />
        
        {/* Call CTA Section */}
        <section className="py-24 px-6 bg-gold text-dark text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Гладни ли сте?</h2>
            <p className="text-xl md:text-2xl mb-12 font-medium opacity-80">
              Поръчайте за вкъщи през Wolt — или се обадете директно.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-dark text-gold px-12 py-5 rounded-full font-bold text-xl hover:bg-dark/90 transition-all shadow-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 focus-visible:ring-offset-gold focus-visible:outline-none"
              >
                Обади се
              </a>
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(true)}
                className="border-2 border-dark text-dark px-12 py-5 rounded-full font-bold text-xl hover:bg-dark hover:text-gold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 focus-visible:ring-offset-gold focus-visible:outline-none"
              >
                Поръчай
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      <OrderPlatformModal open={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </div>
    </OrderModalProvider>
  );
}
