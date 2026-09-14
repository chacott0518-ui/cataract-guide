import { CLINIC } from "@/config/clinic";
import { CLINIC_DOCTORS } from "@/config/doctors";
import { ClinicDoctorsRail } from "@/components/content/ClinicDoctorsRail";

type ClinicDoctorsSectionProps = {
  heading?: string;
  compact?: boolean;
};

/** 상세 페이지용 에스앤비안과 의료진 요약 */
export function ClinicDoctorsSection({
  heading = `${CLINIC.brandName} 의료진`,
}: ClinicDoctorsSectionProps) {
  return (
    <section className="cg-clinic-doctors-block" aria-labelledby="clinic-doctors-h">
      <h2 id="clinic-doctors-h" className="cg-clinic-doctors-block__title">
        {heading}
      </h2>
      <p className="cg-clinic-doctors-block__lead">
        {CLINIC.name} 의료진 안내입니다. 특정 수술의 집도·결과를 보장하는
        표기가 아니며, 상담에서 눈 상태와 생활 요구를 함께 확인합니다.
      </p>
      <ClinicDoctorsRail doctors={CLINIC_DOCTORS} />
    </section>
  );
}
