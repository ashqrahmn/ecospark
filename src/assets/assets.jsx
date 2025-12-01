import EcoSpark from './favicon.svg';
import hero from './hero.webp';
import growth_close_img1 from './growth_close_img1.webp';
import growth_close_img2 from './growth_close_img2.webp';
import growth_close_img3 from './growth_close_img3.webp';
import GettyImages from './GettyImages.webp';
import service1 from './service1.webp';
import service2 from './service2.webp';
import service3 from './service3.webp';
import service4 from './service4.webp';
import service5 from './service5.webp';
import service6 from './service6.webp';
import calender from './calender.png';
import window from './window.png';
import leaf1 from './leaf1.png';
import leaf2 from './leaf2.png';
import leaf3 from './leaf3.png';
import green_arrow from './green_arrow.png'
import green_face from './green_face.png';
import team_leaf from './team_leaf.png';
import calender_2 from './calender_2.png';
import Detergent_bottle from './Detergent_bottle.png';
import hand_sparkle from './hand_sparkle.png';
import face_green_2 from './face_green_2.png';
import tst1 from './tst1.jpg';
import tst2 from './tst2.jpg';
import tst3 from './tst3.jpg';
import tst4 from './tst4.jpg';
import tst5 from './tst5.jpg';
import tst6 from './tst6.jpg';
import contaxt_image from './contaxt_image.webp';
import contact_element from './contact_element.webp';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";

import brand1 from './brand1.svg';
import brand2 from './brand2.svg';
import brand3 from './brand3.svg';
import brand4 from './brand4.svg';
import brand5 from './brand5.svg';
import brand6 from './brand6.svg';

export const assets = {
  EcoSpark,
  hero,
  growth_close_img1,
  growth_close_img2,
  growth_close_img3,
  team_leaf,
  GettyImages,
  leaf1,
  leaf2,
  leaf3,
  green_arrow,
  calender,
  green_face,
  window,
  contaxt_image,
  contact_element,
};

export const navLinks = [
  { href: "#service", label: "Service" },
  { href: "#work", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  // { href: "#faq", label: "Faq" },
];

export const features = [
  {
    id: 1,
    icon: calender_2,
    // Original Title: "Free Quote & Instant Pricing"
    title: "Transparent Online Pricing",
    // Original Desc: "Get instant pricing and get your free quote cleaning all online."
    desc: "Receive a no-obligation quote and see your cleaning price instantly online.",
  },
  {
    id: 2,
    icon: Detergent_bottle,
    // Original Title: "Equipment & Supplies Provided"
    title: "Fully Equipped Professionals",
    // Original Desc: "Our cleaners provide all the essential equipment & supplies."
    desc: "We arrive with all the necessary tools and professional-grade supplies.",
  },
  {
    id: 3,
    icon: hand_sparkle,
    // Original Title: "100% Satisfaction Guarantee"
    title: "Your Happiness, Guaranteed",
    // Original Desc: "If you’re not happy with your cleaning, we’ll be back to fix the missed areas for free."
    desc: "Not completely satisfied? We'll return to re-clean any missed spots at no charge.",
  },
  {
    id: 4,
    icon: face_green_2,
    // Original Title: "Vetted & Background Checked Cleaners"
    title: "Trusted & Verified Professionals",
    // Original Desc: "Our cleaners go through a rigorous hiring process to make sure your home is in safe hands."
    desc: "For your peace of mind, every cleaner undergoes a strict vetting and background check.",
  },
];

export const stats = [
  { number: "20+", label: "years experience" },
  { number: "50+", label: "homes cleaned last year" },
  { number: "1500+", label: "saved hours for our clients" },
  { number: "95%", label: "of our clients hire us again" },
];

export const services = [
  {
    id: 1,
    title: <>House <br /> Cleaning</>,
    img: service1,
    buttonText: "Learn more",
    buttonHoverText: "Learn more",
    link: "/services/house-cleaning",
  },
  {
    id: 2,
    title: <>Office <br /> Cleaning</>,
    img: service2,
    buttonText: "Learn more",
    buttonHoverText: "Learn more",
    link: "/services/office-cleaning",
  },
  {
    id: 3,
    title: <>Deep <br /> Cleaning</>,
    img: service3,
    buttonText: "Learn more",
    buttonHoverText: "Learn more",
  },
  {
    id: 4,
    title: <>Move In Out <br /> Cleaning</>,
    img: service4,
    buttonText: "Learn more",
    buttonHoverText: "Learn more",
  },
  {
    id: 5,
    title: <>Post Construction <br /> Cleaning</>,
    img: service5,
    buttonText: "Learn more",
    buttonHoverText: "Learn more",
  },
  {
    id: 6,
    title: <>Apartment <br /> Cleaning</>,
    img: service6,
    buttonText: "Learn more",
    buttonHoverText: "Learn more",
  },
];

export const testimonials = [
  {
    id: 1,
    text: "Incredibly professional and fast service. They arrived punctually and did more than I asked. My duplex looks absolutely immaculate. So grateful for EcoSpark!",
    img: tst1,
    name: "Priya Sharma",
    role: "Customer",
  },
  {
    id: 2,
    text: "What a transformation! The EcoSpark crew was so courteous and professional, paying close attention to every little corner. My whole house feels brand new and smells wonderfully fresh.",
    img: tst2,
    name: "Rohan Patel",
    role: "Customer",
  },
  {
    id: 3,
    text: "A very professional company. Their attention to detail is truly impressive and they go the extra mile. I highly recommend EcoSpark to all.",
    img: tst3,
    name: "Ananya Reddy",
    role: "Customer",
  },
  {
    id: 4,
    text: "They worked wonders on my cluttered apartment, now it's immaculate! The crew was courteous, efficient, and so meticulous. I'm finally proud to have friends over. Thank you!",
    img: tst4,
    name: "Vikram Singh",
    role: "Customer",
  },
  {
    id: 5,
    text: "The use of eco-friendly supplies is key for us. As a business owner, I value how EcoSpark's regular office cleanings maintain a healthy and productive environment for my staff.",
    img: tst5,
    name: "Sunita Desai",
    role: "Customer",
  },
  {
    id: 6,
    text: "EcoSpark is my go-to for all move-out cleans. Their work is consistently flawless, ensuring my new tenants are pleased and the property is perfectly maintained.",
    img: tst6,
    name: "Arjun Mehta",
    role: "Customer",
  },
];

export const faqContent = [
  {
    id: 1,
    question: "What does a standard cleaning service cover?",
    answer:
      "Our standard cleaning services, for both homes and offices, are designed to be thorough. This includes dusting all accessible surfaces, wiping down countertops, cleaning floors, and fully sanitizing kitchens and bathrooms. We also offer specialized services like Deep Cleaning for a more intensive result.",
  },
  {
    id: 2,
    question: "How is the pricing for a cleaning determined?",
    answer:
      "Our pricing is customized for each job. The cost depends on factors like the property's size, its current condition, and the type of service you need—from a standard Recurring Cleaning to a specialized Move In/Out or Post Construction clean. Contact EcoSpark for a precise, no-obligation quote.",
  },
  {
    id: 3,
    question: "Do I need to provide any cleaning products or equipment?",
    answer:
      "No, you don't need to provide a thing! Our team arrives fully equipped with high-quality, eco-friendly cleaning supplies suitable for any job, from a standard apartment clean to a detailed post-construction site.",
  },
  {
    id: 4,
    question: "When can I schedule a cleaning?",
    answer:
      "We offer flexible scheduling, seven days a week. Our teams typically operate between 8:00 AM and 6:00 PM. We understand that services like Office Cleaning may require after-hours work, so please contact us and we will find a schedule that minimizes disruption to your home or business.",
  },
];

export const brandLogos = [
  {
    src: brand1,
    alt: 'Brand Logo 1',
    width: 140, // Example width
    height: 40, // Example height
  },
  {
    src: brand2,
    alt: 'Brand Logo 2',
    width: 150,
    height: 35,
  },
  {
    src: brand3,
    alt: 'Brand Logo 3',
    width: 120,
    height: 50,
  },
  {
    src: brand4,
    alt: 'Brand Logo 4',
    width: 160,
    height: 40,
  },
  {
    src: brand5,
    alt: 'Brand Logo 5',
    width: 130,
    height: 45,
  },
  {
    src: brand6,
    alt: 'Brand Logo 6',
    width: 145,
    height: 30,
  },
];

export const socialMediaLinks = [
  {
    id: "facebook",
    label: "Follow us on Facebook",
    icon: <FaFacebookF />,
    url: "https://facebook.com/",
  },
  {
    id: "instagram",
    label: "Follow us on Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/",
  },
  {
    id: "twitter",
    label: "Follow us on Twitter",
    icon: <FaXTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: "youtube",
    label: "Follow us on YouTube",
    icon: <FaYoutube />,
    url: "https://youtube.com/",
  },
];

export const serviceLinks = [
  { name: "House Cleaning" },
  { name: "Office Cleaning" },
  { name: "Apartment Cleaning" },
  { name: "Airbnb Cleaning" },
  { name: "Deep Cleaning" },
  { name: "Move In Out Cleaning" },
  { name: "Post Construction Cleaning" },
  { name: "Recurring Cleaning" },
];

export const contactInfo = [
  {
    icon: <RiMapPinLine className='text-light'/>,
    content: ["No. 21, 8th Main, Jayanagar 4th Block, Bengaluru, Karnataka 560011"],
  },
  {
    icon: <RiPhoneLine/>,
    content: ["+91 98456 12345"],
    href: "tel:+91 98456 12345",
  },
  {
    icon: <RiMailLine/>,
    content: ["contact@ecospark.com"],
    href: "mailto:contact@ecospark.com",
  },
  
];

export const workingHours = [
  { day: "Mon - Fri:", time: "9.00am - 8.00pm" },
  { day: "Saturday:", time: "10.00am - 8.00pm" },
  { day: "Sunday:", time: "10.00am - 12.00pm" },
];