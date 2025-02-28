import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import { GetStaticProps } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface HomeProps {
  siteMetadata: {
    title: string;
    description: string;
    buildTime: string;
  }
}

export default function Home({ siteMetadata }: HomeProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Layout>
        <Head>
          <title>{siteMetadata.title}</title>
          <meta name="description" content={siteMetadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="build-time" content={siteMetadata.buildTime} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <HeroSection />
          <ServicesSection />
          <ExpertiseSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  
  const siteMetadata = {
    title: 'Skill Fynd | Connecting Top Talent with Innovative Companies',
    description: 'Skill Fynd specializes in identifying and placing exceptional professionals who drive business success and innovation.',
    buildTime: new Date().toISOString(),
  };

  return {
    props: {
      siteMetadata
    },
    revalidate: 3600,
  };
};
