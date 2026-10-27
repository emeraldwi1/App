import { useState, type FormEvent } from "react";
import { submitContactMessage } from "@/lib/leads";
import { toast } from "@/lib/toast";
import { Clock, Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function Contact() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    setSending(true);
    try {
      await submitContactMessage({ name: get("name"), email: get("email"), phone: get("phone") || null, subject: get("subject"), message: get("message") });
      toast({ title: "Message Sent!", description: "We'll get back to you within 1-2 business days." });
      form.reset();
    } catch {
      toast({ title: "Message failed to send", description: "Please email support@kindercompliance.com.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
    <main id="main-content" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about KinderCompliance? We're here to help. Reach out to our team and we'll respond as quickly as possible.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                    Full Name *
                  </label>
                  <input className="flex h-10 w-full rounded-md border-2 border-primary bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-white/10" id="name" name="name" placeholder="Your name" required defaultValue="" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                    Email Address *
                  </label>
                  <input type="email" className="flex h-10 w-full rounded-md border-2 border-primary bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-white/10" id="email" name="email" placeholder="you@example.com" required defaultValue="" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                    Phone Number
                  </label>
                  <input type="tel" className="flex h-10 w-full rounded-md border-2 border-primary bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-white/10" id="phone" name="phone" placeholder="(555) 123-4567" defaultValue="" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="subject">
                    Subject *
                  </label>
                  <input className="flex h-10 w-full rounded-md border-2 border-primary bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-white/10" id="subject" name="subject" placeholder="How can we help?" required defaultValue="" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
                  Message *
                </label>
                <textarea className="flex min-h-[80px] w-full rounded-md border-2 border-primary bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/10" id="message" name="message" placeholder="Tell us more about your inquiry..." rows={5} required />
              </div>
              <button disabled={sending} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      info@kindercompliance.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      Main: (844) 614-2068
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Support Hours
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      Monday - Friday
                    </p>
                    <p className="text-muted-foreground">
                      8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      Response Time
                    </p>
                    <p className="text-muted-foreground">
                      Within 1-2 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="font-semibold text-foreground mb-2">
                Need Immediate Help?
              </h3>
              <p className="text-muted-foreground mb-4">
                Check out our documentation and frequently asked questions for quick answers to common questions.
              </p>
              <a href="mailto:support@kindercompliance.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
