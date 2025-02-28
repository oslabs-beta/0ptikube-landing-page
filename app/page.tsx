'use client';

import { Button } from '@/components/ui/button';
import { Orbitron } from 'next/font/google';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/logo.webp';
import Richard from '../assets/images/richard.jpg';
import Oliver from '../assets/images/oliver.jpg';
import Jason from '../assets/images/jason.jpg';
import Senay from '../assets/images/senay.jpg';
import Optimize from '../assets/images/optimize-page.png';
import { redirect } from 'next/navigation';
import { Main } from 'next/document';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });

export default function Home() {
  return (
    <>
      <div className='min-h-screen bg-[#0a192f] text-white'>
        {/* Navbar */}
        <nav className='sticky top-0 z-10 bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#1e3a8a]'>
          <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Image
                src={Logo}
                alt='Logo'
                width={40}
                height={40}
                // className="rounded-md"
              />
              <span className={`text-xl font-bold ${orbitron.className}`}>
                0PTIKUBE
              </span>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
              <Link
                href='#features'
                className='hover:text-blue-300 transition-colors'
              >
                Features
              </Link>
              <Link
                href='#demo'
                className='hover:text-blue-300 transition-colors'
              >
                Demo
              </Link>
              <Link
                href='#team'
                className='hover:text-blue-300 transition-colors'
              >
                Team
              </Link>
              <Link
                // href="#contact"
                href='#contact'
                className='hover:text-blue-300 transition-colors'
              >
                Contact
              </Link>
            </div>
            <Button
              onClick={() =>
                redirect('https://github.com/oslabs-beta/0ptiKube')
              }
              className='bg-blue-600 hover:bg-blue-700'
            >
              View on GitHub
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className='py-20 md:py-32'>
          <div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Visualize Your Kubernetes Infrastructure
              </h1>
              <p className='text-lg text-blue-200/80'>
                A powerful, intuitive visualization tool that helps you
                understand and manage your Kubernetes clusters with ease.
              </p>
              <div className='flex flex-wrap gap-4'>
                {/* NOTE: Include video link */}
                <Button
                  onClick={() => redirect('#demo')}
                  className='bg-blue-600 hover:bg-blue-700'
                >
                  View Demo
                </Button>
                <Button
                  onClick={() =>
                    redirect(
                      'https://github.com/oslabs-beta/0ptiKube/blob/main/README.md'
                    )
                  }
                  variant='outline'
                  className='border-blue-400 text-blue-400 hover:bg-blue-900/30'
                >
                  Documentation
                </Button>
              </div>
            </div>
            <div className='relative rounded-lg overflow-hidden border-2 border-[#1e3a8a] shadow-2xl shadow-blue-900/20'>
              <Image
                src={Optimize}
                alt='Kubernetes Visualizer Dashboard'
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='features' className='py-20 bg-[#0d2240]'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
              Key Features
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Real-time Monitoring',
                  description:
                    'Monitor your Kubernetes cluster in real-time with our custom dashboard.',
                },
                {
                  title: 'Display Modes',
                  description:
                    'Visualize resource usage of each pod or get a cluster overview',
                },
                {
                  title: 'Resource Optimization',
                  description:
                    'Identify resource bottlenecks and optimize your infrastructure for better performance using AI.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='bg-[#0a192f] p-6 rounded-lg border border-[#1e3a8a]'
                >
                  <h3 className='text-xl font-semibold mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-blue-200/70'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id='demo' className='py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              See It In Action
            </h2>
            <p className='text-blue-200/80 max-w-3xl mx-auto mb-12'>
              Watch how 0ptikube can transform the way you manage and understand
              your Kubernetes infrastructure.
            </p>
            <div className='relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-[#1e3a8a] shadow-2xl shadow-blue-900/20'>
              <video width={1280} height={720} loop={true} controls={true}>
                <source src='/videos/0ptikube.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id='team' className='py-20 bg-[#0d2240]'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
              Meet Our Team
            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {[
                {
                  name: 'Jason Stuhmer',
                  mail: 'jason@0ptikube.dev',
                  image: Jason,
                  github: 'https://github.com/NotAStuhmer',
                  linkedin: 'https://www.linkedin.com/in/jason-stuhmer/',
                },
                {
                  name: 'Oliver Fajardo',
                  mail: 'oliver@0ptikube.dev',
                  image: Oliver,
                  github: 'https://github.com/oliverafajardo',
                  linkedin: 'https://www.linkedin.com/in/oliverafajardoucb/',
                },
                {
                  name: 'Richard Rivera',
                  mail: 'richard@0ptikube.dev',
                  image: Richard,
                  github: 'https://github.com/RichardRiveraRoman',
                  linkedin: 'https://www.linkedin.com/in/richard-rivera-r/',
                },
                {
                  name: 'Senay Yakut',
                  mail: 'senay@0ptikube.dev',
                  image: Senay,
                  github: 'https://github.com/priyap',
                  linkedin: 'https://www.linkedin.com/in/senaykt/',
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className='bg-[#0a192f] rounded-lg overflow-hidden border border-[#1e3a8a] transition-transform hover:scale-105'
                >
                  <div className='aspect-square relative'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold'>{member.name}</h3>
                    <p className='text-blue-300 mb-4'>
                      {/* <Mail className="inline-block size-6 pr-1" /> */}
                      {member.mail}
                    </p>
                    <div className='flex space-x-4'>
                      <Link
                        href={member.github}
                        className='text-white hover:text-blue-300 transition-colors'
                      >
                        <Github className='h-6 w-6' />
                        <span className='sr-only'>GitHub</span>
                      </Link>
                      <Link
                        href={member.linkedin}
                        className='text-white hover:text-blue-300 transition-colors'
                      >
                        <Linkedin className='h-6 w-6' />
                        <span className='sr-only'>LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='py-20'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Get In Touch
            </h2>
            <p className='text-blue-200/80 max-w-2xl mx-auto mb-8'>
              Interested in learning more about 0ptikube? Have questions or
              feedback? We&apos;d love to hear from you!
            </p>
            <Button
              onClick={() => redirect('mailto:info@0ptikube.dev')}
              className='bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg'
            >
              Contact Us
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-[#071528] py-12'>
          <div className='container mx-auto px-4'>
            <div className='mt-8 pt-8 border-t border-[#1e3a8a] text-center text-sm text-blue-200/60'>
              <p>© {new Date().getFullYear()} 0ptikube. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
