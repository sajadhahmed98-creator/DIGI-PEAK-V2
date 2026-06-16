"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SriLankaSEOContent() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-background border-t border-white/5">
      <div className="mx-auto max-w-4xl prose prose-invert prose-lg prose-headings:font-heading prose-a:text-accent-primary hover:prose-a:text-accent-secondary prose-a:transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Digital Marketing, SEO & Web Design Services Across Sri Lanka</h2>
          
          <p>
            In today's hyper-competitive business landscape, establishing a dominant digital footprint is no longer optional. As a leading <strong>digital marketing agency in Sri Lanka</strong>, Digipeak partners with forward-thinking enterprises, bold startups, and established brands to engineer explosive, sustainable growth. We are not just another vendor; we are your dedicated business growth agency, combining data-driven precision with world-class creative execution.
          </p>

          <p>
            Whether your headquarters are nestled in the bustling commercial capital of <strong>Colombo</strong>, the cultural heart of <strong>Kandy</strong>, or expanding industrial zones like <strong>Gampaha</strong> and <strong>Negombo</strong>, our tailored strategies ensure you connect with high-intent audiences. From optimizing local visibility in <strong>Nugegoda</strong> and <strong>Nittambuwa</strong> to scaling e-commerce operations in <strong>Jaffna</strong>, <strong>Matara</strong>, and <strong>Trincomalee</strong>, our reach spans the entire island. We actively serve businesses scaling in <strong>Ragama</strong>, <strong>Akurana</strong>, <strong>Kalutara</strong>, <strong>Beruwala</strong>, <strong>Wellawatte</strong>, <strong>Dehiwala</strong>, and <strong>Kollupitiya</strong>, offering unparalleled digital transformation frameworks.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">Comprehensive Web Development & Hosting</h3>
          <p>
            Your website is the foundational asset of your digital ecosystem. As a premium <Link href="/services/web-design">web design company in Sri Lanka</Link>, we build ultra-fast, highly secure, and visually stunning web applications using advanced tech stacks like Next.js and headless architectures. If you're looking for a specialized <Link href="/services/ecommerce">e-commerce development agency in Sri Lanka</Link>, we craft robust shopping experiences that drive conversions and streamline inventory management. Furthermore, our enterprise-grade <Link href="/services/hosting">website hosting in Sri Lanka</Link> ensures your platform remains resilient, offering 99.9% uptime and impenetrable security. We are proud to be the trusted hosting company for high-traffic corporate portals.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">Mastering Search Engine Optimization (SEO)</h3>
          <p>
            Visibility equals revenue. Recognized as a top-tier <Link href="/services/seo">SEO agency in Sri Lanka</Link>, we don't just chase vanity metrics; we target high-value commercial keywords that generate qualified leads. Our technical SEO architects restructure your website for optimal crawlability, while our content teams execute hyper-local optimization campaigns. When you partner with an expert SEO company like Digipeak, you secure long-term dominance on Google Search results, outranking competitors and capturing market share efficiently.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">Creative Branding, Photography & Videography</h3>
          <p>
            Perception dictates value. Our <Link href="/services/branding">creative agency in Sri Lanka</Link> develops cohesive brand identities that resonate deeply with your target demographic. To elevate your visual storytelling, we offer world-class <Link href="/services/photography">photography services in Sri Lanka</Link>, specializing in corporate photography, product shoots, and architectural capturing. Complementing this, our <Link href="/services/videography">videography services</Link> deliver cinematic corporate videography that captures attention and drives engagement across all digital touchpoints.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">Performance Marketing & Social Media</h3>
          <p>
            Generating predictable revenue requires agile, data-backed advertising. As a specialized <Link href="/services/digital-marketing">performance marketing agency</Link> and <Link href="/services/digital-marketing">Google Ads agency in Sri Lanka</Link>, we optimize every rupee of your ad spend to maximize Return on Ad Spend (ROAS). Simultaneously, our <Link href="/services/digital-marketing">social media marketing agency</Link> builds vibrant, loyal communities around your brand across platforms like Facebook, Instagram, LinkedIn, and TikTok, ensuring you remain top-of-mind.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6">Pioneering AI Solutions & Automation</h3>
          <p>
            The future belongs to the efficient. We are at the forefront as an innovative <Link href="/services/ai-solutions">AI agency in Sri Lanka</Link>. By integrating custom <strong>AI solutions</strong>, <strong>CRM automation</strong>, and comprehensive <strong>business automation</strong> pipelines, we help enterprises reduce operational bottlenecks and accelerate workflows. Combined with our proven <Link href="/services/lead-generation">lead generation services</Link>, we ensure your sales teams are constantly fed with high-quality, pre-qualified prospects.
          </p>

          <p className="mt-8 text-xl font-medium text-accent-primary">
            Ready to lead your industry? Explore our <Link href="/pricing">transparent pricing</Link>, view our <Link href="/portfolio">case studies</Link>, or <Link href="/contact">contact us today</Link> to architect your digital future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
