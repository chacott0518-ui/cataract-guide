import Link from "next/link";

import { ClinicConsultBanner } from "@/components/advertising/AdInquiryBanner";
import { ClinicDoctorsRail } from "@/components/content/ClinicDoctorsRail";
import { CLINIC, CLINIC_CATARACT_EQUIPMENT } from "@/config/clinic";
import { CLINIC_DOCTORS } from "@/config/doctors";
import { ROUTES } from "@/config/routes";

type ClinicTrustSectionProps = {
  publishedAt?: string;
  modifiedAt?: string;
  reviewerName?: string;
};

/**
 * HOME 중하단 신뢰 섹션 — NAP·의료진·검수·상담 CTA를 서버 HTML visible text로 출력.
 */
export function ClinicTrustSection({
  publishedAt = "2026-07-22",
  modifiedAt = "2026-10-02",
  reviewerName = "송은석",
}: ClinicTrustSectionProps) {
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
          loading="lazy"
          decoding="async"
        />
      </div>
      <h2 id="clinic-trust-heading" className="cg-clinic-trust__title">
        {CLINIC.brandName}({CLINIC.name}) 의료진 검수·상담으로 이어지는 노안백내장
        안내
      </h2>
      <p className="cg-clinic-trust__lead">
        이 사이트의 검색 주제는 노안백내장이며, 진료·상담 안내는{" "}
        {CLINIC.name}({CLINIC.legalName}, 브랜드명 {CLINIC.brandName}) 정보를
        기준으로 연결합니다. 콘텐츠는 안과전문의 {reviewerName} 원장 검수 흐름을
        반영하며, 검사 결과와 생활 패턴에 따라 상담 내용이 달라질 수 있습니다.
      </p>

      <dl className="cg-clinic-trust__nap">
        <div>
          <dt>병원명</dt>
          <dd>
            {CLINIC.name} / {CLINIC.legalName} ({CLINIC.brandName})
          </dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>{CLINIC.address}</dd>
        </div>
        <div>
          <dt>전화</dt>
          <dd>
            <a href={CLINIC.phoneTel}>{CLINIC.phoneDisplay}</a>
          </dd>
        </div>
        <div>
          <dt>진료시간</dt>
          <dd>{CLINIC.hoursNote}</dd>
        </div>
        <div>
          <dt>사업자등록번호</dt>
          <dd>{CLINIC.businessNumber}</dd>
        </div>
        <div>
          <dt>대표</dt>
          <dd>{CLINIC.representative}</dd>
        </div>
        <div>
          <dt>작성일</dt>
          <dd>
            <time dateTime={publishedAt}>{publishedAt}</time>
          </dd>
        </div>
        <div>
          <dt>수정일</dt>
          <dd>
            <time dateTime={modifiedAt}>{modifiedAt}</time>
          </dd>
        </div>
        <div>
          <dt>안과전문의 검수</dt>
          <dd>
            {reviewerName} 원장 (안과전문의) · {CLINIC.name}
          </dd>
        </div>
      </dl>

      <p className="cg-clinic-trust__note">
        <a href={CLINIC.locationUrl} target="_blank" rel="noopener noreferrer">
          오시는 길·지도 안내
        </a>
        {" · "}
        <a href={CLINIC.consultUrl} target="_blank" rel="noopener noreferrer">
          상담 신청
        </a>
        {" · "}
        <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer">
          온라인 예약
        </a>
      </p>

      <ClinicConsultBanner variant="bottom" />

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

      <h3 className="cg-clinic-trust__sub">
        {CLINIC.brandName} · 에스앤비안과 의료진
      </h3>
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
