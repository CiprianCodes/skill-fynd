import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Layout>
        <Head>
          <title>Elite Fynd | Connecting Top Talent with Innovative Companies</title>
          <meta name="description" content="Elite Fynd specializes in identifying and placing exceptional professionals who drive business success and innovation." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <HeroSection />
        <ServicesSection />
        <ExpertiseSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </div>
  );
}
