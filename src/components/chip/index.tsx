import Icon from "../icon";

const getIcon = (type: string, text: string) => {
  switch (type) {
    case "success":
    case "paid":
    case "active":
    case "delivered":
      return (
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
          <Icon name="material-symbols:check-circle" color="text-teal-500" />
          {text}
        </span>
      );

    case "pending":
    case "warning":
    case "processing":
    case "inactive":
      return (
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-50 text-yellow-600 rounded-full">
          <Icon name="material-symbols:pending" color="text-yellow-600" />
          {text}
        </span>
      );
    case "expired":
    case "declined":
    case "failed":
    case "cancelled":
    case "suspended":
      return (
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-200 text-red-500 rounded-full">
          <Icon name="material-symbols:warning" color="text-red-500" />
          {text}
        </span>
      );
    case "returned":
    case "refunded":
      return (
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-indigo-200 text-indigo-500 rounded-full">
          <Icon
            name="material-symbols:assignment-returned-outline"
            color="text-indigo-500"
          />
          {text}
        </span>
      );
    default:
      return <span>{text}</span>;
  }
};
export default function Chip({
  type,
  text,
  className,
}: Readonly<{ type: string; text: string; className?: string }>) {
  return (
    <div className="block">
      <span className={`block ${className || ""}`}>{getIcon(type, text)}</span>
    </div>
  );
}
