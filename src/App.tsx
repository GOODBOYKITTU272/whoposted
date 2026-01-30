import { useState, useEffect } from 'react';
import { ArrowRight, Check, X, Linkedin, User, Clock, Shield, Eye, ArrowUpRight, Menu, X as CloseIcon, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';
import Login from './Login';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenLogin = () => {
    setShowLogin(true);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  const navLinks = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Featured', href: '#featured' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const testimonials = [
    {
      quote: "I was tired of applying into black holes. Knowing who posted the job helped me tailor my approach and actually get responses. It's not magic—it's just context I didn't have before.",
      name: "Rachel Kim",
      role: "Product Designer",
      company: "Hired at Notion",
      avatar: "RK"
    },
    {
      quote: "This platform saved me weeks of searching. Instead of browsing hundreds of sites, I got direct access to jobs with poster info. Totally worth the one-time payment!",
      name: "Michael Chen",
      role: "Software Engineer",
      company: "Hired at Stripe",
      avatar: "MC"
    },
    {
      quote: "The daily updates keep the job list fresh and relevant. I found several new opportunities that weren't available on other platforms. Highly recommend!",
      name: "Sarah Johnson",
      role: "UX Researcher",
      company: "Hired at Spotify",
      avatar: "SJ"
    },
    {
      quote: "For less than the cost of a coffee per month, I got lifetime access. The ROI is incredible - I received multiple interview calls within the first week!",
      name: "David Park",
      role: "Product Manager",
      company: "Hired at Figma",
      avatar: "DP"
    },
    {
      quote: "Knowing who posted the job gave me the confidence to reach out directly. I landed my dream role at a top tech company within 3 weeks of signing up.",
      name: "Emily Wong",
      role: "Data Scientist",
      company: "Hired at Netflix",
      avatar: "EW"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Company logos for marquee
  const companyLogos = [
    'Google', 'Meta', 'Amazon', 'Netflix', 'Airbnb', 'Uber',
    'Microsoft', 'Apple', 'Adobe', 'Salesforce', 'Twitter', 'Slack'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-1/2 -left-1/4 w-[80%] h-full bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[80%] bg-indigo-900/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-800/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">WhoPosted</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={handleOpenLogin}
              className="bg-white text-[#0a0a1a] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 flex items-center gap-2"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a1a]/98 backdrop-blur-xl border-b border-white/5 py-6 px-4 sm:px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-white py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={handleOpenLogin}
              className="bg-white text-[#0a0a1a] px-6 py-3 rounded-full text-sm font-semibold mt-4 w-full text-center"
            >
              Sign In
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Daily US Job Updates
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              <span className="text-white">
                Stop Applying Blind.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2">
                See Who Posted the Job.
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-lg leading-relaxed">
              Daily US job postings with the name and LinkedIn profile of the person who shared them — so you&apos;re not applying blind.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="bg-white text-[#0a0a1a] px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl shadow-white/10"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold border-2 border-[#0a0a1a]">J</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-xs font-bold border-2 border-[#0a0a1a]">M</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-xs font-bold border-2 border-[#0a0a1a]">S</div>
                </div>
                <span className="text-sm font-medium text-white/70">2,000+ job seekers</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/40 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No subscriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No guarantees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Just context</span>
              </div>
            </div>
          </div>

          {/* Orbital Job Cards Visualization */}
          <div className="relative h-[500px] lg:h-[600px] hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Center Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl shadow-purple-500/20">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">20k+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Jobs tracked</div>
                    </div>
                  </div>
                </div>

                {/* Orbital Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/5" />

                {/* Orbiting Job Cards */}
                <div className="orbit-card absolute w-52 bg-[#151528]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl" style={{ animation: 'orbit1 20s linear infinite', top: '15%', left: '55%' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded-full">Posted 2h ago</span>
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="font-semibold text-sm mb-1">Product Designer</div>
                  <div className="text-xs text-white/40 mb-4">Notion Labs</div>
                  <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold">SJ</div>
                    <span className="text-xs text-white/60">Sarah Johnson</span>
                  </div>
                </div>

                <div className="orbit-card absolute w-52 bg-[#151528]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl" style={{ animation: 'orbit2 25s linear infinite', top: '55%', left: '15%' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded-full">Posted 5h ago</span>
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="font-semibold text-sm mb-1">Engineering Lead</div>
                  <div className="text-xs text-white/40 mb-4">Stripe</div>
                  <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-xs font-bold">MC</div>
                    <span className="text-xs text-white/60">Mike Chen</span>
                  </div>
                </div>

                <div className="orbit-card absolute w-52 bg-[#151528]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl" style={{ animation: 'orbit3 22s linear infinite', top: '65%', left: '65%' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded-full">Posted 1d ago</span>
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="font-semibold text-sm mb-1">UX Researcher</div>
                  <div className="text-xs text-white/40 mb-4">Spotify</div>
                  <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-xs font-bold">AL</div>
                    <span className="text-xs text-white/60">Anna Lee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured/Trust Logos - Infinite Scroll Marquee */}
      <section id="featured" className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <p className="text-center text-sm text-white/40 uppercase tracking-widest">Trusted by job seekers from companies like</p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a1a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a1a] to-transparent z-10" />

          {/* Scrolling Track */}
          <div className="flex animate-marquee">
            {/* First Set */}
            {[...companyLogos, ...companyLogos].map((company, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 px-16 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-white/30 hover:text-white/60 transition-colors whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[...companyLogos, ...companyLogos].map((company, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 px-16 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-white/30 hover:text-white/60 transition-colors whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              How job seekers use WhoPosted
            </h2>
            <p className="text-white/50">No onboarding required. The product explains itself through context.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Discover with context',
                desc: 'See the job, posting recency, and the name and role of the person who shared it.',
                icon: Eye,
                gradient: 'from-purple-500 to-violet-500'
              },
              {
                step: '02',
                title: 'Prepare intentionally',
                desc: 'Review the poster\'s role and company context. Tailor your approach based on who they are.',
                icon: User,
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                step: '03',
                title: 'Act or move on',
                desc: 'Apply with context, reach out professionally, or skip if it\'s not right. You decide.',
                icon: ArrowUpRight,
                gradient: 'from-blue-500 to-cyan-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-500 overflow-hidden">
                {/* Large Step Number Background */}
                <div className="absolute -top-2 -left-2 text-8xl font-bold text-white/[0.03] select-none pointer-events-none">
                  {item.step}
                </div>

                <div className="relative z-10">
                  {/* Icon in rounded square with gradient */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Boundaries */}
      <section className="py-24 px-4 sm:px-6 bg-[#050510] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Clear boundaries</h2>
            <p className="text-white/50">WhoPosted supports common job-search behaviors without overpromising.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h3 className="flex items-center gap-2 text-emerald-400 font-semibold mb-6">
                <Check className="w-5 h-5" />
                What we provide
              </h3>
              <ul className="space-y-4">
                {[
                  'Name of the job poster',
                  'Link to public LinkedIn profile',
                  'Posting recency (time since posted)',
                  'Daily updates every 24 hours',
                  'Context for outreach decisions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-emerald-400/70 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="flex items-center gap-2 text-white/40 font-semibold mb-6">
                <X className="w-5 h-5" />
                What we do not provide
              </h3>
              <ul className="space-y-4">
                {[
                  'Email addresses or private contact info',
                  'Automated outreach or messaging',
                  'Resume submission services',
                  'Referral guarantees',
                  'Hiring outcome guarantees'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40 text-sm">
                    <X className="w-4 h-4 text-white/30 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Email Preview */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
                One email per day.
                <span className="block text-white/40 mt-2">No spam. No upsells.</span>
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Get a daily digest of new job postings with poster information delivered to your inbox.
                Unsubscribe anytime. No marketing banners. Just jobs and context.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-white/70">Daily at 9 AM EST</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-white/70">No spam, ever</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
              <div className="relative bg-[#151528] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#1a1a2e] px-6 py-4 border-b border-white/5 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-white/40 ml-2">WhoPosted Daily Digest</span>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">12 new roles today</h4>
                    <p className="text-sm text-white/40">United States & Remote</p>
                  </div>

                  {[
                    { role: 'Senior Product Manager', company: 'Figma', poster: 'Alex Chen', time: '2h ago' },
                    { role: 'UX Researcher', company: 'Spotify', poster: 'Maria Garcia', time: '5h ago' },
                    { role: 'Engineering Lead', company: 'Stripe', poster: 'James Wilson', time: '8h ago' }
                  ].map((job, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors -mx-4 px-4 rounded-lg cursor-pointer group">
                      <div>
                        <div className="font-medium text-sm text-white group-hover:text-purple-300 transition-colors">{job.role}</div>
                        <div className="text-xs text-white/40">{job.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-purple-400 mb-1">{job.poster}</div>
                        <div className="text-xs text-white/30">{job.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a1a] to-[#050510]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Lifetime access. No subscriptions.</h2>
          <p className="text-white/50 mb-12">Low friction. Low regret. No urgency tactics.</p>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
            <div className="relative bg-[#151528]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 max-w-md mx-auto shadow-2xl">
              <div className="text-5xl font-bold mb-2 text-white">$29</div>
              <div className="text-white/40 text-sm mb-8 uppercase tracking-widest">One-time payment</div>

              <ul className="space-y-4 text-left mb-10">
                {[
                  'Daily US job postings',
                  'Poster name & LinkedIn link',
                  'Daily email digest',
                  'Lifetime updates',
                  'No recurring fees'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/whooposted"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-[#0a0a1a] py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-white/10 inline-block"
              >
                Get lifetime access
              </a>

              <p className="mt-6 text-xs text-white/30 italic">
                No outcome guarantees. Tools for clarity, not promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section id="testimonial" className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              We&apos;ve earned trust through reviews from real users.
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hidden md:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Grid - Show 3 on desktop */}
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <div
                    key={index}
                    className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300"
                  >
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-sm font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-white">{testimonial.name}</div>
                        <div className="text-xs text-white/50">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-purple-400 w-6' : 'bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 bg-[#050510]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How is this different from LinkedIn job alerts?',
                a: 'Job alerts tell you a job exists. WhoPosted tells you who shared it. Many career communities recommend identifying the poster before applying—this tool surfaces that information automatically.'
              },
              {
                q: 'Do you provide email addresses?',
                a: 'No. We only provide links to public LinkedIn profiles. How you choose to contact them (if at all) is up to you.'
              },
              {
                q: 'Does this guarantee I\'ll get hired?',
                a: 'No. WhoPosted provides context for your job search, not outcomes. Hiring depends on many factors beyond identifying the poster.'
              },
              {
                q: 'Is this available outside the USA?',
                a: 'WhoPosted is designed specifically for the US job market. We currently only sell to and serve customers within the United States.'
              }
            ].map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors bg-white/[0.02]">
                <h3 className="font-semibold mb-2 text-lg text-white">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 border-t border-white/5 bg-[#020205]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-semibold text-xl">WhoPosted</span>
          </div>

          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <div className="text-sm text-white/30">
            © 2024 WhoPosted. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
