import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Factory,
  FileText,
  Globe,
  Instagram,
  Linkedin,
  Menu,
  Mic,
  Package,
  Store,
  TrendingUp,
  Twitter,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Karo<span className="text-accent">Pitch</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Home", href: "#hero" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Startups", href: "#startups" },
                { label: "Investors", href: "#investors" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                data-ocid="nav.primary_button"
                className="hidden md:flex bg-accent text-black hover:bg-accent/90 font-semibold text-sm"
                size="sm"
              >
                Apply to Pitch
              </Button>
              <button
                type="button"
                className="md:hidden text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-foreground border-t border-white/10 overflow-hidden"
            >
              <nav className="px-4 py-4 flex flex-col gap-4">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Startups", href: "#startups" },
                  { label: "Investors", href: "#investors" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-white/80 hover:text-white font-medium transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  data-ocid="nav.primary_button"
                  className="bg-accent text-black hover:bg-accent/90 font-semibold w-full"
                >
                  Apply to Pitch
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        {/* Orange glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/40 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">
                🇮🇳 India&apos;s Premier Startup Pitch Platform
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-6"
            >
              Pitch Your Startup to
              <br />
              <span className="text-accent">India&apos;s Top Investors</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Connect with leading investors and raise funding to scale your
              vision. From Tier 2 cities to the national stage.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            >
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 font-semibold text-base px-8 shadow-glow"
              >
                Apply to Pitch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                data-ocid="hero.secondary_button"
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold text-base px-8"
              >
                Explore Startups
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-white/60 text-sm"
            >
              {["500+ Startups Applied", "50+ Investors", "₹100Cr+ Raised"].map(
                (stat) => (
                  <div key={stat} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{stat}</span>
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* About Karo Pitch */}
      <section
        id="about"
        data-ocid="about.section"
        className="py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
            >
              Our Mission
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6"
            >
              Bridging the Gap Between
              <br />
              <span className="text-accent">Founders and Capital</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Karo Pitch was born from a simple belief — great ideas don&apos;t
              only come from metros. We exist to empower founders from Tier 2
              and Tier 3 cities across India to connect directly with serious
              investors, get funded, and build businesses that matter.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { value: "500+", label: "Startups Applied", icon: TrendingUp },
              { value: "50+", label: "Active Investors", icon: Users },
              { value: "12", label: "Cities Covered", icon: Globe },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 text-center border border-border shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="font-display font-bold text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
            >
              Simple Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white"
            >
              How It Works
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: 1,
                icon: FileText,
                title: "Apply with Your Pitch Deck",
                desc: "Submit your startup details and pitch deck through our streamlined application form.",
                ocid: "how_it_works.item.1",
              },
              {
                step: 2,
                icon: CheckCircle2,
                title: "Get Shortlisted",
                desc: "Our expert panel reviews applications and selects the most promising startups.",
                ocid: "how_it_works.item.2",
              },
              {
                step: 3,
                icon: Mic,
                title: "Pitch Live to Investors",
                desc: "Present your startup live in front of top investors at our curated pitch events.",
                ocid: "how_it_works.item.3",
              },
              {
                step: 4,
                icon: TrendingUp,
                title: "Raise Funding & Scale",
                desc: "Close deals, receive funding, and accelerate your growth with investor backing.",
                ocid: "how_it_works.item.4",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                data-ocid={item.ocid}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="relative bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-accent/50 hover:bg-white/8 transition-all group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm font-display">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
            >
              Eligibility
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground"
            >
              Who Can Apply
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10"
          >
            {[
              {
                icon: Package,
                label: "D2C Brands",
                desc: "Consumer brands selling directly to customers",
                ocid: "who_can_apply.item.1",
              },
              {
                icon: Store,
                label: "MSMEs",
                desc: "Micro, small & medium enterprises seeking growth",
                ocid: "who_can_apply.item.2",
              },
              {
                icon: Cpu,
                label: "SaaS Startups",
                desc: "Software products solving business problems",
                ocid: "who_can_apply.item.3",
              },
              {
                icon: Factory,
                label: "Manufacturing",
                desc: "Production businesses with scalable models",
                ocid: "who_can_apply.item.4",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                data-ocid={item.ocid}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-accent/40 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground text-sm"
          >
            Open to registered Indian businesses at any stage — Pre-Seed, Seed,
            or Series A. Founders from Tier 2 &amp; Tier 3 cities are strongly
            encouraged to apply.
          </motion.p>
        </div>
      </section>

      {/* Investors Section */}
      <section
        id="investors"
        className="py-20 bg-gradient-to-br from-foreground via-foreground to-foreground/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
            >
              The Room You Want to Be In
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            >
              Meet the Investors
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-white/60 text-lg max-w-2xl mx-auto"
            >
              Top angel investors, venture capitalists, and family offices
              attend our curated pitch events looking for India&apos;s next big
              breakout companies.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
          >
            {[
              {
                initials: "RM",
                name: "Rajan Mehta",
                role: "Partner, Blume Ventures",
                color: "from-blue-500 to-blue-700",
                ocid: "investors.item.1",
              },
              {
                initials: "PS",
                name: "Priya Sharma",
                role: "Angel Investor",
                color: "from-purple-500 to-purple-700",
                ocid: "investors.item.2",
              },
              {
                initials: "VN",
                name: "Vikram Nair",
                role: "MD, Sequoia India",
                color: "from-green-500 to-green-700",
                ocid: "investors.item.3",
              },
              {
                initials: "AD",
                name: "Anita Desai",
                role: "Partner, Accel",
                color: "from-rose-500 to-rose-700",
                ocid: "investors.item.4",
              },
              {
                initials: "SP",
                name: "Suresh Patel",
                role: "Family Office",
                color: "from-amber-500 to-amber-700",
                ocid: "investors.item.5",
              },
              {
                initials: "NG",
                name: "Neha Gupta",
                role: "VC, Kalaari Capital",
                color: "from-teal-500 to-teal-700",
                ocid: "investors.item.6",
              },
            ].map((investor) => (
              <motion.div
                key={investor.name}
                data-ocid={investor.ocid}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/30 hover:bg-white/8 transition-all flex items-center gap-4"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${investor.color} flex items-center justify-center text-white font-bold text-lg font-display shrink-0`}
                >
                  {investor.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-white">
                    {investor.name}
                  </div>
                  <div className="text-white/50 text-sm">{investor.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Startups */}
      <section id="startups" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
            >
              In the Spotlight
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground"
            >
              Featured Startups
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                initials: "GC",
                name: "GreenCart",
                category: "D2C",
                desc: "Organic grocery delivery from farm to doorstep",
                stage: "Seed",
                color: "bg-green-500",
                ocid: "startups.item.1",
              },
              {
                initials: "TB",
                name: "TechBridge",
                category: "SaaS",
                desc: "B2B workflow automation for growing teams",
                stage: "Pre-Seed",
                color: "bg-blue-500",
                ocid: "startups.item.2",
              },
              {
                initials: "FM",
                name: "FabrikaMade",
                category: "Manufacturing",
                desc: "Sustainable textiles with zero-waste production",
                stage: "Series A",
                color: "bg-purple-500",
                ocid: "startups.item.3",
              },
              {
                initials: "MR",
                name: "MilkRoute",
                category: "D2C",
                desc: "Farm-fresh dairy delivered within hours",
                stage: "Seed",
                color: "bg-amber-500",
                ocid: "startups.item.4",
              },
              {
                initials: "CK",
                name: "CloudKirana",
                category: "SaaS",
                desc: "Inventory management built for kirana stores",
                stage: "Pre-Seed",
                color: "bg-teal-500",
                ocid: "startups.item.5",
              },
              {
                initials: "IF",
                name: "IronForge",
                category: "Manufacturing",
                desc: "Precision engineering parts at scale",
                stage: "Series A",
                color: "bg-rose-500",
                ocid: "startups.item.6",
              },
            ].map((startup) => (
              <motion.div
                key={startup.name}
                data-ocid={startup.ocid}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${startup.color} flex items-center justify-center text-white font-bold text-lg font-display`}
                  >
                    {startup.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">
                      {startup.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {startup.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {startup.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      startup.stage === "Seed"
                        ? "bg-green-100 text-green-700"
                        : startup.stage === "Pre-Seed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {startup.stage}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About KaroStartup */}
      <section
        data-ocid="karostartup.section"
        className="py-20 bg-foreground/95"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-accent font-semibold uppercase tracking-widest text-sm mb-3"
              >
                Our Parent Platform
              </motion.p>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6"
              >
                Powered by <span className="text-accent">KaroStartup</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-white/60 text-lg leading-relaxed mb-8"
              >
                KaroStartup is India&apos;s leading startup media platform
                covering news, events, and untold stories from the startup
                ecosystem — with a special focus on builders from Tier 2 and
                Tier 3 cities who are quietly changing the country.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <Button
                  data-ocid="karostartup.button"
                  className="bg-accent text-white hover:bg-accent/90 font-semibold"
                >
                  Visit KaroStartup <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "1M+", label: "Monthly Readers" },
                { value: "5000+", label: "Stories Published" },
                { value: "200+", label: "Events Covered" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center"
                >
                  <div className="font-display font-bold text-2xl sm:text-3xl text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(65% 0.18 45) 0%, oklch(40% 0.12 45) 40%, oklch(18% 0.04 265) 100%)",
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
            >
              Ready to Pitch Your Startup?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-white/75 text-xl mb-10"
            >
              Join hundreds of founders who have already taken the stage.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                data-ocid="cta.primary_button"
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 font-bold text-base px-10"
              >
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                data-ocid="cta.secondary_button"
                size="lg"
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 font-bold text-base px-10"
              >
                Partner With Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground border-t border-white/10 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-display font-bold text-xl text-white">
                  Karo<span className="text-accent">Pitch</span>
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                India&apos;s premier startup pitching platform connecting
                ambitious founders with capital to build the next generation of
                great companies.
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="https://karostartup.com"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-accent/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#about" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Startups", href: "#startups" },
                  { label: "Investors", href: "#investors" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                KaroStartup
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "News", href: "#" },
                  { label: "Events", href: "#" },
                  { label: "Stories", href: "#" },
                  { label: "Partnerships", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} KaroStartup. All rights reserved.
            </p>
            <p className="text-white/30 text-sm">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-white/50 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
