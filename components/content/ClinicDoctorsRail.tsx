import type { ClinicDoctor } from "@/config/doctors";

type ClinicDoctorsRailProps = {
  doctors: readonly ClinicDoctor[];
};

/** 의료진 카드 그리드 — 서버 HTML에 의료진 정보가 포함되도록 유지 */
export function ClinicDoctorsRail({ doctors }: ClinicDoctorsRailProps) {
  return (
    <div className="cg-doctors-rail">
      <ul className="cg-doctors-rail__track">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="cg-doctors-rail__card">
            <span className="cg-doctors-rail__photo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element -- static doctor photo */}
              <img
                src={doctor.imageSrc}
                alt={doctor.imageAlt}
                width={320}
                height={400}
                className="cg-doctors-rail__photo"
                loading="lazy"
                decoding="async"
              />
            </span>
            <div className="cg-doctors-rail__body">
              <p className="cg-doctors-rail__name">{doctor.name}</p>
              <p className="cg-doctors-rail__role">{doctor.role}</p>
              <p className="cg-doctors-rail__spec">
                {doctor.specialties.join(" · ")}
              </p>
              <p className="cg-doctors-rail__duty">
                노안·백내장 상담·검수 안내
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
