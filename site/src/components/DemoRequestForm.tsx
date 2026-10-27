import { useState, type FormEvent } from "react";
import { Building2, Mail, Phone, User } from "lucide-react";
import { submitDemoRequest } from "@/lib/leads";
import { toast } from "@/lib/toast";

const labelClass =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-foreground";
const inputClass =
  "flex w-full rounded-md border-2 border-primary bg-white px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-white/10 h-11";

const empty = { name: "", email: "", phoneNumber: "", centerName: "" };

const fields = [
  { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith", Icon: User },
  { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com", Icon: Mail },
  { id: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "(555) 123-4567", Icon: Phone },
  { id: "centerName", label: "Center Name", type: "text", placeholder: "Sunshine Childcare Center", Icon: Building2 },
] as const;

export default function DemoRequestForm() {
  const [values, setValues] = useState(empty);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitDemoRequest({
        center_name: values.centerName,
        admin_name: values.name,
        phone_number: values.phoneNumber,
        email: values.email || null,
        address: "N/A - Website Form",
      });
      toast({ title: "Demo Request Submitted!", description: "We'll contact you shortly to schedule your demo." });
      setValues(empty);
    } catch {
      toast({ title: "Submission Failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {fields.map(({ id, label, type, placeholder, Icon }) => (
        <div key={id} className="space-y-2">
          <label className={labelClass} htmlFor={id}>
            <Icon className="w-4 h-4 text-primary" />
            {label}{" "}
            <span className="text-destructive">*</span>
          </label>
          <input
            type={type}
            className={inputClass}
            id={id}
            name={id}
            placeholder={placeholder}
            required
            value={values[id]}
            onChange={e => setValues(v => ({ ...v, [id]: e.target.value }))}
          />
        </div>
      ))}
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 w-full h-12 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Request Demo"}
      </button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting, you agree to be contacted about KinderCompliance services.
      </p>
    </form>
  );
}
