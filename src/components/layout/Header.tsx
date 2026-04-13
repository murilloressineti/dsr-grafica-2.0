import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, Icon, Text } from "../ui";
import { Logo } from "@/assets/logo";
import { CaretRight, Close, HamburgerMenu } from "@assets/icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Serviços", href: "/services" },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
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
          <ul className="flex items-center gap-8">
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

        {/* HamburgerMenu */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Ícone de Menu (Hamburguer) */}
          <div
            className={cn(
              "absolute transition-all duration-300 transform",
              isOpen
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0",
            )}
          >
            <Icon svg={HamburgerMenu} size={"lg"} />
          </div>

          {/* Ícone de Fechar (X) */}
          <div
            className={cn(
              "absolute transition-all duration-300 transform",
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90",
            )}
          >
            <Icon svg={Close} size={"lg"} />
          </div>
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div
        className={cn(
          "fixed top-20 left-0 w-full bg-neutral-white border-t border-neutral-300 transition-all duration-300 ease-in-out md:hidden overflow-y-auto",
          isOpen
            ? "opacity-100 visible translate-y-0 h-[calc(100vh-80px)]"
            : "opacity-0 invisible -translate-y-2 h-0",
        )}
      >
        <div className="flex flex-col items-center justify-top h-full py-6 px-6">
          <nav className="w-full flex flex-col items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Text
                key={link.label}
                as="a"
                variant={"body-lg"}
                className="hover:text-brand-primary transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Text>
            ))}
          </nav>

          <div className="w-full mt-10">
            <Button variant={"primary"} size={"sm"} className="w-full">
              Pedir orçamento
              <Icon
                svg={CaretRight}
                animate={"right"}
                className="fill-text-primary w-5 h-5"
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
