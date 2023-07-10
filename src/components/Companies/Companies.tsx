import { twMerge } from "tailwind-merge";
import { CompanyBannerProps } from "./types";

function Companies() {
  return (
    <div className="flex justify-center items-center gap-12 p-4 flex-col-reverse md:flex-row flex-wrap">
      <CompanyBanner src="/images/companies/tecnm.webp" />
      <CompanyBanner
        src="/images/companies/rocktech.webp"
        className="md:brightness-50 md:hover:brightness-100"
      />
      <CompanyBanner src="/images/companies/bb.webp" />
    </div>
  );
}

function CompanyBanner({ src, className }: CompanyBannerProps) {
  return (
    <img
      className={twMerge(
        "md:filter md:grayscale md:hover:grayscale-0 w-2/3 md:w-1/5",
        className,
      )}
      src={src}
    />
  );
}

export default Companies;
