"use client";

import React from 'react';
import PillNav from './PillNav';
import { usePathname } from 'next/navigation';

const CustomPillNav = () => {
  const pathname = usePathname();

  // Navigation items for API Conf
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Team', href: '/team' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Agenda', href: '/agenda' }
  ];

  return (
    <PillNav
      logo="/api-conf/postman-logo.png" // You can add your logo here
      logoAlt="Postman API Conf Logo"
      items={navItems}
      activeHref={pathname}
      className="custom-pill-nav border-2 border-black rounded-full"
      ease="power2.easeOut"
      baseColor="#FFFFFF" // White background
      pillColor="#F5D8C9" // Light Orange pills
      hoveredPillTextColor="black"
      pillTextColor="black"
      initialLoadAnimation={true}
    />
  );
};

export default CustomPillNav;
