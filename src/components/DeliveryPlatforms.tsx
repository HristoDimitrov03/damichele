import { ExternalLink, Phone, ShoppingBag, Truck } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, TAKEAWAY_URL, WOLT_URL } from '@/src/lib/site';

type Props = {
  className?: string;
  showPhone?: boolean;
};

export default function DeliveryPlatforms({ className, showPhone = true }: Props) {
  return (
    <div className={className}>
      <a
        href={TAKEAWAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FF8000]/10 p-5 rounded-2xl border border-[#FF8000]/20 hover:border-[#FF8000]/50 transition-colors flex items-center gap-4 group"
      >
        <div className="bg-[#FF8000] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
          <Truck className="text-white" size={22} aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-serif font-bold text-cream group-hover:text-[#FF8000] transition-colors">
            Takeaway.com
          </h3>
          <p className="text-cream/50 text-sm">Поръчай през Takeaway</p>
        </div>
        <ExternalLink
          className="text-cream/30 group-hover:text-[#FF8000] transition-colors"
          size={18}
          aria-hidden="true"
        />
      </a>

      <a
        href={WOLT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00C2E8]/10 p-5 rounded-2xl border border-[#00C2E8]/20 hover:border-[#00C2E8]/50 transition-colors flex items-center gap-4 group"
      >
        <div className="bg-[#00C2E8] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
          <ShoppingBag className="text-dark" size={22} aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-serif font-bold text-cream group-hover:text-[#00C2E8] transition-colors">
            Wolt
          </h3>
          <p className="text-cream/50 text-sm">Поръчай през Wolt</p>
        </div>
        <ExternalLink
          className="text-cream/30 group-hover:text-[#00C2E8] transition-colors"
          size={18}
          aria-hidden="true"
        />
      </a>

      {showPhone && (
        <a
          href={`tel:${PHONE_TEL}`}
          className="bg-gold/10 p-5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-colors flex items-center gap-4 group"
        >
          <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center shrink-0">
            <Phone className="text-dark" size={22} aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-serif font-bold text-cream group-hover:text-gold transition-colors">
              {PHONE_DISPLAY}
            </h3>
            <p className="text-cream/50 text-sm">Обади се за поръчка</p>
          </div>
          <Phone
            className="text-cream/30 group-hover:text-gold transition-colors"
            size={18}
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}
