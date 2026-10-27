import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, CreditCard, Crown, Zap } from "lucide-react";

export default function Pricing() {
  return (

    <main id="main-content">
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
            <CreditCard className="w-3 h-3 mr-1" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple monthly pricing with a 7-day free trial. The Premium plan adds the full CACFP meal program module. No hidden fees, no surprises.
          </p>
        </div>
      </div>
    </section>
    <section className="pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full border-border hover:border-primary/30 transition-colors">
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Zap className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-xl">
                      Standard Plan
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Everything except CACFP
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-foreground">
                      $249
                    </span>
                    <span className="text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Full compliance platform for centers not using CACFP
                  </p>
                </div>
              </div>
              <div className="p-6 pt-4">
                <Link to="/register">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full mb-6">
                    Get Started
                  </button>
                </Link>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    What's included:
                  </p>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Center Documentation Management
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Staff Records & Tracking
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Parents & Children Management
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Compliance Reports Dashboard
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Star Rating Assessment
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Schedule & Attendance
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Import from OCCRRA
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Import from KinderConnect
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Weekly Lesson Plans
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Priority Support
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      CACFP Meal Program Tracking
                      <span className="ml-1 text-xs font-medium text-amber-600">
                        (Premium only)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full border-primary/50 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                  Includes CACFP
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-xl">
                      Premium Plan
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Full access, including CACFP
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-foreground">
                      $497
                    </span>
                    <span className="text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Everything in Standard plus the full CACFP meal program module
                  </p>
                </div>
              </div>
              <div className="p-6 pt-4">
                <div className="space-y-2 mb-6">
                  <Link to="/register">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 w-full bg-primary hover:bg-primary/90">
                      Subscribe Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full">
                      Or Start 7-Day Free Trial
                    </button>
                  </Link>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Everything in Standard, plus:
                  </p>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      CACFP Meal Program Tracking
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Center Documentation Management
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Staff Records & Tracking
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Parents & Children Management
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Compliance Reports Dashboard
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Star Rating Assessment
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Schedule & Attendance
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Import from OCCRRA
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Import from KinderConnect
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Weekly Lesson Plans
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Priority Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Questions About Pricing?
        </h2>
        <p className="text-muted-foreground mb-6">
          We're here to help. Contact us for custom solutions or enterprise pricing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
              Contact Sales
            </button>
          </Link>
          <Link to="/register">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-primary hover:bg-primary/90">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
    </main>
  );
}
