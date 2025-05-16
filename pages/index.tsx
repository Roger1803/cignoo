import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const languages = {
  en: {
    welcome: "Welcome to Cignoo International Trade Co., Ltd.",
    subtitle: "Your Trusted Manufacturer of Outdoor Covers and Travel Solutions",
    aboutTitle: "About Us",
    aboutContent: "Cignoo International Trade Co., Ltd. specializes in the production and export of premium automotive covers, roof bags, and motorcycle protection products. We are dedicated to quality, reliability, and global service.",
    productsTitle: "Our Products",
    newsTitle: "Latest News",
    contactTitle: "Contact Us",
    contactSuccess: name => `Thanks ${name}, we will contact you soon.`,
  },
  zh: {
    welcome: "欢迎来到辛诺国际贸易有限公司",
    subtitle: "您值得信赖的户外车罩和旅行解决方案制造商",
    aboutTitle: "关于我们",
    aboutContent: "辛诺国际贸易有限公司专注于高品质汽车罩、车顶包及摩托车保护产品的生产与出口。我们致力于质量、可靠性与全球服务。",
    productsTitle: "我们的产品",
    newsTitle: "最新动态",
    contactTitle: "联系我们",
    contactSuccess: name => `谢谢你，${name}，我们会尽快联系您。`,
  }
};

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [lang, setLang] = useState('en');

  const t = languages[lang];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.contactSuccess(formData.name));
  };

  return (
    <div className="p-4 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">{t.welcome}</h1>
        <p className="text-lg mt-2">{t.subtitle}</p>
        <nav className="mt-4 space-x-4 text-blue-600">
          <a href="#about">{t.aboutTitle}</a>
          <a href="#products">{t.productsTitle}</a>
          <a href="#news">{t.newsTitle}</a>
          <a href="#contact">{t.contactTitle}</a>
          <button className="ml-4 text-sm text-gray-500" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </nav>
      </header>

      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-bold">{t.aboutTitle}</h2>
        <p>{t.aboutContent}</p>
        <img src="/images/factory.jpg" alt="Our Factory" className="rounded-xl shadow" />
      </section>

      <section id="products" className="space-y-6">
        <h2 className="text-2xl font-bold">{t.productsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Heavy-Duty Car Covers</h3>
              <p>Durable, weatherproof covers to protect your car in any climate. <a className="text-blue-600" href="#">Learn More</a></p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Roof Storage Bags</h3>
              <p>Spacious and waterproof, ideal for road trips and extended travel. <a className="text-blue-600" href="#">Learn More</a></p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Motorcycle Protection Covers</h3>
              <p>Keep your motorcycle clean, safe, and secure from the elements. <a className="text-blue-600" href="#">Learn More</a></p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="news" className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">{t.newsTitle}</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🚚 March 2025: Attended SEMA Automotive Show in Las Vegas.</li>
          <li>🛍️ January 2025: Launched new anti-slip roof bag with reinforced seams.</li>
          <li>🌍 December 2024: Reached 50+ countries with our outdoor products.</li>
        </ul>
      </section>

      <section id="contact" className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <Textarea name="message" placeholder="Your Message" onChange={handleChange} required />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; 2025 Cignoo International Trade Co., Ltd. All rights reserved.
      </footer>
    </div>
  );
}
