// import { IconType } from "react-icons";
import { IconType } from "react-icons";
import platformIcons from "../../data/platforms-icons";
import { PlatformsInterface } from "../../services/platforms-services.ts";

// Defining props for the Icon component
interface IconProps {
  icon: IconType;
}

// Example of rendering
const Platforms = ({ platforms }: PlatformsInterface) => {
  // Platform families to ensure no repetition of family icons
  const platformFamilies: {
    [key: string]: string[];
  } = {
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

  // interface Platform {
  //   platform: {
  //     id: number;
  //     name: string;
  //   };
  // }
  // export interface PlatformsInterface {
  //   platforms: Platform[];
  // }
  // Function to filter unique family icons
  // const getUniqueFamilyIcons = ({ platforms }: PlatformsInterface) => {

  //   return (
  //     <div>
  //       {Array.from(uniqueFamilies).map((family) => platformIcons[family])}
  //     </div>
  //   );
  // };

  const uniqueFamilies = new Set<string>();
  // const icons: IconType[] = [];

  platforms.forEach(({ platform }) => {
    Object.keys(platformFamilies).forEach((family) => {
      if (
        platformFamilies[family].includes(platform.name) &&
        !uniqueFamilies.has(family)
      ) {
        uniqueFamilies.add(family);
        // icons.push(platformIcons[family]);
      }
    });

    // Direct mapping for platforms not part of a family
    // if (
    //   !Object.values(platformFamilies).flat().includes(platform.name) &&
    //   platformIcons[platform.name]
    // ) {
    //   icons.push(platformIcons[platform.name]);
    // }
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
  return <IconComponent />;
};

export default Platforms;
