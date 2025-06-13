import { Check } from "lucide-react"
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  features: string[]
  icon: "single-engine" | "twin-engine" | "jet"
  recommended?: boolean
}

export function ServiceCard({ title, description, price, features, icon, recommended = false }: ServiceCardProps) {
  // Create the icon element based on the icon prop
  const iconElement = () => {
    if (icon === "single-engine") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 15H3.5C2.67 15 2 14.33 2 13.5S2.67 12 3.5 12H20l2-3" />
          <path d="M12 9H3.5C2.67 9 2 8.33 2 7.5S2.67 6 3.5 6H20l2-3" />
          <path d="M20 3v12h2" />
        </svg>
      );
    } else if (icon === "twin-engine") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M10.5 9H4.17c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H10" />
          <path d="M19.5 9h-5" />
          <path d="M12 12h7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H14" />
          <path d="M3 15h5.17c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H4.5" />
          <path d="M19.5 15h-5" />
          <path d="M9 6l3-3 3 3" />
          <path d="M15 21l-3 3-3-3" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 2L8 22l4-4 4 4Z" />
          <path d="M4.5 14H2a9.85 9.85 0 0 0 10-10v2.5" />
          <path d="M19.5 14H22a9.85 9.85 0 0 1-10-10v2.5" />
        </svg>
      );
    }
  };

  // Create the header with title and icon
  const header = (
    <div className="flex flex-col">
      {recommended && <Tag className="w-fit mb-2" value="Most Popular" severity="info" />}
      <div className="flex items-center gap-2">
        {iconElement()}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );

  // Create the feature list
  const featureList = (
    <div className="flex-1">
      <div className="text-2xl font-bold mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 h-4 w-4 mt-1 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // Create the footer with button
  const footer = (
    <div className="pt-4">
      <Button
        label="Select Package"
        className="w-full"
        outlined={!recommended}
      />
    </div>
  );

  return (
    <Card
      className={`flex flex-col ${recommended ? "border-primary shadow-lg" : ""}`}
      header={header}
      footer={footer}
    >
      {featureList}
    </Card>
  );
}
