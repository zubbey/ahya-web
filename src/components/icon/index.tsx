import { Icon as DefaultIcon, IconifyIcon } from "@iconify-icon/react";

export default function Icon({
  name,
  color,
  size,
}: Readonly<{
  name: string | IconifyIcon;
  color?: string;
  size?: number;
}>) {
  return (
    <DefaultIcon
      icon={name}
      className={color || "text-black dark:text-white"}
      style={{
        fontSize: `${size || 24}px`,
      }}
    />
  );
}
