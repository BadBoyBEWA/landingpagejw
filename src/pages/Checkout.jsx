import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentModal({ isOpen, onClose, method }) {
  if (!isOpen) return null;

  const details = {
    PayPal: {
      icon: 'account_balance_wallet',
      color: 'text-[#0070ba]',
      instruction: 'Please send the total amount to our verified PayPal address:',
      value: 'payments@immortallegacy.com',
      note: 'Include your full name in the transaction notes for faster verification.'
    },
    CashApp: {
      icon: 'attach_money',
      color: 'text-[#00d084]',
      instruction: 'Scan or use the Cashtag below to complete your payment:',
      value: '$ImmortalLegacyVIP',
      note: 'Payments are typically verified within 15-30 minutes.'
    },
    Bitcoin: {
      icon: 'currency_bitcoin',
      color: 'text-[#f7931a]',
      instruction: 'Transfer the equivalent BTC amount to the following secure wallet:',
      value: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      note: 'Ensure you account for network fees to avoid payment delays.'
    },
    'Wire Transfer': {
      icon: 'account_balance',
      color: 'text-white',
      instruction: 'Our banking coordinates for international wire transfers:',
      value: 'Request via support@immortallegacy.com',
      note: 'Wire transfers can take 1-3 business days to clear.'
    }
  };

  const current = details[method] || details['Wire Transfer'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/80">
      <div className="w-full max-w-md overflow-hidden bg-surface-container-low border border-outline-variant/20 relative animate-in fade-in zoom-in duration-300">
        {/* Asymmetric Gold Accent */}
        <div className="absolute top-0 left-0 w-32 h-[2px] bg-tertiary/60"></div>
        
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className={`material-symbols-outlined ${current.color}`}>{current.icon}</span>
            <h3 className="font-headline text-sm font-black uppercase tracking-widest text-white">{method} Payment</h3>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-8 space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">{current.instruction}</p>
            <div className="bg-surface-container-high border border-outline-variant/10 p-4 text-[0.875rem] font-bold tracking-[0.15em] text-tertiary break-all">
              {current.value}
            </div>
          </div>
          
          <div className="border-l-2 border-tertiary/40 bg-white/5 p-4 text-left">
            <p className="text-[0.625rem] leading-relaxed text-on-surface-variant uppercase tracking-[0.1em]">
              {current.note}
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-full h-14 bg-gradient-to-r from-tertiary to-tertiary/80 text-background font-bold uppercase tracking-[0.2em] text-[0.75rem] hover:brightness-110 transition-all duration-500"
          >
            I Have Sent Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Checkout() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentClick = (method) => {
    setPaymentMethod(method);
    setModalOpen(true);
  };

  return (
    <div className="bg-background text-on-surface selection:bg-tertiary selection:text-on-primary min-h-screen pb-12">
      {/* TopAppBar Navigation Shell */}
      <header className="bg-background/60 backdrop-blur-[20px] docked full-width top-0 z-50 border-b border-outline-variant/15 fixed w-full h-20 flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/form")}
            className="flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back
          </button>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
            SECURE CHECKOUT
          </span>
        </div>
      </header>

      <main className="pt-32 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Summary */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <p className="text-tertiary text-[10px] tracking-[0.4em] uppercase mb-2">TIER SUMMARY</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-headline italic">
              IMMORTAL <span className="text-tertiary">LEVEL</span>
            </h1>
            <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant max-w-sm">
              The gold standard of the Jaylin Williams legacy. Exclusive inner circle access.
            </p>
          </div>

          <div className="bg-surface-container-low border border-white/5 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-[2px] bg-tertiary/40"></div>
            
            <div className="mb-8 flex items-start justify-between">
              <div>
                <span className="bg-tertiary/20 text-tertiary text-[8px] font-black px-2 py-0.5 uppercase tracking-widest inline-block mb-3">
                  PRIVATE ACCESS
                </span>
                <h3 className="text-2xl font-black uppercase italic mt-1 text-white">IMMORTAL TIER</h3>
              </div>
              <div className="text-right">
                <div className="text-tertiary font-black text-3xl">$5,000</div>
                <div className="text-[10px] font-medium text-on-surface-variant tracking-widest uppercase">/ YEAR</div>
              </div>
            </div>

            <ul className="space-y-4 border-t border-white/5 pt-6">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                <span className="text-on-surface-variant text-[11px] uppercase tracking-wide text-white">Travel with Team (Select)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                <span className="text-on-surface-variant text-[11px] uppercase tracking-wide text-white">Unlimited Courtside Access</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                <span className="text-on-surface-variant text-[11px] uppercase tracking-wide text-white">Annual Foundation Board Invite</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                <span className="text-on-surface-variant text-[11px] uppercase tracking-wide text-white">Signed OKC Jersey Yearly</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                <span className="text-on-surface-variant text-[11px] uppercase tracking-wide text-white">1:1 Coaching Consult</span>
              </li>
            </ul>

            <div className="mt-8 flex items-center justify-between border-t border-outline-variant/10 pt-6">
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant">
                Total Due Today
              </span>
              <span className="font-headline text-xl font-black text-tertiary">
                $5,000.00
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Payment Methods */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 lg:p-12 border border-white/5 relative">
          <div className="absolute top-0 right-0 w-[2px] h-32 bg-primary/40"></div>
          
          <h4 className="mb-8 flex items-center gap-3 font-headline text-lg font-black uppercase tracking-widest text-white">
            <span className="material-symbols-outlined text-tertiary">shield_lock</span>
            SECURE PAYMENT
          </h4>

          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handlePaymentClick('PayPal')}
              className="flex items-center justify-center gap-3 bg-[#0070ba] py-5 font-bold text-white text-[0.75rem] tracking-[0.1em] uppercase hover:bg-[#005ea6] transition-colors border border-transparent"
            >
              <span className="material-symbols-outlined">account_balance_wallet</span>
              PayPal
            </button>
            <button
              type="button"
              onClick={() => handlePaymentClick('CashApp')}
              className="flex items-center justify-center gap-3 bg-[#00d084] py-5 font-bold text-white text-[0.75rem] tracking-[0.1em] uppercase hover:bg-[#00b371] transition-colors border border-transparent"
            >
              <span className="material-symbols-outlined">attach_money</span>
              CashApp
            </button>
            <button
              type="button"
              onClick={() => handlePaymentClick('Bitcoin')}
              className="flex items-center justify-center gap-3 bg-[#f7931a] py-5 font-bold text-white text-[0.75rem] tracking-[0.1em] uppercase hover:bg-[#e17e07] transition-colors border border-transparent"
            >
              <span className="material-symbols-outlined">currency_bitcoin</span>
              Bitcoin
            </button>
            <button
              type="button"
              onClick={() => handlePaymentClick('Wire Transfer')}
              className="flex items-center justify-center gap-3 bg-surface-container-high py-5 font-bold text-white text-[0.75rem] tracking-[0.1em] uppercase hover:bg-surface-container-highest transition-colors border border-white/10 hover:border-tertiary/50"
            >
              <span className="material-symbols-outlined text-tertiary">account_balance</span>
              Wire Transfer
            </button>
          </div>

          <div className="relative mb-10 flex items-center justify-center">
            <div className="h-px w-full bg-outline-variant/20" />
            <span className="absolute bg-surface-container-low px-4 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-on-surface-variant">
              Or pay with card
            </span>
          </div>

          <form
            className="space-y-8"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="space-y-2">
              <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-transparent border-b border-outline-variant/20 text-xl tracking-[0.2em] text-on-surface placeholder:text-on-surface-variant/20 focus:border-tertiary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                />
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant/50">
                  credit_card
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full bg-transparent border-b border-outline-variant/20 text-lg tracking-[0.2em] text-on-surface placeholder:text-on-surface-variant/20 focus:border-tertiary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-transparent border-b border-outline-variant/20 text-lg tracking-[0.2em] text-on-surface placeholder:text-on-surface-variant/20 focus:border-tertiary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                />
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                className="w-full h-16 bg-gradient-to-r from-tertiary to-tertiary/80 text-background font-bold uppercase tracking-[0.2em] text-[0.875rem] hover:brightness-110 transition-all duration-500 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lock
                </span>
                COMPLETE ENROLLMENT
              </button>
            </div>
          </form>
          
          <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-[0.625rem] text-on-surface-variant/40 uppercase tracking-[0.1em] max-w-sm mx-auto">
              By proceeding, you agree to the immortal legacy terms of service. All transactions are securely encrypted.
            </p>
          </div>
        </div>
      </main>

      <PaymentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        method={paymentMethod} 
      />
    </div>
  );
}
