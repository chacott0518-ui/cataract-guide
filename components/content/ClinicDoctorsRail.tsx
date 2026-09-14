"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import type { ClinicDoctor } from "@/config/doctors";

type ClinicDoctorsRailProps = {
  doctors: readonly ClinicDoctor[];
};

/** 모바일: 1장 + peek + dots / PC: 3열 그리드 */
export function ClinicDoctorsRail({ doctors }: ClinicDoctorsRailProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(Math.max(idx, 0), doctors.length - 1));
  };

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * el.clientWidth,
      behavior: "smooth",
    });
    setActive(index);
  };

  return (
    <div className="cg-doctors-rail">
      <ul
        ref={scrollerRef}
        className="cg-doctors-rail__track"
        onScroll={onScroll}
      >
        {doctors.map((doctor) => (
          <li key={doctor.id} className="cg-doctors-rail__card">
            <Image
              src={doctor.imageSrc}
              alt={doctor.imageAlt}
              width={160}
              height={200}
              className="cg-doctors-rail__photo"
            />
            <div>
              <p className="cg-doctors-rail__name">
                {doctor.name}{" "}
                <span className="cg-doctors-rail__role">{doctor.role}</span>
              </p>
              <p className="cg-doctors-rail__spec">
                {doctor.specialties.join(" · ")}
              </p>
              <ul className="cg-doctors-rail__highlights">
                {doctor.highlights.slice(0, 3).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className="cg-doctors-rail__dots" role="tablist" aria-label="의료진">
        {doctors.map((doctor, index) => (
          <button
            key={doctor.id}
            type="button"
            className={`cg-doctors-rail__dot ${active === index ? "is-active" : ""}`}
            aria-label={`${doctor.name} 보기`}
            aria-selected={active === index}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
