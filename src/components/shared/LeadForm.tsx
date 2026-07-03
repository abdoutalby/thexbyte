import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const WORKER_URL = "https://api.thexbyte.tn/contact";

type Status = "idle" | "submitting" | "success" | "error";

type LeadFormProps = {
  variant?: "full" | "compact";
  title?: string;
  submitLabel?: string;
};

export function LeadForm({
  variant = "full",
  title = "Get in touch",
  submitLabel = "Send message",
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_honey") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = (await res.json()) as { success?: boolean };
      if (!json.success) throw new Error("Submission was not accepted.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl border border-border bg-background ${variant === "compact" ? "p-5" : "p-6 sm:p-8"}`}
      noValidate
    >
      {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
      <div className={`grid gap-4 ${variant === "full" ? "mt-5 sm:grid-cols-2" : "mt-4"}`}>
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      {variant === "full" && (
        <div className="mt-4">
          <Field label="Company (optional)" name="company" autoComplete="organization" />
        </div>
      )}
      <div className="mt-4">
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Project details
          </span>
          <textarea
            name="message"
            required
            rows={variant === "compact" ? 3 : 5}
            maxLength={2000}
            placeholder="Describe your project, timeline, and goals."
            className="mt-2 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal/60"
          />
        </label>
      </div>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">We'll reply within one business day.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            submitLabel
          )}
        </button>
      </div>
      {status === "success" && (
        <div role="status" className="mt-4 flex items-start gap-2 rounded-md border border-signal/40 bg-signal/5 p-3 text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
          <span>Message received. We'll be in touch soon.</span>
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="mt-4 flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <span>{errorMsg} Email us at hello@thexbyte.tn</span>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        maxLength={200}
        className="mt-2 h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal/60"
      />
    </label>
  );
}
