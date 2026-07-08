export default function HeroContent() {
  return (
    <div className="space-y-8">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-accent/30 bg-white px-4 py-2 shadow-sm">
        <span className="text-sm font-medium text-primary">
          ✨ Professional Cleaning Company
        </span>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="font-heading text-5xl font-bold leading-tight text-primary lg:text-7xl">
          Premium Cleaning
          <br />
          Services
          <br />
          You Can Trust
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Professional residential, office, condominium and commercial cleaning
          services delivered with premium quality, experienced staff and
          attention to every detail.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#244A73]">
          Book Now
        </button>

        <button className="rounded-full border border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white">
          View Packages
        </button>
      </div>

      {/* Trust */}
      <div className="flex items-center gap-4">
        <div className="text-yellow-500 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <div>
          <p className="font-semibold text-primary">
            Trusted by 1000+ Customers
          </p>

          <p className="text-sm text-gray-500">
            Residential • Office • Commercial
          </p>
        </div>
      </div>
    </div>
  );
}