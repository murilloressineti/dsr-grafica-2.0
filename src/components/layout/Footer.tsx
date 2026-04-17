import { Text } from "../ui";
import { LogoFull } from "@/assets/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-inverse text-neutral-200 py-12 md:py-26 px-6 md:px-10">
      <div className="max-w-360 mx-auto">
        {/* Grid Principal */}
        <div className="flex flex-col gap-8 md:gap-30 md:flex-row mb-8">
          {/* Logo e Branding */}
          <div className="flex flex-col gap-6">
            <img
              src={LogoFull}
              alt="DSR Gráfica"
              className="w-45 md:w-140 h-full"
            />
          </div>

          {/* Grid Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Coluna: Serviços */}
            <div className="flex flex-col gap-3 md:gap-4">
              <Text variant="body-md" className="font-bold text-neutral-white">
                Serviços
              </Text>
              <ul className="flex flex-col gap-2 md:gap-3">
                {[
                  "Encadernação",
                  "Impressão",
                  "Cartões de visita",
                  "Banners",
                  "Adesivo",
                  "Plastificação",
                ].map((link) => (
                  <li key={link}>
                    <Text
                      href="#services"
                      as="a"
                      variant={"body-sm"}
                      className="text-neutral-400 hover:text-brand-primary transition-colors"
                    >
                      {link}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna: Endereço */}
            <div className="flex flex-col gap-3 md:gap-4">
              <Text variant="body-md" className="font-bold text-neutral-white">
                Endereço
              </Text>

              <div className="flex flex-col gap-3 md:gap-4">
                <Text
                  variant="body-sm"
                  as="a"
                  href="https://www.google.com/maps/place/DSR+Gr%C3%A1fica/@-23.4663088,-46.5232101,845m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94cef5af59cb927d:0x8311cb81fd99d1e1!8m2!3d-23.4663088!4d-46.5206352!16s%2Fg%2F11h24f6wvz?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-brand-primary transition-colors"
                >
                  Rua do Rosário, 151 · Vila Camargos · Guarulhos-SP
                </Text>
                <Text
                  variant="body-sm"
                  as="a"
                  href="https://www.google.com/maps/place/DSR+Gr%C3%A1fica/@-23.4663088,-46.5232101,845m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94cef5af59cb927d:0x8311cb81fd99d1e1!8m2!3d-23.4663088!4d-46.5206352!16s%2Fg%2F11h24f6wvz?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-brand-primary transition-colors"
                >
                  Seg-sex, 9h30-18h00
                </Text>
              </div>
            </div>

            {/* Coluna: Contato */}
            <div className="flex flex-col gap-3 md:gap-4">
              <Text variant="body-md" className="font-bold text-neutral-white">
                Contato
              </Text>
              <div className="flex flex-col gap-3">
                <Text
                  as="a"
                  variant="body-sm"
                  href="tel:11982305193"
                  className="text-neutral-400 hover:text-brand-primary transition-colors"
                >
                  (11) 9 8230-5193
                </Text>
                <Text
                  as="a"
                  variant="body-sm"
                  href="mailto:dsrgrafica@gmail.com"
                  className="text-neutral-400 hover:text-brand-primary transition-colors"
                >
                  dsrgrafica@gmail.com
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-neutral-700 mb-5" />

        {/* Copyright */}
        <div className="text-center">
          <Text variant="body-sm" className="text-neutral-400">
            © {currentYear} DSR Gráfica · Todos os direitos reservados
          </Text>
        </div>
      </div>
    </footer>
  );
}
