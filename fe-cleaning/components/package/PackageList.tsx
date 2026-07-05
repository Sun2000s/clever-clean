import { PackageType } from "@/types/package";
import PackageCard from "./PackageCard";

interface Props {
  packages: PackageType[];
  isAdmin?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function PackageList({
  packages,
  isAdmin = false,
  onEdit,
  onDelete,
}: Props) {
  if (!packages || packages.length === 0) {
    return <div className="text-center text-gray-500">ไม่มีแพ็กเกจ</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((item) => (
        <PackageCard
          key={item.id}
          data={item}
          isAdmin={isAdmin}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}