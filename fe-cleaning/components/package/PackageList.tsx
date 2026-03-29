/*
export default function PackageCard() {
  return <div>TEST CARD</div>;
}
  */
import { PackageType } from "@/types/package";
import { default as PackageCard } from "./PackageCard";

interface Props {
  packages: PackageType[];
}

export default function PackageList({ packages }: Props) {
  if (!packages || packages.length === 0) {
    return <div className="text-center text-gray-500">ไม่มีแพ็กเกจ</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((item) => (
        <PackageCard key={item.id} data={item} />
      ))}
    </div>
  );
}
