import { CopyAddressButton } from "@/components/content/CopyAddressButton";
import { CLINIC } from "@/config/clinic";

type ClinicInfoPanelProps = {
  id: string;
  publishedAt: string;
  modifiedAt: string;
  reviewerName: string;
};

/** 병원 정보 도표(label/value) + 주소복사·지도 보조 버튼. HOME/상세 공통. */
export function ClinicInfoPanel({
  id,
  publishedAt,
  modifiedAt,
  reviewerName,
}: ClinicInfoPanelProps) {
  const query = encodeURIComponent(CLINIC.address);

  return (
    <div id={id} className="cg-clinic-info__col cg-clinic-info__anchor">
      <h3 className="cg-clinic-info__title">병원 정보</h3>
      <dl className="cg-clinic-trust__nap">
        <div>
          <dt>병원명</dt>
          <dd>
            {CLINIC.name} / {CLINIC.legalName} ({CLINIC.brandName})
          </dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>
            <span className="cg-clinic-info__addr">{CLINIC.address}</span>
            <span className="cg-clinic-info__pills">
              <CopyAddressButton address={CLINIC.address} />
              <a
                className="cg-clinic-info__pill"
                href={`https://map.naver.com/p/search/${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                네이버지도
              </a>
              <a
                className="cg-clinic-info__pill"
                href={`https://map.kakao.com/link/search/${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                카카오맵
              </a>
            </span>
          </dd>
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
          <dt>검수자</dt>
          <dd>
            {reviewerName} 원장 (안과전문의) · {CLINIC.name}
          </dd>
        </div>
      </dl>
      <p className="cg-clinic-info__links">
        <a href={CLINIC.locationUrl} target="_blank" rel="noopener noreferrer">
          오시는 길·지도 안내
        </a>
        <a href={CLINIC.consultUrl} target="_blank" rel="noopener noreferrer">
          상담 신청
        </a>
        <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer">
          온라인 예약
        </a>
      </p>
    </div>
  );
}

/** 상세 페이지용 병원 정보 섹션 */
export function ClinicInfoSection({
  publishedAt,
  modifiedAt,
  reviewerName = "송은석",
}: {
  publishedAt: string;
  modifiedAt: string;
  reviewerName?: string;
}) {
  return (
    <section
      id="clinic-visit"
      className="cg-clinic-trust cg-clinic-trust--page"
      aria-labelledby="clinic-page-info-heading"
    >
      <header className="cg-section-head">
        <h2 id="clinic-page-info-heading" className="cg-section-head__title">
          {CLINIC.brandName} 진료·상담 안내
        </h2>
      </header>
      <div className="cg-clinic-info cg-clinic-info--single">
        <ClinicInfoPanel
          id="clinic-info"
          publishedAt={publishedAt}
          modifiedAt={modifiedAt}
          reviewerName={reviewerName}
        />
      </div>
    </section>
  );
}
