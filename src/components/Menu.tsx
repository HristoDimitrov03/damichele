import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useOrderModal } from './OrderModalContext';
import { CATEGORY_DESCRIPTIONS, MENU_DATA } from '@/src/data/menuData';


export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Пица с Бига');
  const { openOrderModal } = useOrderModal();

  return (
    <section id="menu" className="pt-[4.2rem] pb-24 md:py-24 px-6 bg-dark scroll-mt-[calc(2.1rem+env(safe-area-inset-top,0px))] md:scroll-mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4"
          >
            Нашето меню
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4" />
          <p className="text-cream/60 font-light max-w-xl mx-auto mb-8">
            Нашето меню е приготвено за Вас с много внимание и специално отношение.
          </p>

          <div role="group" aria-label="Menu categories" className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-3 max-w-3xl mx-auto">
            {Object.keys(MENU_DATA).map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={cn(
                  "min-h-11 px-2 py-2 text-base md:text-lg font-serif transition-all duration-200 pb-1 border-b-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm",
                  activeCategory === cat ? "text-gold border-gold" : "text-cream/40 border-transparent hover:text-cream"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category story */}
        {CATEGORY_DESCRIPTIONS[activeCategory] && (
          <motion.p
            key={`desc-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.28 }}
            className="text-cream/70 font-light leading-relaxed max-w-3xl mx-auto text-center mb-14 border border-gold/20 rounded-2xl px-6 py-5 bg-charcoal"
          >
            {CATEGORY_DESCRIPTIONS[activeCategory]}
          </motion.p>
        )}

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28 }}
          className="grid md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {MENU_DATA[activeCategory].map((item) => (
            <div key={item.name} className="group">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xl font-serif font-bold text-cream group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <span className="text-gold font-bold whitespace-nowrap shrink-0">{item.price}</span>
              </div>
              {item.desc && (
                <p className="text-cream/60 font-light leading-relaxed">{item.desc}</p>
              )}
              <div className="mt-4 border-b border-cream/10" />
            </div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={openOrderModal}
            className="inline-block border border-gold text-gold px-12 py-4 rounded-full font-bold hover:bg-gold hover:text-dark transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            Поръчай
          </button>
        </div>
      </div>
    </section>
  );
}
