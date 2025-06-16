import { Check } from "lucide-react"
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  features: string[]
  icon: "single-engine" | "twin-engine" | "jet" | "helicopter"
  recommended?: boolean
}

export function ServiceCard({ title, description, price, features, icon, recommended = false }: ServiceCardProps) {
  // Create the icon element based on the icon prop
  const iconElement = () => {
    const iconMap = {
      "single-engine": "/single-engine.svg",
      "twin-engine": "/dual-engine.svg",
      "jet": "/jet.svg",
      "helicopter": "/helicopter.svg"
    };

    return (
      <Image
        src={iconMap[icon]}
        alt={`${icon} aircraft icon`}
        width={24}
        height={24}
        className="h-6 w-6"
      />
    );
  };

  // Create the header with title and icon
  const header = (
    <div className="flex flex-col">
      <div className="h-8 flex items-start">
        {recommended && <Tag className="w-fit" value="Most Popular" severity="info" />}
      </div>
      <div className="flex items-center gap-2 mb-3">
        {iconElement()}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4 min-h-[2.5rem] flex items-center">{description}</p>
    </div>
  );

  // Create the feature list
  const featureList = (
    <div className="flex-1 flex flex-col">
      <div className="text-2xl font-bold mb-4 h-8 flex items-center">{price}</div>
      <ul className="space-y-2 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // Create the footer with button
  const footer = (
    <div className="mt-4">
      <Button
        label="Select Package"
        className="w-full"
        outlined={!recommended}
      />
    </div>
  );

  return (
    <div className={`flex flex-col h-full rounded-lg border bg-card p-6 shadow-sm ${recommended ? "border-primary shadow-lg" : ""}`}>
      {header}
      {featureList}
      {footer}
    </div>
  );
}
