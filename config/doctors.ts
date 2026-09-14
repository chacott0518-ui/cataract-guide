/**
 * 에스앤비안과 의료진 — PerfectVision data/hospital/doctors.ts
 * (출처 주석: snbeye.com/medical-staff 확인분)
 * 검수자(reviewer) 전용 연결은 사용하지 않는다. 송은석은 일반 의료진으로만 표시.
 */
export type ClinicDoctor = {
  id: string;
  name: string;
  role: string;
  specialties: readonly string[];
  highlights: readonly string[];
  imageSrc: string;
  imageAlt: string;
  detailHref: string;
};

const MEDICAL_STAFF_URL = "https://snbeye.com/medical-staff/" as const;

export const CLINIC_DOCTORS: readonly ClinicDoctor[] = [
  {
    id: "yoo-seungyeol",
    name: "유승열",
    role: "대표원장",
    specialties: ["안과전문의"],
    highlights: [
      "한양대학교 의과대학 안과 전문의",
      "1998 레이저 시력교정술 시작",
      "시력교정술 경력 29년 (스마일라식 도입 13년)",
      "독일 자이스 인증 스마일닥터",
    ],
    imageSrc: "/images/snb/doctors/doctor-yoo-seungyeol.webp",
    imageAlt: "에스앤비안과의원 유승열 대표원장",
    detailHref: MEDICAL_STAFF_URL,
  },
  {
    id: "gu-bonhyeok",
    name: "구본혁",
    role: "원장",
    specialties: ["안과전문의"],
    highlights: [
      "(전) 중앙보훈병원 안과 외안부, 성형안과 전임의",
      "(전) 인천보훈병원 안과 부장",
      "(현) 한국 백내장 굴절 수술학회(KSCRS) 정회원",
      "NAVER 지식IN 건강 의학 상담 위촉의",
    ],
    imageSrc: "/images/snb/doctors/doctor-gu-bonhyeok.webp",
    imageAlt: "에스앤비안과의원 구본혁 원장",
    detailHref: MEDICAL_STAFF_URL,
  },
  {
    id: "song-eunseok",
    name: "송은석",
    role: "원장",
    specialties: ["안과전문의"],
    highlights: [
      "(현) 대한안과학회 정회원",
      "(현) 한국 백내장 굴절 수술학회(KSCRS) 정회원",
      "(현) 미국 백내장 굴절 수술학회 정회원",
      "(전) 이연안과 원장",
    ],
    imageSrc: "/images/snb/doctors/doctor-song-eunseok.webp",
    imageAlt: "에스앤비안과의원 송은석 원장",
    detailHref: MEDICAL_STAFF_URL,
  },
] as const;
