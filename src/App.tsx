import React, { useState } from "react";
import {
  Clock,
  BarChart3,
  TrendingUp,
  Bell,
  Calendar,
  Zap,
  Play,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export default function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitted:", { name, email });
    setSubmitted(true);

    // Reset form after 2 seconds and close dialog
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setName("");
      setEmail("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6" />
            <span className="font-medium">LogFox</span>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Join Waitlist</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join the Waitlist</DialogTitle>
                <DialogDescription>
                  Be the first to know when we launch. Enter your details below.
                </DialogDescription>
              </DialogHeader>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Join Waitlist
                  </Button>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">
                    Thanks for joining! We'll notify you when we launch. 🎉
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground">
            <Zap className="w-4 h-4" />
            <span className="text-sm">We are in the game of life 🏃‍♂️</span>
          </div>

          <h1 className="text-5xl md:text-6xl">
            Track Your Day.
            <br />
            Improve Your Life.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {/* Simple, consistent, reminder tool for tracking your time and
            improving your life each day. */}
            Simple, consistent, reminder tool for tracking your day.
          </p>

          <div className="flex justify-center pt-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  Get Early Access
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Demo Video/Screenshot Section */}
      {/* <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-muted/30 rounded-3xl p-12 md:p-16">
          <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground">
                  Demo video or screenshot will go here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Replace this placeholder with your app demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="mb-4">Track. Review. Improve.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple system designed to help you understand where your time goes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <h3>Smart Reminders</h3>
            <p className="text-muted-foreground">
              Get gentle reminders every 30 minutes or hourly to log what you're
              working on. Stay mindful of how you spend your time.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3>Daily Reports</h3>
            <p className="text-muted-foreground">
              At the end of each day, receive a comprehensive report showing
              exactly where your time went.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3>Long-term Growth</h3>
            <p className="text-muted-foreground">
              Identify patterns, eliminate time-wasters, and make conscious
              decisions to improve your productivity over time.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-muted/30 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Three simple steps to transform your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl">
              1
            </div>
            <h3>Set Your Reminders</h3>
            <p className="text-muted-foreground">
              Choose your preferred reminder frequency.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl">
              2
            </div>
            <h3>Log Your Activities</h3>
            <p className="text-muted-foreground">
              When reminded, take 10 seconds to note what you're currently
              working on.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl">
              3
            </div>
            <h3>Review & Improve</h3>
            <p className="text-muted-foreground">
              At day's end, review your report and plan how to optimize
              tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 text-center">
          <Calendar className="w-12 h-12 mx-auto mb-6" />
          <h2 className="mb-4 text-primary-foreground">
            Each Day Counts for Something
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Join our waitlist and be notified when we launch. Start winning at
            the game of life.
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="gap-2">
                Join the Waitlist
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 TimeTrack. Built for those who want to win at the game of
            life.
          </p>
        </div>
      </footer>
    </div>
  );
}
