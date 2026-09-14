import { CLINIC } from "@/config/clinic";

/**
 * 병원 이용·위치 FAQ.
 * HOME head-query OWNER와 충돌하지 않도록 병원 이용정보만 담는다.
 */
export type HospitalFaqConfig = {
  enabled: boolean;
  hospitalName: string;
  address: string;
  nearestStation: string;
  directions: string;
  parking: string;
  phone: string;
  consultationHours: string;
  reservationPolicy: string;
};

export const hospitalFaq: HospitalFaqConfig = {
  enabled: true,
  hospitalName: CLINIC.name,
  address: `${CLINIC.name} 위치는 ${CLINIC.address}입니다.`,
  nearestStation: `${CLINIC.nearestStation}. ${CLINIC.directions}`,
  directions: CLINIC.directions,
  parking: CLINIC.parking,
  phone: `대표전화 ${CLINIC.phoneDisplay}으로 상담·일정 안내를 받을 수 있습니다.`,
  consultationHours: CLINIC.hoursNote,
  reservationPolicy:
    "온라인 예약·상담신청은 실시간 확정이 아닐 수 있습니다. 신청 후 병원 안내(카카오톡·문자 등)로 일정이 확정되는지 확인하는 것이 안전합니다. 세부 안내는 공식 온라인예약·상담신청 페이지를 따릅니다.",
};
