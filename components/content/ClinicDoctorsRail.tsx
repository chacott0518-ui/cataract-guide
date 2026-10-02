import Image from "next/image";

import type { ClinicDoctor } from "@/config/doctors";

type ClinicDoctorsRailProps = {
  doctors: readonly ClinicDoctor[];
};

/** 의료진 레일 — 서버 HTML에 의료진 정보가 포함되도록 유지 */
export function ClinicDoctorsRail({ doctors }: ClinicDoctorsRailProps) {
  return (
    <div className="cg-doctors-rail">
      <ul className="cg-doctors-rail__track">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="cg-doctors-rail__card">
            <Image
              src={doctor.imageSrc}
              alt={doctor.imageAlt}
              width={160}
              height={200}
              className="cg-doctors-rail__photo"
              loading="lazy"
              sizes="160px"
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
    </div>
  );
}
