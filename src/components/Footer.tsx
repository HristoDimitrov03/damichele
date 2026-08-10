import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  FACEBOOK_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/src/lib/site';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <a
            href="#top"
            className="flex items-center w-fit group focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
            aria-label="Da Michele Biga Family — Начало"
          >
            <Logo variant="footer" />
          </a>

          <p className="text-cream/60 max-w-md leading-relaxed">
            Автентична неаполитанска пица с бига в сърцето на София — италиански майстор-пицар, изцяло италиански продукти и тесто със 100% бига.
          </p>
          <div className="flex gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-cream/40 hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
            >
              <Facebook size={24} aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-cream/40 hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
            >
              <Instagram size={24} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-widest text-sm">Бързи връзки</h4>
          <ul className="space-y-4 text-cream/60">
            <li>
              <a
                href="#about"
                className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
              >
                За нас
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
              >
                Меню
              </a>
            </li>
            <li>
              <a
                href="#delivery"
                className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
              >
                Доставка
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
              >
                Локация
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-serif font-bold mb-6 uppercase tracking-widest text-sm">Контакти</h4>
          <ul className="space-y-4 text-cream/60">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold shrink-0" aria-hidden="true" />
              <a
                href={`tel:${PHONE_TEL}`}
                className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
              >
                {ADDRESS_STREET}
                <br />
                {ADDRESS_CITY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/5 text-center text-cream/30 text-xs uppercase tracking-widest">
        © 2026 Da Michele Biga Family. Всички права запазени.
      </div>
    </footer>
  );
}
