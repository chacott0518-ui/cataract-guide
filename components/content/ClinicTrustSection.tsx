import Link from "next/link";

import { CLINIC, CLINIC_CATARACT_EQUIPMENT } from "@/config/clinic";
import { CLINIC_DOCTORS } from "@/config/doctors";
import { ROUTES } from "@/config/routes";
import { ClinicDoctorsRail } from "@/components/content/ClinicDoctorsRail";

/**
 * HOME 중하단 신뢰 섹션 — head-query 아래. 본문 CTA 배너 없음(floating 사용).
 */
export function ClinicTrustSection() {
  return (
    <section
      id="clinic-visit"
      className="cg-clinic-trust"
      aria-labelledby="clinic-trust-heading"
    >
      <div className="cg-clinic-trust__brand">
        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG brand mark */}
        <img
          src={CLINIC.logoPath}
          alt={CLINIC.logoAlt}
          width={140}
          height={42}
          className="cg-clinic-trust__logo"
        />
      </div>
      <h2 id="clinic-trust-heading" className="cg-clinic-trust__title">
        {CLINIC.name}에서 확인하는 노안·백내장 검사와 상담
      </h2>
      <p className="cg-clinic-trust__lead">
        이 사이트의 검색 주제는 노안백내장이며, 진료·상담 안내는{" "}
        {CLINIC.name}({CLINIC.legalName}) 정보를 기준으로 연결합니다. 검사
        결과와 생활 패턴에 따라 상담 내용이 달라질 수 있습니다.
      </p>

      <ul className="cg-clinic-trust__links">
        <li>
          <Link href={ROUTES.preExam}>수술 전 검사에서 확인하는 항목</Link>
        </li>
        <li>
          <Link href={ROUTES.iolInfoCheck}>인공수정체 선택 전 확인사항</Link>
        </li>
        <li>
          <Link href={ROUTES.lensTypeCheck}>단초점·다초점·연속초점 차이</Link>
        </li>
        <li>
          <Link href={ROUTES.cost}>비용에 영향을 줄 수 있는 요소</Link>
        </li>
      </ul>

      <h3 className="cg-clinic-trust__sub">검사·수술에서 역할을 확인하는 장비</h3>
      <ul className="cg-clinic-trust__equipment">
        {CLINIC_CATARACT_EQUIPMENT.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </li>
        ))}
      </ul>
      <p className="cg-clinic-trust__note">
        장비 목록은 공식 장비 안내를 기준으로 하며, 장비명만으로 결과나 적합성을
        보장하지 않습니다.{" "}
        <a href={CLINIC.equipmentUrl} target="_blank" rel="noopener noreferrer">
          공식 장비 안내
        </a>
      </p>

      <h3 className="cg-clinic-trust__sub">{CLINIC.brandName} 의료진</h3>
      <ClinicDoctorsRail doctors={CLINIC_DOCTORS} />
      <p className="cg-clinic-trust__note">
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
