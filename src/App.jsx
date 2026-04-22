import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

//Original content moved to Home.jsx component

function OldApp() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1920px] mx-auto w-full">
          <div className="text-xl font-black tracking-[-0.04em] text-[#e5e2e1] font-headline uppercase italic">
            JAYLIN WILLIAMS
          </div>
        </nav>
      </header>
      <main>
        {/* Hero Section - Compact & High Energy */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-center opacity-70 scale-105"
              data-alt="high contrast action shot of Jaylin Williams dunking in a professional arena with electric blue lighting"
              src="/jay2.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
            <p className="text-primary text-[10px] tracking-[0.5em] uppercase mb-4 font-black">VOL. 01 / MMXXIV</p>
            <h1 className="text-5xl md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase mb-6 font-headline italic">
              THE RISE OF <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-primary to-primary-container">J. WILLIAMS</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="w-full sm:w-auto bg-primary text-on-primary px-12 py-4 text-[10px] font-black tracking-[0.2em] uppercase hover:scale-105 transition-all duration-300">
                GET FULL ACCESS
              </button>
            </div>
          </div>
        </section>
        {/* Live Activity Ticker - Tighter */}
        <div className="bg-surface-container-lowest py-3 overflow-hidden whitespace-nowrap border-y border-white/5">
          <div className="animate-marquee">
            <div className="flex items-center gap-12 px-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                <span className="text-[9px] tracking-[0.15em] font-medium text-on-surface-variant uppercase"><span className="text-primary">@jwill_loyalty</span> JUST ACCESSED THE LOCKER ROOM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                <span className="text-[9px] tracking-[0.15em] font-medium text-on-surface-variant uppercase"><span className="text-primary">@okc_thunder_fan</span> CLAIMED EXCLUSIVE DROP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                <span className="text-[9px] tracking-[0.15em] font-medium text-on-surface-variant uppercase"><span className="text-primary">@pro_scout_24</span> UPGRADED TO IMMORTAL</span>
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-12 px-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                <span className="text-[9px] tracking-[0.15em] font-medium text-on-surface-variant uppercase"><span className="text-primary">@jwill_loyalty</span> JUST ACCESSED THE LOCKER ROOM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                <span className="text-[9px] tracking-[0.15em] font-medium text-on-surface-variant uppercase"><span className="text-primary">@okc_thunder_fan</span> CLAIMED EXCLUSIVE DROP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                <span className="text-[9px] tracking-[0.15em] font-medium text-on-surface-variant uppercase"><span className="text-primary">@pro_scout_24</span> UPGRADED TO IMMORTAL</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bento Grid - Denser */}
        <section className="py-16 px-4 md:px-12 bg-background">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2">PRIVILEGES</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase font-headline">BEYOND THE ARC</h2>
              </div>
              <p className="text-on-surface-variant text-[11px] uppercase tracking-widest max-w-xs">Exclusive digital and physical assets for the inner circle.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[650px]">
              <div className="md:col-span-7 relative group overflow-hidden bg-surface-container-low p-8 flex flex-col justify-end border border-white/5">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700"
                  data-alt="Jaylin Williams training in a cinematic gym setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDqjKaPjsU_qraVbvKcJzpwBjyG4vjBpr3bHw2IPz9xEhyGO-2ByJWaariiMKCLDE6nMXioG1HyZHSuENb_oGDopRiDXVjjCx4DClQ8IscleI_hIQekBoSOdeCdtEDH305IWcjB1sH9At3BdCeG9CHwGlCZSML7DXGQefxmNrEJvTxBD-vaHhpGhpR8bPb40po3MwcPWPxP5XXjdIEci-3nXzCFFwU1dZXNBzzKPVcmjovPXi-q_G-5gUJneRTdpDk6PDQ57Mkw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase mb-2 italic">Locker Room Feed</h3>
                  <p className="text-on-surface-variant text-xs max-w-sm mb-6 leading-relaxed">Raw pre-game analysis and post-game breakdown directly from Jaylin. Unfiltered access to the process.</p>
                  <span className="material-symbols-outlined text-3xl text-primary">sensors</span>
                </div>
              </div>
              <div className="md:col-span-5 relative group overflow-hidden bg-surface-container-highest p-8 flex flex-col justify-start border border-white/5">
                <div className="relative z-10">
                  <span className="text-tertiary text-[9px] tracking-[0.2em] font-bold uppercase mb-2 block">DROP 01</span>
                  <h3 className="text-xl font-black uppercase mb-4">Signature Merch</h3>
                  <p className="text-on-surface-variant text-xs mb-8">Early reservation for the J-Will 1s and limited edition apparel drops.</p>
                  <img
                    className="w-full grayscale brightness-75 transition-all duration-500"
                    data-alt="professional basketball sneaker on dark background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa61HxsmdPfZ2pVZCI3ZDzrVoBWnSGSEcNG_hLYXYecXNurOmTEBCzcSlbl_cWaeN6ylkr4hXG0_qqWxSzKjV59L1EtFi1w3U91pDPqwkOQap-y2KKxKWjqX46AD4i05icWIeb51SD1aSY7J0J8tuNriYZkF9a-3asemdXkQ3z7l9Z8xrYeHbRusUI_ADM4EBnk07WZVeUl4z9YKYSbDjgXsgacjzEdIRAvy9X_vdV5V1T_pOQY9M0Om0ehQeaNTIjyNxmQ-MNOw"
                  />
                </div>
              </div>
              <div className="md:col-span-4 relative group overflow-hidden bg-surface-container-low p-8 flex flex-col justify-between border border-white/5">
                <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase mb-2 italic">Pro Drills</h3>
                  <p className="text-on-surface-variant text-xs">Master your footwork with Jaylin's personal training regimen.</p>
                </div>
                <img
                  className="absolute bottom-0 right-0 w-1/2 opacity-10 grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxf6T7fFuhxchEbBaqw9JsyfKkZ91tm5VFlf_tZG0A5tRz4fDUca5fqE0L9D9z6Fj7P1vVinPmuqePuNllC5wyGJTnT61zXizkzYh4q3rO3ALCZ_gMTCqwLo0pZ7LG-d5g8r8YMcbcu8WWC7XPFmo267KGy9qimRDSMRERNY3Hdz0UhZLK5_ZNpjudXUU4lylrNNKTjUtTt8obKWjRlj4HM3SeNNbqEJY58kuWNDewjG9r1H9xEOD0kJhc97duFcUKFLaquq1ZrA"
                />
                <span className="material-symbols-outlined text-3xl text-primary relative z-10">fitness_center</span>
              </div>
              <div className="md:col-span-8 relative group overflow-hidden bg-surface-container-highest p-8 flex flex-col justify-end border border-white/5">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC15LEn7eBPHcdxYUPPeagl9BvMfjlPWGGiMXXPc9ac-zXrU8lBWcu1Lpq8KTm2ERNrdUJhKouoaaT4SH-AOch_3rFI_ceFfGjLa2j7x4yK5CWifURSsky9LraDlbNYmphYs1bP9drIYf8IIpC0ADdGiSEzMgMVgBzq_8VZPEfItAYX7JhCRQoUkl96PGslMhNdP-TsGL8NKXHjnMKvVs9DczMZhuM1WuSbPgOWKKDWZC-B_ghzUeaG14xpRZtQ4isLDliswxQMJA"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase mb-2">Courtside Elite</h3>
                  <p className="text-on-surface-variant text-xs max-w-sm mb-4">VIP seating packages and invitations to private post-game socials.</p>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.2em] border border-primary/30">MEMBERS ONLY</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Curated Archive - Compact Slider */}
        <section className="py-16 bg-surface-container-lowest">
          <div className="px-4 md:px-12 max-w-[1920px] mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1">HISTORY</p>
                <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase font-headline italic">THE VAULT</h2>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary transition-all">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>
                <button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary transition-all">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-8">
              <div className="min-w-[280px] md:min-w-[400px] group cursor-pointer">
                <div className="relative aspect-video bg-surface-container-high overflow-hidden mb-4 border border-white/5">
                  <img
                    className="w-full h-full object-cover grayscale transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvPjICPO25-xK7GkIc9epP6bgF6BP9q8IKzdbawbvVNuESTbztUdcRdttMmWYN2L6rqe6wbatsZwJj6ivaUwVP2ZPYvDSrNKYp6WQqv58omYxM12TitzVVJshlfWbt0-BuwCOXPVNzWYhtDAFi9Qn2lZko51vQE78iOxXwXhV6Hl6Cfy5ZcDF__17jwQGpbX-Abxzpk-bJD3ZeRlpqjjriKE8gIW9Z_KK9tAc_Yr25-1EZfMSZkuTtROs4uaMPqIL5JRppCY708w"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-0.5 text-[8px] font-bold">EP 01</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-4xl text-white">play_circle</span>
                  </div>
                </div>
                <h4 className="text-lg font-black uppercase mb-1 group-hover:text-primary transition-colors italic">Arkansas Roots</h4>
                <p className="text-on-surface-variant text-[9px] uppercase tracking-widest">Documentary Series • Part 1</p>
              </div>
              <div className="min-w-[280px] md:min-w-[400px] group cursor-pointer opacity-70">
                <div className="relative aspect-video bg-surface-container-high overflow-hidden mb-4 border border-white/5">
                  <img
                    className="w-full h-full object-cover grayscale blur-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB33Zo-dWhsewhfsZ0k4AtePIjL6A6iZSHW16d-V2HaIDSge1B7_HUCUYHta0o4sZeHB9xlN_zQWTR_dIFOP1yLj6RJ5ydWl_kpPOrWkce5CGVVBtra1RRpTWIJ9F3__VewA5RX2oAnD4wIHy-wGNL9dqBGmm5IdLAQO7Ln_n1dhv3BmHpQeJWJQIJJunA5gs1o7nZhGPwQR2Mm5sZEHehsFtgIK0ZiOFA32i15yghJXIu1G5rqiM6Cu5Bi_QOVtPR5p6TzrGJxRA"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-2xl text-tertiary">lock</span>
                      <span className="text-[8px] font-black tracking-widest uppercase text-tertiary mt-2">IMMORTAL ONLY</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-black uppercase mb-1 text-on-surface-variant italic">Playoff Prep</h4>
                <p className="text-on-surface-variant/50 text-[9px] uppercase tracking-widest">Unreleased Content</p>
              </div>
              <div className="min-w-[280px] md:min-w-[400px] group cursor-pointer">
                <div className="relative aspect-video bg-surface-container-high overflow-hidden mb-4 border border-white/5">
                  <img
                    className="w-full h-full object-cover grayscale transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCfAv9crC4TwjeNkwNwORhlO3oKVAjS6PhAAw0G7VWYySBtC1wIp4f56lseuO7QsY_huvVyWOkT-7_F8nBVQfWjmsw6TFQqSre6neIC18JIWCHGR1W1PjNmuJcF6cyr7QO8Exw8BL3ivdssI4BMgcQeAmsxCAhrM1sanhoYRnrRoxrL_GqdTdNBEDMA0vhicuJMqIYlgMTuH4F1oH9wZQAGzOvcRnYssV0325KNxp6IJEDY9UisEmmtpZr5DbAU4c8Axb71tJ7vQ"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-0.5 text-[8px] font-bold">12:00</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-4xl text-white">play_circle</span>
                  </div>
                </div>
                <h4 className="text-lg font-black uppercase mb-1 group-hover:text-primary transition-colors italic">Dunk Reel 24</h4>
                <p className="text-on-surface-variant text-[9px] uppercase tracking-widest">Season Highlights</p>
              </div>
            </div>
          </div>
        </section>
        {/* VIP Experience - Tighter Layout */}
        <section className="py-16 px-4 md:px-12 bg-background border-y border-white/5">
          <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2">ACCESS</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 font-headline italic">INNER CIRCLE STATUS</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 max-w-xl">Not just a fandom, but a strategic partnership. Gain access to private clinics, draft night parties, and direct lines to Jaylin's team.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 border-l-2 border-primary">
                  <div className="flex justify-between items-center mb-4">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <span className="bg-primary/20 text-primary text-[8px] font-black px-2 py-0.5">OPEN</span>
                  </div>
                  <h4 className="text-md font-black uppercase mb-1">Group Sessions</h4>
                  <p className="text-on-surface-variant text-[11px]">Monthly live virtual skill clinics.</p>
                </div>
                <div className="bg-surface-container-low p-6 border-l-2 border-tertiary">
                  <div className="flex justify-between items-center mb-4">
                    <span className="material-symbols-outlined text-tertiary">confirmation_number</span>
                    <span className="bg-tertiary/20 text-tertiary text-[8px] font-black px-2 py-0.5">LIMITED</span>
                  </div>
                  <h4 className="text-md font-black uppercase mb-1">OKC Meet-ups</h4>
                  <p className="text-on-surface-variant text-[11px]">Private after-game tunnel sessions.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <img
                className="w-full grayscale border border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvUNRUxyLy1uWyB6fGbDBVM4Rc5R6SZGz6Xij8C9h1uJkxxPnN31IylfI3MbybaFNZqFilvf7AiNUeNej0PllMxikbga5Gw2BDwZXsMakjBljUZIZFP1PszejA2eQrv_h6TuNB6SuSbFbIc9WfXvDKa-t5HISizccfmCJraHof-GNiluhYuGa7TI2aqrT-ThJspMOElutIyavuN1oNLDyi6jHUrHLv1-DVfdLE-T9_QDU600MlXe9Xq6RQhnLaZIgdkSPwGncXfQ"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary px-6 py-4 text-on-primary font-black uppercase italic tracking-tighter">
                <span className="text-3xl leading-none">VIP</span><br /><span className="text-xs">LEVEL ACCESS</span>
              </div>
            </div>
          </div>
        </section>
        {/* Membership Tiers - Redesigned Density */}
        <section className="py-20 px-4 md:px-12 bg-background">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary text-[10px] tracking-[0.4em] uppercase mb-2">CHOOSE YOUR PATH</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase font-headline">MEMBERSHIP TIERS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
              {/* TIER 1 */}
              <div className="p-10 flex flex-col h-full bg-surface-container-lowest border-b md:border-b-0 md:border-r border-white/5">
                <div className="mb-8">
                  <span className="text-[9px] font-black tracking-[0.3em] text-on-surface-variant uppercase">SILVER</span>
                  <h3 className="text-3xl font-black uppercase italic mt-1">STARTER</h3>
                  <div className="text-primary font-black text-2xl mt-4">$1.2K <span className="text-[10px] font-medium text-on-surface-variant tracking-normal uppercase">/ YEAR</span></div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">The Vault Digital Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Exclusive Discord Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Pre-sale Drop Codes</span>
                  </li>
                </ul>
                <button className="w-full border border-white/10 py-4 text-[9px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">CHOOSE STARTER</button>
              </div>
              {/* TIER 2 */}
              <div className="p-10 flex flex-col h-full bg-surface-container-low relative border-b md:border-b-0 md:border-r border-white/5 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="mb-8">
                  <div className="bg-primary/20 text-primary text-[8px] font-black px-2 py-0.5 uppercase tracking-widest inline-block mb-3">PREFERRED</div>
                  <h3 className="text-3xl font-black uppercase italic mt-1">LEGACY</h3>
                  <div className="text-primary font-black text-2xl mt-4">$5K <span className="text-[10px] font-medium text-on-surface-variant tracking-normal uppercase">/ YEAR</span></div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">star</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide font-bold text-white">All Starter Features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">2 Courtside Game Tickets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Signed OKC Jersey Yearly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">1:1 Coaching Consult</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-on-primary py-4 text-[9px] font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all">CHOOSE LEGACY</button>
              </div>
              {/* TIER 3 */}
              <div className="p-10 flex flex-col h-full bg-surface-container-lowest">
                <div className="mb-8">
                  <span className="text-tertiary text-[9px] font-black tracking-[0.3em] uppercase">GOLD STANDARD</span>
                  <h3 className="text-3xl font-black uppercase italic mt-1">IMMORTAL</h3>
                  <div className="text-tertiary font-black text-2xl mt-4">PRIVATE</div>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Travel with Team (Select)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Unlimited Courtside Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
                    <span className="text-on-surface-variant text-[11px] uppercase tracking-wide">Annual Foundation Board Invite</span>
                  </li>
                </ul>
                <button className="w-full bg-tertiary text-on-tertiary py-4 text-[9px] font-black tracking-[0.2em] uppercase hover:brightness-110 transition-all">INQUIRE NOW</button>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA - High Energy */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]"></div>
            <div className="text-[20rem] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stroke opacity-10 pointer-events-none italic select-none">JWILL</div>
          </div>
          <div className="relative z-10 px-4 text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-10 font-headline italic">
              OWN THE <span className="text-primary">MOMENT.</span>
            </h2>
            <button className="group relative px-12 py-6 bg-white text-black text-[11px] font-black tracking-[0.4em] uppercase overflow-hidden hover:text-white transition-colors duration-500">
              <span className="relative z-10">APPLY FOR ENROLLMENT</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <p className="mt-8 text-on-surface-variant text-[9px] uppercase tracking-[0.3em]">Season enrollment closing soon.</p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-background">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-10 gap-8 w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="text-white font-black text-lg font-headline tracking-tighter uppercase italic">JAYLIN WILLIAMS</div>
            <p className="text-on-surface-variant text-[9px] uppercase tracking-widest">© 2024 IMMORTAL LEGACY ARCHIVE. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-on-surface-variant text-[9px] font-bold uppercase tracking-widest hover:text-primary transition-all" href="#">VAULT</a>
            <a className="text-on-surface-variant text-[9px] font-bold uppercase tracking-widest hover:text-primary transition-all" href="#">MEMBERSHIP</a>
            <a className="text-on-surface-variant text-[9px] font-bold uppercase tracking-widest hover:text-primary transition-all" href="#">PRIVACY</a>
          </div>
          <div className="flex gap-5">
            <span className="material-symbols-outlined text-on-surface-variant text-xl hover:text-primary cursor-pointer transition-colors">share</span>
            <span className="material-symbols-outlined text-on-surface-variant text-xl hover:text-primary cursor-pointer transition-colors">mail</span>
            <span className="material-symbols-outlined text-on-surface-variant text-xl hover:text-primary cursor-pointer transition-colors">public</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
