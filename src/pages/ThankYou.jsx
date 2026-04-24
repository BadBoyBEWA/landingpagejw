import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-on-primary min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <span className="material-symbols-outlined text-7xl text-primary relative z-10">verified_user</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="font-extrabold text-on-surface leading-none uppercase text-[3rem] md:text-[4rem] tracking-[0.15em]">
            Transmission <br /> <span className="text-tertiary">Received</span>
          </h1>
          <div className="h-px w-24 bg-tertiary mx-auto"></div>
          <p className="text-[0.75rem] md:text-[0.875rem] font-medium tracking-[0.2em] uppercase text-on-surface-variant max-w-md mx-auto leading-relaxed">
            Your identification has been successfully uploaded to the immortal legacy archive. Verification is currently in progress.
          </p>
        </div>

        <div className="pt-8">
          <button 
            onClick={() => navigate("/checkout")}
            className="px-12 py-5 bg-gradient-to-r from-primary to-on-primary-container text-on-primary font-bold uppercase tracking-[0.2em] text-[0.75rem] hover:brightness-110 transition-all duration-500 shadow-2xl shadow-primary/20"
          >
            Access Membership Portal
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 opacity-10 pointer-events-none flex flex-col items-center">
        <img
          alt="J.W. Monogram"
          className="w-12 grayscale mb-4"
          src="/jay5.png"
        />
        <span className="text-[0.6rem] tracking-[0.5em] font-light uppercase">
          Jaylin Williams
        </span>
      </div>
    </div>
  );
}
