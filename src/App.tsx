import { Text, Icon } from "@components/ui";
import {
  ArrowUpRight,
  BuildingOffice,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Clock,
  Coins,
  Envelope,
  Files,
  GraduationCap,
  MapPin,
  Package,
  Phone,
  Star,
  StarHalf,
  WhatsappLogo,
} from "./assets/icons";

export default function App() {
  return (
    <div>
      {/* TEXT */}
      <div className="bg-bg-subtle">
        <Text as="h1" variant={"display-xl"} TextColor="primary">
          Olá, mundo!
        </Text>

        <Text variant={"display-lg"} TextColor="primary">
          Olá, mundo!
        </Text>

        <Text as="h1" TextColor="secondary">
          Olá, mundo!
        </Text>

        <Text as="h2" TextColor="secondary">
          Olá, mundo!
        </Text>

        <Text as="h3" TextColor="secondary">
          Olá, mundo!
        </Text>

        <Text variant={"body-lg"} TextColor="tertiary">
          Olá, mundo!
        </Text>

        <Text variant={"body-md"} TextColor="tertiary">
          Olá, mundo!
        </Text>

        <Text variant={"body-sm"} TextColor="tertiary">
          Olá, mundo!
        </Text>

        <Text variant={"cta-lg"} TextColor="inverted">
          Olá, mundo!
        </Text>

        <Text variant={"cta-md"} TextColor="inverted">
          Olá, mundo!
        </Text>

        <Text variant={"overline-md"} TextColor="brand">
          Olá, mundo!
        </Text>

        <Text variant={"overline-sm"} TextColor="brand">
          Olá, mundo!
        </Text>
      </div>

      {/* ICON */}
      <div className="flex">
        <Icon svg={ArrowUpRight} className="fill-brand-primary"/>
        <Icon svg={BuildingOffice}/>
        <Icon svg={CaretDown} />
        <Icon svg={CaretLeft} />
        <Icon svg={CaretRight} />
        <Icon svg={CaretUp} />
        <Icon svg={Clock} />
        <Icon svg={Coins} />
        <Icon svg={Envelope} />
        <Icon svg={Files} />
        <Icon svg={GraduationCap} />
        <Icon svg={MapPin} />
        <Icon svg={Package} />
        <Icon svg={Phone} />
        <Icon svg={Star} />
        <Icon svg={StarHalf} />
        <Icon svg={WhatsappLogo} />
      </div>
    </div>
  );
}
