import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";
import { business, serviceCategories } from "../../data";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCategories.find(s => s.slug === slug);
  if (!service) notFound();
  return <main className="detail-page"><header><Link href="/"><ArrowLeft size={17}/> Back to Aabha</Link><a className="button gold" href="/#book">Book appointment</a></header><section className="detail-hero"><img src={service.image} alt={service.title}/><div><span>PREMIUM BEAUTY SERVICE</span><h1>{service.title}</h1><p>{service.desc}</p><div><small><Clock3 size={15}/>{service.duration}</small><strong>Starting from {service.price}</strong></div><a className="button gold" href="/#book">Book this service <ArrowRight size={16}/></a></div></section><section className="detail-content"><div><span>THE EXPERIENCE</span><h2>Considered care, beautiful results.</h2><p>Every appointment begins with a personal consultation so we can understand your preferences, lifestyle and desired result. Our experts recommend the right techniques and aftercare for you.</p><h3>What is included</h3><ul>{service.items.map(i => <li key={i}><Check size={16}/>{i}</li>)}</ul></div><aside><h3>Good to know</h3><p><b>Suitable for</b><br/>Clients seeking expert-led, personalised beauty care.</p><p><b>Duration</b><br/>{service.duration}</p><p><b>Starting price</b><br/>{service.price}</p><p>Final time and price are confirmed after consultation.</p><a href={`https://wa.me/977${business.whatsapp}`}>Ask on WhatsApp <ArrowRight size={15}/></a></aside></section></main>;
}
