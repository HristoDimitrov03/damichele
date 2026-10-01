import { motion } from 'motion/react';
import DeliveryPlatforms from './DeliveryPlatforms';
import { SITE_NAME } from '@/src/lib/site';

export default function DeliveryBanner() {
  return (
    <section id="delivery" className="pt-14 pb-20 md:py-20 px-6 bg-cream/5 border-y border-gold/10 relative overflow-hidden scroll-mt-[calc(2.1rem+env(safe-area-inset-top,0px))] md:scroll-mt-12">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            Доставка до вас
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
            {SITE_NAME} у дома.
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed font-light mb-8 max-w-lg mx-auto lg:mx-0">
            Поръчайте през Wolt — за вкъщи или с доставка.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <DeliveryPlatforms className="grid sm:grid-cols-1 gap-4 w-full" />
        </motion.div>
      </div>
    </section>
  );
}
