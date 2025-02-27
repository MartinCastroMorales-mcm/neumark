import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';
import WhatsAppIcon from "../../assets/whatsapp.svg";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a 
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-[#1B2A4A] hover:bg-[#3A8EFF] hover:text-white p-2 rounded-full transition-colors duration-300 flex items-center justify-center"
    >
      {icon}
    </a>
  );
}

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 justify-center">
      <SocialIcon 
        href="https://wa.me/56934138052" 
        icon={<img src={"../../assets/whatsapp.svg"} alt={"Whatsapp"} className="w-6 h-6 transform scale-110" /> }
        label="Whatsapp"
      />
      <SocialIcon 
        href="https://www.instagram.com/neumak_repuestos/?utm_source=qr&igsh=MWxlYXl2eW16enZkZg%3D%3D" 
        icon={<Instagram size={30} />} 
        label="Instagram"
      />
      {/*
      <SocialIcon 
        href="https://twitter.com" 
        icon={<Twitter size={20} />} 
        label="Twitter"
      />
      <SocialIcon 
        href="https://linkedin.com" 
        icon={<Linkedin size={20} />} 
        label="LinkedIn"
      />
      <SocialIcon 
        href="mailto:contacto@neumak.com" 
        icon={<Mail size={20} />} 
        label="Email"
      />
      */}
    </div>
  );
}