import Link from "next/link";

import { ClinicInfoPanel } from "@/components/content/ClinicInfoPanel";
import { CLINIC, CLINIC_CATARACT_EQUIPMENT } from "@/config/clinic";
import { ROUTES } from "@/config/routes";

type ClinicTrustSectionProps = {
  publishedAt?: string;
  modifiedAt?: string;
  reviewerName?: string;
};

const CHECK_ITEMS = [
  { href: ROUTES.preExam, label: "수술 전 검사에서 확인하는 항목" },
  { href: ROUTES.iolInfoCheck, label: "인공수정체 선택 전 확인사항" },
  { href: ROUTES.lensTypeCheck, label: "단초점·다초점·연속초점 차이" },
  { href: ROUTES.cost, label: "비용에 영향을 줄 수 있는 요소" },
] as const;

/**
 * HOME 진료·상담 안내 — 병원 정보(좌) / 상담 전 확인 항목(우) 2단,
 * 장비는 카드 그리드. 로고는 Footer에서만 표시한다.
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
      <header className="cg-section-head">
        <h2 id="clinic-trust-heading" className="cg-section-head__title">
          {CLINIC.brandName} 진료·상담 안내
        </h2>
        <p className="cg-section-head__lead">
          이 사이트의 검색 주제는 노안백내장이며, 진료·상담 안내는 {CLINIC.name}(
          {CLINIC.legalName}, 브랜드명 {CLINIC.brandName}) 정보를 기준으로
          연결합니다. 콘텐츠는 안과전문의 {reviewerName} 원장 검수 흐름을
          반영하며, 검사 결과와 생활 패턴에 따라 상담 내용이 달라질 수 있습니다.
        </p>
      </header>

      <div className="cg-clinic-info">
        <ClinicInfoPanel
          id="clinic-info"
          publishedAt={publishedAt}
          modifiedAt={modifiedAt}
          reviewerName={reviewerName}
        />

        <div className="cg-clinic-info__col">
          <h3 className="cg-clinic-info__title">상담 전 확인 항목</h3>
          <ul className="cg-clinic-checks">
            {CHECK_ITEMS.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className="cg-clinic-checks__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="cg-clinic-checks__label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="cg-clinic-trust__sub">검사·수술에서 역할을 확인하는 장비</h3>
      <ul className="cg-equip-grid">
        {CLINIC_CATARACT_EQUIPMENT.map((item) => (
          <li key={item.id} className="cg-equip-card">
            <strong className="cg-equip-card__name">{item.name}</strong>
            <span className="cg-equip-card__role">{item.role}</span>
          </li>
        ))}
      </ul>
      <p className="cg-clinic-info__foot">
        <span>
          장비 목록은 공식 장비 안내를 기준으로 하며, 장비명만으로 결과나
          적합성을 보장하지 않습니다.
        </span>
        <a
          className="cg-clinic-info__btn"
          href={CLINIC.equipmentUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          공식 장비 안내
        </a>
      </p>
    </section>
  );
}
