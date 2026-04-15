import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reasons = [
  {
    title: "Reliable Scheduling",
    description: "Booked time slots that actually happen, with updates if weather shifts plans.",
    icon: CalendarCheck2,
  },
  {
    title: "Quality-First Work",
    description: "Detail-focused mowing, edging, trimming, and cleanup on every visit.",
    icon: Sparkles,
  },
  {
    title: "Fast Turnaround",
    description: "Quick quote response and efficient service windows across NSW.",
    icon: Zap,
  },
  {
    title: "Satisfaction Guarantee",
    description: "We stand by our work and will make it right if you're not happy.",
    icon: ShieldCheck,
  }
];

export function WhyChooseSection() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 w-full mt-10 bg-foreground/5 p-8 min-[800px]:p-12 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(30px)", filter: "blur(10px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.45, ease: [0.7, -0.63, 0.24, 0.99] }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        <h3 className="text-2xl min-[800px]:text-3xl font-bold">Why Homeowners Choose Us</h3>
        <p className="text-lg opacity-70 max-w-3xl">
          We combine consistent service, careful workmanship, and fast communication so your outdoor space gets better without the usual hassle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-4 gap-4 w-full">
        {reasons.map((reason, idx) => {
          const Icon = reason.icon;

          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, transform: "translateY(30px)", filter: "blur(10px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
              transition={{ duration: 1, delay: idx * 0.08, ease: [0.7, -0.63, 0.24, 0.99] }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="opacity-30" />
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, transform: "translateY(30px)", filter: "blur(10px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.6, ease: [0.7, -0.63, 0.24, 0.99] }}
        viewport={{ once: true }}
      >
        <Button className="flex bg-[#34623c] text-white hover:bg-[#34623c]" asChild>
          <Link href="/book">
            Get a free quote
            <ArrowRight />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
