import Image from "next/image";
import type { ImgPresProps } from "@/interfaces";

export const ImgPres = ({ imgPres, title }: ImgPresProps) => {
  return (
    <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden shrink-0">
      <Image
        src={imgPres}
        alt={title || "Illustration du projet"}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
};
