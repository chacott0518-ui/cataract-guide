/**
 * 에스앤비안과의원(S&B) 진료·연락 Entity.
 * 검색 주제(노안백내장)와 분리된 의료기관 사실 원본.
 * 출처: PerfectVision config/hospital.ts, MobileBottomBar/PcQuickMenu, snbeye.com
 *
 * CROSS-SITE POLICY (CG + PV):
 * - 두 사이트 모두 `노안백내장` PRIMARY 허용. PV bare head 제거·강등 금지.
 * - CG=정보·비교·비용·회복·FAQ / PV=S&B 검사·수술·인공수정체·진료 톤으로 차별화.
 * - S&B Entity 사실(전화·주소·법적명칭·상담/예약 URL)은 공유 가능.
 * - URL·OWNER·콘텐츠 삭제·통합 금지. exact/near-duplicate 문장만 정리.
 */
export const CLINIC = {
  /** Schema·본문 Entity 표시명 */
  name: "에스앤비안과의원",
  /** UI 브랜드 표기 */
  brandName: "S&B안과",
  legalName: "압구정에스앤비안과의원",
  representative: "유승열",
  businessNumber: "207-97-00635",
  phoneDisplay: "02-3446-6666",
  phoneTel: "tel:0234466666",
  address: "서울특별시 강남구 논현로 842 압구정빌딩 9층",
  nearestStation: "압구정역 3번 출구 인근",
  directions:
    "압구정역 3번 출구에서 안다즈 호텔 방향 약 50m, 농협 건물(압구정빌딩) 9층",
  parking: "압구정빌딩 뒤편 지하 3~5층 주차장 이용 가능",
  hoursNote:
    "월·화·목 09:30~18:30 · 금 09:30~20:30 · 토 09:30~16:30 · 점심 13:00~14:00 · 수·일·공휴일 휴진",
  officialSiteUrl: "https://snbeye.com",
  medicalStaffUrl: "https://snbeye.com/medical-staff/",
  equipmentUrl: "https://snbeye.com/equipment/",
  /** PerfectVision MobileBottomBar / PcQuickMenu + 공식 채널명 확인 */
  kakaoUrl: "https://pf.kakao.com/_PDxccZ/chat",
  /** PerfectVision CTA + snbeye.com */
  consultUrl: "https://snbeye.com/request-consultation/",
  bookingUrl: "https://snbeye.com/booking/",
  /** 오시는 길·병원소개 (주소·진료시간 안내) */
  locationUrl: "https://snbeye.com/our-intro/",
  logoPath: "/images/snb/brand/snb-logo-dark.svg",
  logoAlt: "에스앤비안과의원 로고",
} as const;

/** 노안·백내장 상담 맥락에서 설명하는 확인된 장비 (나열 광고 금지, 역할 설명용) */
export const CLINIC_CATARACT_EQUIPMENT = [
  {
    id: "centurion",
    name: "수정체유화장치 (CENTURION VISION SYSTEM)",
    role: "백내장 수술에서 혼탁해진 수정체를 유화·제거하는 데 쓰이는 수술 장비로 안내됩니다.",
  },
  {
    id: "iol-master-700",
    name: "IOL MASTER 700",
    role: "안구 계측과 인공수정체 도수 계산에 활용되는 검사 장비로 안내됩니다.",
  },
  {
    id: "yag-ar",
    name: "YAG & AR",
    role: "YAG·AR 관련 레이저 장비로, 수술 전후 경과에 따라 상담에서 언급될 수 있습니다.",
  },
  {
    id: "ocular-ultrasound",
    name: "안구 초음파 촬영기",
    role: "초음파로 안축장 등 눈 구조를 확인하는 데 사용되는 검사 장비로 안내됩니다.",
  },
  {
    id: "surgical-microscope",
    name: "수술용 현미경",
    role: "수술 중 눈을 확대·선명하게 보기 위한 장비로 안내됩니다.",
  },
  {
    id: "oct",
    name: "시신경 및 망막 CT 촬영 OCT",
    role: "시신경·망막 단층 촬영으로 동반 질환 여부를 살피는 데 쓰이는 검사 장비로 안내됩니다.",
  },
] as const;
