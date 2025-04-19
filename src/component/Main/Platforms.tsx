// import { IconType } from "react-icons";
import { IconType } from "react-icons";
import platformIcons from "../../data/platforms-icons";
import { Platform } from "../../entities/Platform";

// Defining props for the Icon component
interface IconProps {
  icon: IconType;
}

interface Props {
  parent_platforms: { platform: Platform }[];
}

// // TODO: make this logic here easier with PlatformFamily property
const Platforms = ({ parent_platforms }: Props) => {
  return (
    <div className="flex space-x-4">
      {/* "{ platform }" instead of "platform" to avoid using platformIcons[platform.platform.name] */}
      {parent_platforms.map(({ platform }, index) => (
        <Icon key={index} icon={platformIcons[platform.name]} />
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
