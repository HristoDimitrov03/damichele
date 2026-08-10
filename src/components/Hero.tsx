import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useOrderModal } from './OrderModalContext';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { openOrderModal } = useOrderModal();

  return (
    <section id="top" className="relative min-h-dvh w-full overflow-hidden flex items-start md:items-center justify-center pt-[calc(140px+env(safe-area-inset-top,0px))] md:pt-0 bg-dark scroll-mt-0">
      {/* Warm oven-glow ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[52rem] h-[52rem] bg-gold/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-bronze/15 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl md:mt-0 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-serif font-bold text-cream mb-3 tracking-tight uppercase"
        >
          Da <span className="text-gold">Michele</span>
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-gold-soft font-sans uppercase tracking-[0.5em] text-base md:text-xl mb-8 block"
        >
          Biga Family
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-cream/90 mb-10 font-light tracking-wide max-w-2xl mx-auto"
        >
          Автентични ястия, приготвени с пресни, висококачествени продукти. Истинско пътешествие из вкусовете на Италия!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-soft transition-colors shadow-xl shadow-gold/10 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            Виж менюто
          </a>
          <button
            type="button"
            onClick={openOrderModal}
            className="w-full sm:w-auto border-2 border-gold/40 text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-dark hover:border-gold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            Поръчай
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          reduceMotion
            ? { delay: 0.2, duration: 0.25 }
            : { delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest text-cream/50">Виж повече</span>
        <ChevronDown className="text-gold w-6 h-6" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
