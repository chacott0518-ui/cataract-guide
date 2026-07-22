import type { FaqItem } from "@/types/faq";
import { hospitalFaq } from "@/config/hospital-faq";

/**
 * 병원 위치·진료 FAQ.
 * hospitalFaq.enabled가 true이고 값이 채워진 항목만 생성한다.
 */
export function getHospitalLocationFaqs(): FaqItem[] {
  if (!hospitalFaq.enabled) return [];

  const items: FaqItem[] = [];

  if (hospitalFaq.address) {
    items.push({
      id: "hospital-loc-address",
      order: 90,
      question: "병원 위치는 어디인가요?",
      answer: hospitalFaq.address,
      categories: ["hospital-location"],
    });
  }

  if (hospitalFaq.nearestStation) {
    items.push({
      id: "hospital-loc-station",
      order: 91,
      question: "가까운 지하철역은 어디인가요?",
      answer: hospitalFaq.nearestStation,
      categories: ["hospital-location"],
    });
  }

  if (hospitalFaq.parking) {
    items.push({
      id: "hospital-loc-parking",
      order: 92,
      question: "주차가 가능한가요?",
      answer: hospitalFaq.parking,
      categories: ["hospital-location"],
    });
  }

  if (hospitalFaq.consultationHours) {
    items.push({
      id: "hospital-loc-hours",
      order: 93,
      question: "상담 가능한 시간은 언제인가요?",
      answer: hospitalFaq.consultationHours,
      categories: ["hospital-location"],
    });
  }

  if (hospitalFaq.reservationPolicy) {
    items.push({
      id: "hospital-loc-reservation",
      order: 94,
      question: "예약 없이 방문할 수 있나요?",
      answer: hospitalFaq.reservationPolicy,
      categories: ["hospital-location"],
    });
  }

  if (hospitalFaq.phone) {
    items.push({
      id: "hospital-loc-phone",
      order: 95,
      question: "병원에 전화로 문의할 수 있나요?",
      answer: hospitalFaq.phone,
      categories: ["hospital-location"],
    });
  }

  return items;
}
