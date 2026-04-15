"use client"

import { useRef, useLayoutEffect, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"
import { delay, easeInOut, motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge";

import { CircleCheckBig, CrownIcon, Droplets, Flower, Flower2, ArrowRight, Gauge, Leaf, PaintbrushVertical, Scale, Shrub, Sparkles, Sprout, TreePine, Trees, User, Users, House, BadgeCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import './style.css'

import { PackageFeature } from "@/components/package-feature";
import { FooterItem } from "@/components/footer-item";
import StarBorder from "@/components/react-bits/StarBorder/StarBorder";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function Home() {
    const badgeRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(badgeRef, { once: true, margin: "-50px" });
    const [openWidth, setOpenWidth] = useState(172); // fallback width
    const [showText, setShowText] = useState(false);

    // Measure the open width once on mount
    useLayoutEffect(() => {
        if (measureRef.current) {
            setOpenWidth(measureRef.current.offsetWidth);
        }
    }, []);

    // Delay showing the text after inView
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isInView) {
            timeout = setTimeout(() => setShowText(true), 1500); // 1 second delay
        }
        return () => clearTimeout(timeout);
    }, [isInView]);

    const offerings = [
      {
        title: "Lawn Care",
        description: "Complete lawn care and regular maintenance.",
        icon: <Sprout />,
      },
      {
        title: "Hedge Trimming",
        description: "Professional hedge trimming and shaping services.",
        icon: <Shrub />,
      },
      {
        title: "Garden Weeding",
        description: "Targeted weed removal to keep garden beds healthy.",
        icon: <Flower />,
      },
      {
        title: "Mulching",
        description: "Neat mulch application for moisture retention and finish.",
        icon: <TreePine />,
      },
      {
        title: "Pressure Washing",
        description: "High-pressure exterior cleaning for paths and driveways.",
        icon: <Droplets />,
      },
      {
        title: "Gutter & Roof",
        description: "Roof and gutter clearing to reduce buildup and overflow.",
        icon: <House />,
      },
    ]

  return (
    <main>
      <div className="flex items-center justify-center h-screen hero load-anim" style={{paddingTop: '61px'}} id="hero">
        <div className="w-[40%] text-left p-10 flex flex-col justify-center gap-4 hero-content">
          <Badge className="flex flex-row w-fit gap-2"><BadgeCheckIcon size={16}/> Trusted by Northern Beaches Locals</Badge>
          <div className="flex justify-center flex-col">
            <h1 className="text-6xl font-bold">Want to Transform Your Outdoor Space?</h1>
            <p className="text-lg mt-4 opacity-70">
              Your at the right place. We provide reliable, high quality lawn care, garden maintenance, pressure washing, and gutter cleaning services across NSW.
            </p>
          </div>
          <Button className="flex bg-[#34623c] text-white hover:bg-[#34623c]" asChild>
            <Link href={'/book'}>
              Get a free quote
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-10 p-16 pb-0 flex-wrap offer w-full">
        <div className="flex w-full items-center justify-center flex-col gap-10 flex-wrap offer-content">
          <WhyChooseSection />

          <h2 className="text-4xl font-bold text-center mt-8">What We Offer</h2>
          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-4 max-[800px]:gap-3 w-full">
            {offerings.map((offering, idx) => (
              <motion.div
                key={offering.title}
                className="flex items-center justify-center"
                initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: idx * 0.08, ease: [.7,-0.63,.24,.99]}}
                viewport={{ once: true }}
              >
                <StarBorder
                  color="#000"
                  speed="5s"
                  className="flex w-full items-center justify-center"
                >
                  <CardHeader className="flex items-center justify-center">
                    <CardTitle className="flex gap-2 items-center">
                      {offering.icon}
                      <span className="whitespace-nowrap">{offering.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {offering.description}
                    </CardDescription>
                  </CardContent>
                </StarBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center flex-col gap-10 p-16 pb-0 flex-wrap offer" id="packages">
        <div className="flex w-full items-center justify-center flex-col gap-10 flex-wrap offer-content">
          <h2 className="text-4xl font-bold text-center">Our Packages</h2>
          <div className="grid grid-cols-1 min-[1000px]:grid-cols-3 gap-10 w-full">
            <motion.div initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }} animate={{ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }} transition={{ duration: 1, delay: 0, ease: [.7,-0.63,.24,.99]}} viewport={{ once: true }}>
              <Card className="flex pricing-tier w-full h-full justify-between">
                <div className="flex flex-col gap-6">
                <CardHeader className="flex">
                  <CardTitle className="flex gap-2 items-center">
                    <Leaf className="opacity-25" />
                    Basic Package
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Perfect for your lawn. This package includes:
                  </CardDescription>
                    <PackageFeature enabled={true} title="Mowing" />
                    <PackageFeature enabled={true} title="Edging" />
                    <PackageFeature enabled={true} title="Leaf Blowing" />
                </CardContent>
                </div>
                <CardFooter>
                  <Button className="flex w-full" variant={'outline'} asChild>
                    <Link href={'/book?package=basic'}>
                      Get a free quote
                      <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }} animate={{ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }} transition={{ duration: 1, delay: 0.15, ease: [.7,-0.63,.24,.99]}} viewport={{ once: true }}>
              <Card className="flex pricing-tier w-full h-full justify-between">
                <div className="flex flex-col gap-6">
                <CardHeader className="flex">
                  <CardTitle className="flex gap-2 items-center">
                    <Flower2 className="opacity-25" />
                    Greenery Garden Package
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Perfect for rejuvenating your gardens. This package includes:
                  </CardDescription>
                    <PackageFeature enabled={true} title="Weeding" />
                    <PackageFeature enabled={true} title="Hedging" />
                    <PackageFeature enabled={true} title="Trimming" />
                    <PackageFeature enabled={true} title="Mulching" />
                    <PackageFeature enabled={true} title="Planting" />
                </CardContent>
                </div>
                <CardFooter>
                  <Button className="flex w-full" variant={'outline'} asChild>
                    <Link href={'/book?package=greenery-garden'}>
                      Get a free quote
                      <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }} animate={{ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }} transition={{ duration: 1, delay: 0.3, ease: [.7,-0.63,.24,.99] }} viewport={{ once: true }}>
              <Card className="flex pricing-tier w-full h-full justify-between">
                <div className="flex flex-col gap-6">
                <CardHeader className="flex">
                  <CardTitle className="flex gap-2 items-center">
                    <Sparkles className="opacity-25" />
                    Lawn Rejuvenation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    A focused recovery package for tired lawns. This package includes:
                  </CardDescription>
                    <PackageFeature enabled={true} title="Lawn Aeration" />
                    <PackageFeature enabled={true} title="Seeding" />
                    <PackageFeature enabled={true} title="Fertilising" />
                </CardContent>
                </div>
                <CardFooter>
                  <Button className="flex w-full" variant={'outline'} asChild>
                    <Link href={'/book?package=lawn-rejuvenation'}>
                      Get a free quote
                      <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
          </div>

          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1,
              filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, ease: [.7,-0.63,.24,.99] }}
            viewport={{ once: true }}
            className="flex items-center justify-center flex-row gap-4 w-full my-10"
            >
            <div className="w-full h-px bg-border" />
            <span className="whitespace-nowrap">More Packages</span>
            <div className="w-full h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 gap-10 w-full">
            <motion.div 
              initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0px)',
                filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.4, ease: [.7,-0.63,.24,.99] }}
              viewport={{ once: true }}
              className="w-full">
              <Card className="flex pricing-tier w-full h-full justify-between">
                <div className="flex flex-col gap-6">
                <CardHeader className="flex">
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="opacity-25" />
                    Pressure Washing Package
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Professional pressure washing for everything from driveways and paths to roofs.
                  </CardDescription>
                </CardContent>
                </div>
                <CardFooter className="flex">
                    <Button className="flex w-full" variant={'outline'} asChild>
                      <Link href={"/book?package=pressure-washing"}>
                        Get a free quote
                        <ArrowRight />
                      </Link>
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0px)',
                filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.45, ease: [.7,-0.63,.24,.99] }}
              viewport={{ once: true }}
              className="w-full">
              <Card className="flex pricing-tier w-full h-full justify-between">
                <div className="flex flex-col gap-6">
                <CardHeader className="flex">
                  <CardTitle className="flex items-center gap-2">
                    <House className="opacity-25" />
                    Gutter Cleaning Roof Package
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Gutter cleaning for both roof gutters and ground gutters, plus roof cleaning.
                  </CardDescription>
                </CardContent>
                </div>
                <CardFooter className="flex">
                    <Button className="flex w-full" variant={'outline'} asChild>
                      <Link href={"/book?package=gutter-cleaning-roof"}>
                        Get a free quote
                        <ArrowRight />
                      </Link>
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>




          <motion.div 
            initial={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)',
              filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: [.7,-0.63,.24,.99] }}
            viewport={{ once: true }}
            className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-foreground/5 p-6 pb-4 mt-10 sm:p-10 lg:p-16"
            >
                                  <motion.div
                        ref={badgeRef}
                        className="flex items-center rounded-full px-3 py-1.5 bg-[#34623c]/10 overflow-hidden"
                        initial={{ width: 36 }}
                        animate={{ width: showText ? openWidth : 36 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        style={{ minWidth: 36, height: 36, justifyContent: showText ? "flex-start" : "center" }}
                    >
                        <div className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
                            <div className="h-2 w-2 bg-[#34623c] flex items-center justify-center rounded-full relative">
                                <div className="absolute h-2 w-2 bg-[#34623c] rounded-full blinker"></div>
                            </div>
                        </div>
                        {showText && (
                            <motion.span
                                initial={{ opacity: 0, marginLeft: 0 }}
                                animate={{ opacity: 1, marginLeft: 8 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                className="whitespace-nowrap text-[#34623c] font-semibold text-sm"
                            >
                                Available for work
                            </motion.span>
                        )}
                    </motion.div>
            <h3 className="max-w-[22rem] text-center text-3xl font-bold leading-tight sm:max-w-none sm:text-2xl">Ready to transform your lawn?</h3>
            <Button className="flex w-full max-w-[16rem] bg-[#34623c] text-white hover:bg-[#34623c] sm:w-auto sm:max-w-none" asChild>
              <Link href={'/book'}>
                Get a free quote
                <ArrowRight />
              </Link>
            </Button>
            <Badge className="mt-8 inline-flex w-full max-w-[18rem] items-start justify-center gap-2 whitespace-normal break-words text-center sm:w-auto sm:max-w-full sm:justify-start sm:text-left">
              <span className="min-w-0">Trusted by Northern Beaches Locals</span>
            </Badge>
          </motion.div>

        </div>
      </div>
    </main>
  )
}