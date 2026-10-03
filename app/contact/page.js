"use client";

import { Mail, UserPlus, MessageCircle } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { submitContactForm } from "./actions";

const contactInfo = [
  {
    icon: UserPlus,
    label: "Create your profile",
    value: "Tell us your name",
  },
  {
    icon: Mail,
    label: "Your email",
    value: "For your contact details",
  },
  {
    icon: MessageCircle,
    label: "Say hello",
    value: "Leave a short message",
  },
];

export default function Contact() {
  const {
    name,
    email,
    message,
    submitted,
    setName,
    setEmail,
    setMessage,
    setSubmitted,
  } = useUser();

  async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  const result = await submitContactForm(formData);

  if (result.success) {
    setSubmitted(true);
  } else {
    alert(result.error);
  }
}

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">
            Get Started
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Welcome to Userly
          </h1>

          <p className="mt-4 text-muted-foreground">
            Enter your details below to introduce yourself to Userly.
            Your name will appear as a personalized greeting in the
            navigation bar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">

          {/* Information */}
          <div className="space-y-4 md:col-span-2">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <Card
                key={label}
                className="border border-white/10 bg-foreground/[0.03] transition-all hover:border-primary/30"
              >
                <CardContent className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      {label}
                    </p>

                    <p className="text-sm font-medium">
                      {value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card className="border border-white/10 bg-foreground/[0.03] md:col-span-3">
            <CardContent>
              {submitted ? (
                <div className="flex min-h-64 flex-col items-center justify-center text-center">

                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserPlus className="size-5" />
                  </div>

                  <p className="mt-4 text-lg font-semibold">
                    Welcome, {name}! 👋
                  </p>

                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Your profile information has been saved for this
                    session. You can now explore Userly and browse the
                    user directory.
                  </p>

                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6 rounded-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit Information
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        Name
                      </label>

                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={(event) =>
                          setName(event.target.value)
                        }
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        Email
                      </label>

                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Say hello to Userly..."
                      value={message}
                      onChange={(event) =>
                        setMessage(event.target.value)
                      }
                      className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full"
                  >
                    Get Started
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}