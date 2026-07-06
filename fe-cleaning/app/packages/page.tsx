import PackageList from "@/components/package/PackageList";
import { PackageApi, PackageType } from "@/types/package";

async function getPackages(): Promise<PackageApi[]> {
  const res = await fetch("http://localhost:8080/packages", {
    cache: "no-store",
  });

  const json = await res.json();
  return json.data;
}

export default async function Page() {
  const packages = await getPackages();

const mapped: PackageType[] = packages.map((item: PackageApi) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  duration: `${item.minDurationHours}-${item.maxDurationHours} ชั่วโมง`,
  staff: `${item.minStaff}-${item.maxStaff} คน`,
  rating: item.rating,
  image: item.coverImage,
}));

  return <PackageList packages={mapped} />;
}

