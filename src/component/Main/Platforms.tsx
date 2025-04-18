// import { IconType } from "react-icons";
import { IconType } from "react-icons";
import platformIcons from "../../data/platforms-icons";
import { GamePlatforms } from "../../entities/GamePlatforms.ts";

// Defining props for the Icon component
interface IconProps {
  icon: IconType;
}

interface Props {
  platforms: GamePlatforms[];
}

// Example of rendering
// TODO: make this logic here easier with PlatformFamily property
const Platforms = ({ platforms }: Props) => {
  // Platform families to ensure no repetition of family icons
  const platformFamilies: {
    [key: string]: string[];
  } = {
    PC: ["PC"],
    PlayStation: [
      "PlayStation 5",
      "PlayStation 4",
      "PlayStation 3",
      "PlayStation 2",
      "PlayStation",
      "PS Vita",
      "PSP",
    ],
    Xbox: ["Xbox Series S/X", "Xbox One", "Xbox 360", "Xbox"],
    Nintendo: [
      "Nintendo Switch",
      "Nintendo 3DS",
      "Nintendo DS",
      "Nintendo DSI",
      "Wii U",
      "Wii",
    ],
  };

  const uniqueFamilies = new Set<string>();

  platforms.forEach((platform) => {
    Object.keys(platformFamilies).forEach((family) => {
      if (
        platformFamilies[family].includes(platform.platform.name) &&
        !uniqueFamilies.has(family)
      ) {
        uniqueFamilies.add(family);
      }
    });
  });

  return (
    <div className="flex space-x-4">
      {Array.from(uniqueFamilies).map((family, index) => (
        // Create a React component for each icon
        <Icon key={index} icon={platformIcons[family]} />
      ))}
    </div>
  );
};

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
  // Check if IconComponent is not null or undefined before rendering
  if (!IconComponent) return null;

  // Render the IconComponent
  return <IconComponent className="text-icon-light dark:text-icon-dark" />;
};

export default Platforms;
