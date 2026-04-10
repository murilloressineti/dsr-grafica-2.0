import React from "react";
import { Button, Icon, Text } from "../ui";
import { Logo } from "@/assets/logo";
import { CaretRight } from "@assets/icons";

export default function Header() {
  const navLinks = [
    { label: "Serviços", href: "/" },
    { label: "Como funciona", href: "/" },
    { label: "Sobre", href: "/" },
    { label: "Contato", href: "/" },
  ];

  return (
    <header className="w-full h-20 bg-neutral-100 backdrop-blur-sm sticky top-0 z-50 ">
      <div className="max-w-360 px-6 md:px-30 mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer shrink-0">
          <Logo />
        </div>

        {/* Menu Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Text
                  as="a"
                  variant={"body-md"}
                  className="hover:text-brand-primary transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                </Text>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <Button variant={"tertiary"} size={"sm"}>
            Pedir orçamento{" "}
            <Icon
              svg={CaretRight}
              animate={"right"}
              className="fill-text-primary w-5 h-5"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
