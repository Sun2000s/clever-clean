import { PackageType } from "@/types/package";
import PackageCard from "./PackageCard";

interface Props {
  packages: PackageType[];
  isAdmin?: boolean;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function PackageList({
  packages,
  isAdmin = false,
  onEdit,
  onDelete,
}: Props) {
  if (!packages || packages.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-500">ไม่มีแพ็กเกจ</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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