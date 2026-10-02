import { CLINIC } from "@/config/clinic";
import { CLINIC_DOCTORS } from "@/config/doctors";
import { ClinicDoctorsRail } from "@/components/content/ClinicDoctorsRail";

type ClinicDoctorsSectionProps = {
  heading?: string;
  lead?: string;
  /** @deprecated 레이아웃 호환용 — 무시됨 */
  compact?: boolean;
};

/** S&B안과 의료진 검수 섹션 — HOME/상세 공통 */
export function ClinicDoctorsSection({
  heading = `${CLINIC.brandName} 의료진 검수`,
  lead = "노안백내장 정보는 안과 진료와 상담 기준을 바탕으로 정리합니다.",
}: ClinicDoctorsSectionProps) {
  return (
    <section
      className="cg-clinic-doctors-block"
      aria-labelledby="clinic-doctors-h"
    >
      <header className="cg-section-head">
        <h2 id="clinic-doctors-h" className="cg-section-head__title">
          {heading}
        </h2>
        <p className="cg-section-head__lead">{lead}</p>
      </header>
      <ClinicDoctorsRail doctors={CLINIC_DOCTORS} />
      <p className="cg-clinic-doctors-block__note">
        <a
          href={CLINIC.medicalStaffUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          공식 의료진 소개
        </a>
        에서 자세한 약력을 확인할 수 있습니다.
      </p>
    </section>
  );
}
