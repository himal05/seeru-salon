"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Facebook, Flower2, Gem, GraduationCap, Hand, Heart, Instagram, Leaf, MapPin, Menu, MessageCircle, Phone, Play, Scissors, ShieldCheck, Sparkles, Star, UserRoundCheck, WandSparkles, X, Youtube } from "lucide-react";
import { business, courses, faqs, images, locations, priceMenu, serviceCategories, testimonials } from "./data";

const gallery = [
  ["Hair", "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80"],
  ["Makeup", "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"],
  ["Bridal", "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80"],
  ["Nails", "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=80"],
  ["Salon", "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80"],
  ["Skin", "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80"],
];

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = { Sparkles, Scissors, Gem, Hand, Flower2, Leaf, WandSparkles };

function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-head"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function BookingForm() {
  const [done, setDone] = useState(false);
  return <form className="booking-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
    {done ? <div className="success"><Check size={28}/><div><strong>Appointment request received.</strong><p>Thank you! Our team will contact you shortly to confirm your booking.</p></div></div> : <>
      <label><span>Full name</span><input required placeholder="Your full name" /></label>
      <label><span>Phone number</span><input required type="tel" placeholder="98XXXXXXXX" /></label>
      <label><span>Email address</span><input type="email" placeholder="you@example.com" /></label>
      <label><span>Select service</span><select required defaultValue=""><option value="" disabled>Choose a service</option>{serviceCategories.map(s => <option key={s.slug}>{s.title}</option>)}</select></label>
      <label><span>Select branch</span><select><option>Choose a branch</option>{locations.map(l => <option key={l.name}>{l.name}</option>)}</select></label>
      <label><span>Preferred date</span><input required type="date" /></label>
      <label><span>Preferred time</span><select><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
      <label className="full"><span>Special request</span><textarea placeholder="Tell us anything that will help us prepare" /></label>
      <button className="button dark full" type="submit">Confirm appointment <ArrowRight size={17}/></button>
    </>}
  </form>;
}

export default function SalonSite() {
  const [menu, setMenu] = useState(false);
  const [priceTab, setPriceTab] = useState("Hair");
  const [galleryTab, setGalleryTab] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [popup, setPopup] = useState(false);
  const filteredPrices = useMemo(() => priceMenu.filter(p => p.category === priceTab), [priceTab]);
  const filteredGallery = galleryTab === "All" ? gallery : gallery.filter(g => g[0] === galleryTab);
  useEffect(() => { const t = setTimeout(() => setPopup(true), 3500); return () => clearTimeout(t); }, []);

  const nav = [["About", "#about"], ["Services", "#services"], ["Bridal", "#bridal"], ["Gallery", "#gallery"], ["Academy", "#academy"], ["Locations", "#locations"], ["Offers", "#offers"], ["Beauty Tips", "#journal"], ["Contact", "#contact"]];
  return <main>
    <div className="topbar"><div><span><MapPin size={13}/> {business.address}</span><a href={`tel:${business.phone}`}><Phone size={13}/> {business.phone}</a><a href={`https://wa.me/977${business.whatsapp}`}><MessageCircle size={13}/> WhatsApp</a><span><Clock3 size={13}/> Open 8 hrs</span></div><div className="socials"><Instagram size={14}/><Facebook size={14}/><Youtube size={14}/></div></div>
    <header className="nav"><a className="brand" href="#home"><span>AB</span><div><strong>{business.name}</strong><small>BEAUTY SALON · ACADEMY</small></div></a><nav>{nav.map(n => <a key={n[0]} href={n[1]}>{n[0]}</a>)}</nav><a className="button gold nav-cta" href="#book">Book appointment</a><button className="menu" aria-label="Open navigation" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></header>
    {menu && <div className="mobile-nav">{nav.map(n => <a key={n[0]} onClick={() => setMenu(false)} href={n[1]}>{n[0]} <ArrowRight size={15}/></a>)}<a className="button gold" href="#book">Book appointment</a></div>}

    <section className="hero" id="home"><img src={images.hero} alt="Professional beauty salon service"/><div className="hero-shade"/><div className="hero-content"><span className="kicker">{business.eyebrow}</span><h1>Beauty, designed<br/><em>around you.</em></h1><p>Professional hair, makeup, skin, nail and bridal services designed to help you look beautiful and feel confident.</p><div className="actions"><a className="button gold" href="#book">Book appointment</a><a className="button glass" href="#services">View services</a></div><div className="hero-trust"><span><Star size={15} fill="currentColor"/> 4.9 client rating</span><span><ShieldCheck size={16}/> Hygienic & professional</span></div></div><div className="hero-card"><small>YOUR BEAUTY RITUAL</small><strong>Modern artistry.<br/>Genuine care.</strong><p>One unhurried consultation at a time.</p><a href="#about">Our approach <ArrowRight size={16}/></a></div></section>

    <section className="offer-strip" id="offers"><span className="pill">SPECIAL OFFER</span><div><h3>20% off selected beauty services</h3><p>Limited-time self-care, made beautifully simple.</p></div><div className="count"><strong>12</strong><small>days left</small></div><a className="text-link" href="#book">Claim offer <ArrowRight size={16}/></a></section>

    <section className="about section" id="about"><div className="about-image"><img src={images.about} alt="Modern beauty salon interior"/><div className="experience"><strong>10+</strong><span>Years of<br/>beautiful work</span></div></div><div className="about-copy"><SectionHead eyebrow="WELCOME TO AABHA" title="Beauty is more than a service. It is an experience."/><p>At Aabha by Sirjana, professional stylists, makeup artists and beauty experts combine modern techniques with personalised care to create looks designed especially for you.</p><div className="ticks">{["Professional beauty experts", "Premium products", "Impeccable hygiene", "Personal consultation", "Modern equipment", "A calm atmosphere"].map(x => <span key={x}><Check size={15}/>{x}</span>)}</div><a href="#story" className="button outline">Discover our story <ArrowRight size={16}/></a></div></section>

    <section className="section services" id="services"><SectionHead eyebrow="OUR EXPERTISE" title="Everything your beauty ritual needs" copy="Discover thoughtful services, led by consultation and tailored to you."/><div className="service-grid">{serviceCategories.map((s) => { const Icon = iconMap[s.icon] || Sparkles; return <article className="service-card" key={s.slug}><div className="service-img"><img loading="lazy" src={s.image} alt={s.title}/><span><Icon size={18}/></span></div><div className="service-body"><div className="service-title"><h3>{s.title}</h3><small>from {s.price}</small></div><p>{s.desc}</p><div className="service-meta"><Clock3 size={14}/>{s.duration}</div><details><summary>Explore services <ChevronDown size={15}/></summary><ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul></details><div className="card-actions"><a href={`/services/${s.slug}`}>Learn more</a><a href="#book">Book now <ArrowRight size={14}/></a></div></div></article>})}</div></section>

    <section className="price-section section"><div className="price-intro"><SectionHead eyebrow="SERVICE MENU" title="Transparent care, tailored to you" copy="Prices are placeholders and may vary after your personal consultation."/><a href="#book" className="button dark">Plan your visit</a></div><div className="tabs" role="tablist">{[...new Set(priceMenu.map(p => p.category))].map(t => <button key={t} className={priceTab === t ? "active" : ""} onClick={() => setPriceTab(t)}>{t}</button>)}</div><div className="price-list">{filteredPrices.map(p => <div className="price-row" key={p.name}><div><div className="price-name"><h3>{p.name}</h3>{p.badge && <span>{p.badge}</span>}</div><p>{p.desc}</p></div><div className="price-time"><Clock3 size={14}/>{p.duration}</div><strong>{p.price}</strong><a href="#book">Book <ArrowRight size={15}/></a></div>)}</div></section>

    <section className="why section"><SectionHead eyebrow="THE AABHA STANDARD" title="Care you can see. Quality you can feel."/><div className="benefits">{[[UserRoundCheck,"Professional experts"],[Sparkles,"Premium products"],[WandSparkles,"Modern equipment"],[Heart,"Personal consultation"],[ShieldCheck,"Clean & hygienic"],[Leaf,"Relaxing experience"]].map(([I, t],i) => {const Ic=I as typeof Sparkles; return <div key={String(t)}><span>0{i+1}</span><Ic size={24}/><h3>{String(t)}</h3><p>Every detail is designed around your comfort, confidence and result.</p></div>})}</div></section>

    <section className="bridal" id="bridal"><div className="bridal-image"><img loading="lazy" src={images.bridal} alt="Elegant bridal makeup experience"/></div><div className="bridal-copy"><span className="kicker">THE BRIDAL EXPERIENCE</span><h2>Your perfect bridal look starts here.</h2><p>From skin preparation and a considered makeup trial to wedding-day artistry, hair and dressing support, we make every step feel calm and beautifully personal.</p><ul>{["One-to-one bridal consultation", "Skin prep and makeup trial", "Wedding and reception looks", "On-location options available"].map(i => <li key={i}><Check size={16}/>{i}</li>)}</ul><a href="#packages" className="button gold">Explore bridal packages</a></div></section>

    <section className="section packages" id="packages"><SectionHead eyebrow="BRIDAL COLLECTIONS" title="A package for your celebration"/><div className="package-grid">{[
      ["Essential Bride","[PRICE]",["Bridal makeup","Hairstyle","Lashes"]],
      ["Signature Bride","[PRICE]",["Bridal makeup","Premium hairstyle","Lashes","Nail care","Pre-bridal consultation"]],
      ["Luxury Bride","[PRICE]",["Complete bridal makeup","Premium hairstyle","Nail service","Skin preparation","Makeup trial","Premium lashes","Dressing support","Touch-up kit"]]
    ].map((p,i) => <article className={i===1 ? "featured" : ""} key={p[0] as string}>{i===1 && <span className="popular">MOST POPULAR</span>}<small>COLLECTION 0{i+1}</small><h3>{p[0] as string}</h3><strong>Rs. {p[1] as string}</strong><ul>{(p[2] as string[]).map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul><a className="button outline" href="#book">Enquire now</a></article>)}</div></section>

    <section className="gallery-section section" id="gallery"><SectionHead eyebrow="RECENT WORK" title="The Aabha edit" copy="Real artistry, beautiful detail and moments worth remembering."/><div className="gallery-tabs">{["All","Hair","Makeup","Bridal","Nails","Salon","Skin"].map(t => <button className={galleryTab===t?"active":""} onClick={()=>setGalleryTab(t)} key={t}>{t}</button>)}</div><div className="gallery-grid">{filteredGallery.map(([cat,src],i) => <button key={src} className={`gallery-item g${i}`} onClick={()=>setLightbox(src)}><img loading="lazy" src={src} alt={`${cat} beauty work`}/><span>{cat}<ArrowRight size={16}/></span></button>)}</div></section>

    <section className="video section"><div className="video-cover"><img loading="lazy" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80" alt="Beauty salon transformation video preview"/><button aria-label="Play transformation video"><Play fill="currentColor"/></button></div><div><span className="kicker">BEHIND THE BEAUTY</span><h2>See our transformations come to life.</h2><p>Hair makeovers, bridal moments and the craft behind every finished look.</p><a href={business.socials.youtube}>Watch our stories <ArrowRight size={16}/></a></div></section>

    <section className="academy section" id="academy"><div className="academy-head"><SectionHead eyebrow="AABHA ACADEMY" title="Turn your passion for beauty into a career" copy="Practical, supportive education shaped by working salon professionals."/><div className="academy-badge"><GraduationCap/><span><strong>Career-ready</strong> courses with certificate availability</span></div></div><div className="course-grid">{courses.map((c,i) => <article key={c[0]}><span>0{i+1}</span><GraduationCap size={23}/><h3>{c[0]}</h3><p>Technique, hands-on practice and professional salon standards.</p><div><small>{c[1]}</small><small>{c[2]}</small></div><a href="#contact">Course enquiry <ArrowRight size={15}/></a></article>)}</div><a href="#contact" className="button dark centered">View all courses</a></section>

    <section className="testimonials section"><SectionHead eyebrow="CLIENT STORIES" title="Loved in every detail"/><div className="testimonial-wrap"><div className="quote-mark">“</div><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={17} fill="currentColor"/>)}</div><blockquote>{testimonials[testimonial].quote}</blockquote><div><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].service}</span></div><div className="dots">{testimonials.map((_,i)=><button aria-label={`Show testimonial ${i+1}`} onClick={()=>setTestimonial(i)} className={testimonial===i?"active":""} key={i}/>)}</div></div><div className="google-card"><div><span className="google-g">G</span><div><small>GOOGLE REVIEWS</small><strong>4.9 <span>★★★★★</span></strong><p>Based on [250+] client reviews</p></div></div><a href="#">View Google reviews <ArrowRight size={15}/></a></div></section>

    <section className="locations section" id="locations"><SectionHead eyebrow="VISIT US" title="Your nearest Aabha studio" copy="Branch details below are ready for your final addresses and contact numbers."/><div className="location-layout"><div className="location-list">{locations.map((l,i)=><article key={l.name}><span>0{i+1}</span><div><h3>{l.name}</h3><p><MapPin size={15}/>{l.address}</p><p><Clock3 size={15}/>{l.hours}</p><div><a href={`tel:${l.phone}`}>Call branch</a><a href="#book">Book appointment</a></div></div></article>)}</div><div className="map-placeholder"><div className="map-lines"/><MapPin size={34}/><strong>Interactive map ready</strong><p>Add your final Google Maps links in the business data file.</p><button className="button dark">Get directions</button></div></div></section>

    <section className="journal section" id="journal"><SectionHead eyebrow="THE BEAUTY JOURNAL" title="A little expert advice goes a long way"/><div className="journal-grid">{[
      ["HAIR CARE","How to keep your hair healthy after colouring", "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80"],
      ["BRIDAL TIPS","Five things to do before your bridal makeup", "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=900&q=80"],
      ["SKIN CARE","How often should you get a facial?", "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80"]
    ].map(a=><article key={a[1]}><img loading="lazy" src={a[2]} alt=""/><span>{a[0]}</span><h3>{a[1]}</h3><a href="#">Read article <ArrowRight size={15}/></a></article>)}</div></section>

    <section className="booking section" id="book"><div className="booking-copy"><span className="kicker">YOUR VISIT</span><h2>Ready for your next beautiful moment?</h2><p>Request an appointment in under a minute. Our team will call or message to confirm the details.</p><div><a href={`https://wa.me/977${business.whatsapp}`}><MessageCircle/>WhatsApp booking<span>{business.whatsapp}</span></a><a href={`tel:${business.phone}`}><Phone/>Call to book<span>{business.phone}</span></a></div></div><BookingForm/></section>

    <section className="faq section"><SectionHead eyebrow="GOOD TO KNOW" title="Questions, answered"/><div className="faq-list">{faqs.map((f,i)=><details key={f[0]} open={i===0}><summary><span>0{i+1}</span>{f[0]}<ChevronDown size={19}/></summary><p>{f[1]}</p></details>)}</div></section>

    <footer id="contact"><div className="footer-top"><div className="footer-brand"><a className="brand light" href="#home"><span>AB</span><div><strong>{business.name}</strong><small>BEAUTY SALON · ACADEMY</small></div></a><p>Modern beauty artistry, personal care and professional education in Nepal.</p><div className="footer-social"><a href={business.socials.instagram}><Instagram/></a><a href={business.socials.facebook}><Facebook/></a><a href={business.socials.youtube}><Youtube/></a></div></div><div><h4>Explore</h4>{[["About","#about"],["Services","#services"],["Gallery","#gallery"],["Academy","#academy"],["Beauty Journal","#journal"]].map(x=><a href={x[1]} key={x[0]}>{x[0]}</a>)}</div><div><h4>Popular services</h4>{serviceCategories.slice(0,6).map(s=><a href={`/services/${s.slug}`} key={s.slug}>{s.title}</a>)}</div><div><h4>Contact</h4><p>{business.address}</p><a href={`tel:${business.phone}`}>{business.phone}</a><a href={`https://wa.me/977${business.whatsapp}`}>WhatsApp us</a><a href={`mailto:${business.email}`}>{business.email}</a><p>{business.hours}</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cancellation policy</a></div></div></footer>

    <div className="floating"><a href={`https://wa.me/977${business.whatsapp}`} aria-label="WhatsApp"><MessageCircle/></a><a href={`tel:${business.phone}`} aria-label="Call"><Phone/></a><a className="float-book" href="#book"><CalendarDays/> <span>Book</span></a></div>
    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setLightbox(null)}><button aria-label="Close"><X/></button><img src={lightbox} alt="Gallery preview"/></div>}
    {popup && <div className="offer-popup"><button onClick={()=>setPopup(false)} aria-label="Close offer"><X/></button><span>NEW CLIENT SPECIAL</span><h3>Your first little luxury.</h3><p>Enjoy [20%] off your first selected salon service.</p><form onSubmit={(e)=>{e.preventDefault();setPopup(false)}}><input required placeholder="Your phone number"/><button className="button gold">Get my offer</button></form></div>}
  </main>;
}
