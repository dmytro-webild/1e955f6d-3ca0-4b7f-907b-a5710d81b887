"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Layers, LifeBuoy, MessageCircle, Search, Smartphone, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Portfolio",
          id: "#portfolio",
        },
        {
          name: "Process",
          id: "#process",
        },
        {
          name: "About",
          id: "#why-us",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Nexora Studio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Websites That Turn Visitors Into Customers"
      description="We design and build premium websites that help businesses grow faster, generate more leads and increase revenue. Experience the Nexora Studio difference."
      buttons={[
        {
          text: "Book Free Strategy Call",
          href: "#contact",
        },
        {
          text: "View Our Work",
          href: "#portfolio",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-pointing-important-papers-cork-board_329181-15333.jpg",
          imageAlt: "Fast Delivery and Efficient Workflow",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nutritional-counter-app-composition_23-2149880600.jpg",
          imageAlt: "Mobile Optimized and Responsive Design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/macro-eye-iris_23-2151618546.jpg",
          imageAlt: "SEO Ready for High Visibility",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/copy-space-geometric-paper-objects_23-2148547793.jpg",
          imageAlt: "Conversion Focused Strategies",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/geometric-abstract-phone-wallpaper-technology-concept-connecting-dots-design_53876-160212.jpg",
          imageAlt: "Premium Digital Agency Solutions",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-photographer-editing-photos_23-2148565538.jpg",
          imageAlt: "Business Growth and Success",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Google",
        "Microsoft",
        "Amazon",
        "Nvidia",
        "Adobe",
        "Salesforce",
        "Shopify",
      ]}
      title="Trusted by Industry Leaders"
      description="Our expertise drives success for renowned brands and innovative startups alike."
      showCard={false}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Website Design",
          description: "Crafting stunning, conversion-focused websites that reflect your brand's excellence.",
          imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038907.jpg",
        },
        {
          title: "Landing Pages",
          description: "Designing high-performing landing pages optimized to capture leads and drive action.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884888.jpg",
        },
        {
          title: "No-Code Development",
          description: "Building powerful web applications and tools rapidly, without writing a single line of code.",
          imageSrc: "http://img.b2bpic.net/free-photo/call-center-agents-track-shipments-office-using-ai-chatbot-help_482257-126758.jpg",
        },
        {
          title: "AI Automation",
          description: "Implementing intelligent AI solutions to streamline operations and boost efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-ai-machine-learning-algorithms_482257-118302.jpg",
        },
        {
          title: "Website Redesign",
          description: "Transforming outdated sites into modern, high-converting digital experiences.",
          imageSrc: "http://img.b2bpic.net/free-photo/creative-3d-render-design-web-development-banner-marketing-material-business-presentation-online-advertising_460848-9669.jpg",
        },
      ]}
      title="Our World-Class Services"
      description="Empowering your business with cutting-edge digital solutions tailored for growth."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="Why Choose Nexora Studio?"
      description="Partner with us for unparalleled results and a seamless experience that prioritizes your business growth."
      bulletPoints={[
        {
          title: "Conversion Focused",
          description: "Every design decision is aimed at turning visitors into valuable customers.",
          icon: TrendingUp,
        },
        {
          title: "Modern Design",
          description: "Leveraging the latest design trends for an Apple-level clean and premium aesthetic.",
          icon: Layers,
        },
        {
          title: "Fast Communication",
          description: "Enjoy transparent and prompt communication throughout your project's lifecycle.",
          icon: MessageCircle,
        },
        {
          title: "Mobile First",
          description: "Ensuring impeccable performance and user experience on all devices.",
          icon: Smartphone,
        },
        {
          title: "SEO Friendly",
          description: "Building sites optimized from the ground up to rank higher and attract organic traffic.",
          icon: Search,
        },
        {
          title: "Ongoing Support",
          description: "Our partnership extends beyond launch, with continuous support and optimization.",
          icon: LifeBuoy,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/worker-drawing-graph_1134-299.jpg"
      imageAlt="Abstract graphic symbolizing conversion focus and growth."
      mediaAnimation="slide-up"
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "step-1",
          value: "Step 1",
          title: "Discovery",
          description: "In-depth understanding of your vision, goals, and target audience.",
          imageSrc: "http://img.b2bpic.net/free-photo/cross-bulb_1134-362.jpg",
        },
        {
          id: "step-2",
          value: "Step 2",
          title: "Strategy",
          description: "Developing a tailored plan to achieve your objectives and maximize impact.",
          imageSrc: "http://img.b2bpic.net/free-photo/individuality-concept-light-bulb_23-2149125669.jpg",
        },
        {
          id: "step-3",
          value: "Step 3",
          title: "Design",
          description: "Crafting intuitive and aesthetically pleasing interfaces that convert.",
          imageSrc: "http://img.b2bpic.net/free-photo/tangled-wires-forming-thoughtful-man-standing_1194-640156.jpg",
        },
        {
          id: "step-4",
          value: "Step 4",
          title: "Development",
          description: "Bringing designs to life with robust, scalable, and high-performance code.",
          imageSrc: "http://img.b2bpic.net/free-photo/blackboard-with-business-strategy_1134-79.jpg",
        },
        {
          id: "step-5",
          value: "Step 5",
          title: "Launch",
          description: "Deploying your project with precision and ensuring a smooth, successful rollout.",
          imageSrc: "http://img.b2bpic.net/free-photo/boy-pretends-be-superhero-is-playing-as-astronaut-draw-concept_1150-19566.jpg",
        },
      ]}
      title="Our Proven Process"
      description="A streamlined approach to deliver exceptional digital experiences and ensure your project's success."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "case-study-1",
          brand: "E-commerce",
          name: "Luxury Retailer Website",
          price: "50% Conversion Boost",
          rating: 5,
          reviewCount: "Fashion Industry",
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201876.jpg",
        },
        {
          id: "case-study-2",
          brand: "SaaS Platform",
          name: "AI-Powered Analytics Dashboard",
          price: "35% User Growth",
          rating: 5,
          reviewCount: "Tech Industry",
          imageSrc: "http://img.b2bpic.net/free-photo/young-employee-yawning-feeling-sleepy-desk-working-financial-business-report-office-exhausted-startup-worker-planning-investment-project-feeling-sleepy-night-tripod-shot_482257-63113.jpg",
        },
        {
          id: "case-study-3",
          brand: "Digital Agency",
          name: "Next-Gen Agency Website",
          price: "40% Lead Increase",
          rating: 5,
          reviewCount: "Marketing Industry",
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-coworkers-analyzing-business-charts-infographics-data-laptop-software-people-doing-teamwork-collaboration-create-paper-reviews-professional-report-close-up_482257-48646.jpg",
        },
        {
          id: "case-study-4",
          brand: "Local Business",
          name: "Bespoke Local Service Site",
          price: "25% Engagement Lift",
          rating: 5,
          reviewCount: "Service Industry",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-positive-happy-young-caucasian-female-artist-smiling-broadly-while-working-painting-sketches-workshop-painting-stuff_273609-346.jpg",
        },
        {
          id: "case-study-5",
          brand: "Coaching",
          name: "High-Impact Coaching Platform",
          price: "60% Bookings Increase",
          rating: 5,
          reviewCount: "Education Sector",
          imageSrc: "http://img.b2bpic.net/free-vector/internship-job-landing-page_23-2148731992.jpg",
        },
        {
          id: "case-study-6",
          brand: "AI Automation",
          name: "Automated Workflow System",
          price: "20% Efficiency Gain",
          rating: 5,
          reviewCount: "Operations Tech",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-data-center-admin-doing-checkup-using-machine-learning-prolong-hardware-life-span_482257-136276.jpg",
        },
      ]}
      title="Our Premium Work"
      description="Showcasing transformative digital experiences and measurable results that define our expertise."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO",
          company: "GrowthCorp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
          videoAriaLabel: "Testimonial from Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Founder",
          company: "InnovateFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-business-woman_158595-4755.jpg",
          videoAriaLabel: "Testimonial from Michael Chen",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Brand Owner",
          company: "ModaEcom",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-businesswoman-strict-clothes-black-jacket-using-her-laptop-holding-card-light-white-surface_140725-64271.jpg",
          videoAriaLabel: "Testimonial from Emily Rodriguez",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Marketing Director",
          company: "DigitalSphere",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-grey-haired-elderly-man-dressed-formal-suit_273609-5564.jpg",
          videoAriaLabel: "Testimonial from David Kim",
        },
        {
          id: "5",
          name: "Jessica Lee",
          role: "Business Coach",
          company: "AscendCoaching",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-business-man-with-glasses_23-2148446242.jpg",
          videoAriaLabel: "Testimonial from Jessica Lee",
        },
      ]}
      kpiItems={[
        {
          value: "200%+",
          label: "Average ROI",
        },
        {
          value: "98%",
          label: "Client Satisfaction",
        },
        {
          value: "100%",
          label: "Project Completion",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from businesses thriving with Nexora Studio's premium digital solutions."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How long does a typical website project take?",
          content: "Project timelines vary based on complexity and scope. A standard landing page might take 2-4 weeks, while a comprehensive e-commerce platform could take 8-12 weeks. We provide a detailed timeline after our discovery call.",
        },
        {
          id: "q2",
          title: "What are your pricing models?",
          content: "We offer custom project-based pricing tailored to your specific needs. We also have retainer options for ongoing support and development. Contact us for a personalized quote.",
        },
        {
          id: "q3",
          title: "Do you offer post-launch support and maintenance?",
          content: "Yes, we provide various support packages, including maintenance, updates, security monitoring, and ongoing optimization to ensure your website remains at peak performance.",
        },
        {
          id: "q4",
          title: "Can you integrate with existing business tools?",
          content: "Absolutely. We specialize in integrating websites and applications with a wide range of third-party tools, including CRM, ERP, marketing automation, and payment gateways.",
        },
        {
          id: "q5",
          title: "What is 'AI Automation' and how can it help my business?",
          content: "AI Automation involves using artificial intelligence to automate repetitive tasks, analyze data, and enhance decision-making. It can boost efficiency, reduce costs, and provide valuable insights for growth.",
        },
        {
          id: "q6",
          title: "What if I don't have existing content or images?",
          content: "No problem! We offer content creation, copywriting, and image sourcing services to ensure your website is fully equipped with high-quality, engaging material.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services, process, and partnership."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal",
      }}
      tag="Ready to Start?"
      title="Ready To Grow Your Business Online?"
      description="Let's build a website that works as your best salesperson. Book a free consultation to discuss your vision."
      inputPlaceholder="Enter your email"
      buttonText="Book Free Consultation"
      termsText="By clicking 'Book Free Consultation' you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Website Design",
              href: "#services",
            },
            {
              label: "Landing Pages",
              href: "#services",
            },
            {
              label: "No-Code Development",
              href: "#services",
            },
            {
              label: "AI Automation",
              href: "#services",
            },
            {
              label: "Website Redesign",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#why-us",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
            {
              label: "Process",
              href: "#process",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/nexorastudio",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/nexorastudio",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/nexorastudio",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Nexora Studio. All rights reserved."
      bottomRightText="Crafted with precision by Nexora."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
