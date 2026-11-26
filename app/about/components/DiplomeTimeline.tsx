import Image from "next/image";
import { DiplomeTimelineProps } from "@/interfaces";

export function DiplomeTimeline({ etudes }: DiplomeTimelineProps) {
  return (
    <div className="relative pl-1">
      {etudes.map((etude, index) => {
        const isFirst = index === 0;
        const isLast = index === etudes.length - 1;
        const year = etude.date || etude.year;
        const logoSrc = etude.img || etude.logo;

        return (
          <div
            key={etude.id ?? index}
            className="relative flex items-start gap-4 md:gap-7 pb-10 last:pb-2"
          >
            {isFirst && (
              <div
                className="absolute left-6.5 md:left-7.5 -top-6 h-6 w-[1.5px] bg-[#7e1114]/40 -translate-x-1/2 pointer-events-none"
                aria-hidden="true"
              />
            )}
            <div
              className={`absolute left-6.5 md:left-7.5 top-0 ${isLast ? "h-4" : "bottom-0"
                } w-[1.5px] bg-[#7e1114]/40 -translate-x-1/2 pointer-events-none`}
              aria-hidden="true"
            />

            <div className="shrink-0 flex items-center justify-center w-13 md:w-15 pt-0.5">
              <span className="relative z-10 inline-block px-2 py-0.5 text-xs font-semibold text-[#7e1114]/85 border border-[#7e1114]/50 rounded-md bg-white text-center shadow-xs">
                {year}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 md:gap-6">
                <div>
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#7e1114] uppercase leading-snug tracking-wide">
                    {etude.title}
                  </h3>
                  <p className="text-xs md:text-sm font-normal mt-0.5">
                    {etude.subTitle}
                  </p>
                </div>

                {logoSrc && (
                  <div className="relative shrink-0 w-24 sm:w-28 md:w-36 h-10 md:h-12 flex items-center justify-end">
                    <Image
                      src={logoSrc}
                      alt={etude.logoAlt || etude.subTitle || etude.title}
                      fill
                      sizes="(max-width: 768px) 112px, 144px"
                      className="object-contain object-right"
                    />
                  </div>
                )}
              </div>

              <p className="text-xs md:text-sm leading-relaxed font-normal mt-3">
                {etude.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
