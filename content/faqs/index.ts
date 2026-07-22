import { CAUTION_FAQS } from "@/content/faqs/caution";
import { COMMON_FAQS } from "@/content/faqs/common";
import { COST_FAQS } from "@/content/faqs/cost";
import { EXTRA_FAQS } from "@/content/faqs/extra";
import { getHospitalLocationFaqs } from "@/content/faqs/hospital-location";
import { HOSPITAL_FAQS } from "@/content/faqs/hospital";
import { HUB_FAQS } from "@/content/faqs/hub";
import { FAQ_QUESTIONS_30 } from "@/content/faqs/questions-30";
import { RECOVERY_FAQS } from "@/content/faqs/recovery";
import { REVIEW_FAQS } from "@/content/faqs/review";
import type { FaqItem } from "@/types/faq";

const ALL_FAQS: FaqItem[] = [
  ...COMMON_FAQS,
  ...COST_FAQS,
  ...RECOVERY_FAQS,
  ...CAUTION_FAQS,
  ...HOSPITAL_FAQS,
  ...REVIEW_FAQS,
  ...EXTRA_FAQS,
  ...HUB_FAQS,
  ...FAQ_QUESTIONS_30,
  ...getHospitalLocationFaqs(),
];

const FAQ_BY_ID = new Map(ALL_FAQS.map((item) => [item.id, item]));

export function getFaqById(id: string): FaqItem | undefined {
  return FAQ_BY_ID.get(id);
}

export function getFaqsByIds(ids: string[]): FaqItem[] {
  return ids
    .map((id) => FAQ_BY_ID.get(id))
    .filter((item): item is FaqItem => Boolean(item));
}

export function getFaqsByCategory(category: string): FaqItem[] {
  return ALL_FAQS.filter((item) => item.categories.includes(category)).sort(
    (a, b) => a.order - b.order,
  );
}

export function getAllFaqs(): FaqItem[] {
  return [...ALL_FAQS].sort((a, b) => a.order - b.order);
}

/** FAQ 통합 페이지 그룹별 ID (화면·JSON-LD 동일 원본) */
export const FAQ_HUB_GROUPS = [
  {
    id: "faq-diff",
    numberLabel: "01",
    heading: "노안과 백내장 차이",
    directAnswer:
      "노안과 백내장은 원인이 다른 변화·질환이며, 함께 나타날 수 있어 검사로 구분하는 과정이 필요합니다.",
    paragraphs: [
      "가까운 거리 초점 조절이 떨어지는 변화와 수정체 혼탁으로 시야가 흐려지는 상태는 관리 방향이 달라질 수 있습니다. 증상만으로 단정하지 말고 검사 결과를 함께 확인하세요.",
    ],
    faqIds: [
      "common-01",
      "hub-diff-01",
      "hub-diff-02",
      "hub-diff-03",
      "hub-diff-04",
    ],
  },
  {
    id: "faq-symptoms",
    numberLabel: "02",
    heading: "증상과 검사",
    directAnswer:
      "시야가 뿌옇거나 빛 번짐이 커지고, 안경을 바꿔도 선명함이 기대만큼 돌아오지 않을 때 검사를 고려하는 경우가 많습니다.",
    paragraphs: [
      "야간 운전 불편, 근거리 피로, 밝은 곳에서의 흐림 등 불편이 지속되면 원인을 구분하기 위한 검사가 도움이 될 수 있습니다.",
    ],
    faqIds: [
      "common-02",
      "extra-01",
      "hub-symptom-01",
      "hub-symptom-02",
      "hub-symptom-03",
      "hub-symptom-04",
    ],
  },
  {
    id: "faq-cost-lens",
    numberLabel: "03",
    heading: "수술비용과 렌즈",
    directAnswer:
      "수술비용은 검사·렌즈·수술 범위·사후관리 구성에 따라 달라질 수 있으며, 렌즈는 생활 패턴과 눈 상태에 맞춰 비교합니다.",
    paragraphs: [
      "총액뿐 아니라 포함·제외 항목과 한쪽·양쪽 기준을 구분해 보세요. 단초점과 다초점·연속초점은 초점 범위와 적응 특성이 다를 수 있습니다.",
    ],
    faqIds: [
      "common-03",
      "common-04",
      "cost-01",
      "hub-cost-01",
      "hub-cost-02",
      "hub-cost-03",
      "hub-cost-04",
      "hub-cost-05",
    ],
  },
  {
    id: "faq-recovery-life",
    numberLabel: "04",
    heading: "회복기간과 일상생활",
    directAnswer:
      "회복 속도와 일상 복귀 시점은 개인차가 있으며, 세안·운전·운동과 안약 사용은 의료진 안내를 우선합니다.",
    paragraphs: [
      "수술 직후 이물감·눈부심·건조감이 나타날 수 있고, 다초점 렌즈는 적응에 더 긴 시간이 필요할 수 있습니다.",
    ],
    faqIds: [
      "common-05",
      "recovery-01",
      "hub-recovery-01",
      "hub-recovery-02",
      "hub-recovery-03",
      "hub-recovery-04",
      "hub-recovery-05",
    ],
  },
  {
    id: "faq-caution",
    numberLabel: "05",
    heading: "수술 전후 주의사항",
    directAnswer:
      "검사 전 준비, 당일 안내, 수술 후 생활 관리와 이상 증상 확인을 구분해 살펴보는 편이 안전합니다.",
    paragraphs: [
      "복용 약·기존 질환·알레르기를 미리 알리고, 안약·세안·운동·외출은 안내 범위를 따르는 것이 중요합니다.",
    ],
    faqIds: [
      "caution-01",
      "caution-02",
      "hub-caution-01",
      "hub-caution-02",
      "hub-caution-03",
      "hub-caution-04",
      "hub-caution-05",
    ],
  },
  {
    id: "faq-hospital",
    numberLabel: "06",
    heading: "병원선택",
    directAnswer:
      "병원은 검사 설명·렌즈 상담·비용 투명성·사후관리를 기준으로 비교하는 편이 도움이 됩니다.",
    paragraphs: [
      "특정 병원 우월성을 단정하기 어렵습니다. 검사와 상담에서 본인에게 맞는 설명을 확인하세요.",
    ],
    faqIds: [
      "common-06",
      "hospital-01",
      "hub-hospital-01",
      "hub-hospital-02",
      "hub-hospital-03",
      "hub-hospital-04",
      "hub-hospital-05",
    ],
  },
  {
    id: "faq-reviews",
    numberLabel: "07",
    heading: "후기와 개인차",
    directAnswer:
      "후기는 참고 자료이며, 작성자와 본인의 조건이 다르면 같은 경험이 반복된다고 보기 어렵습니다.",
    paragraphs: [
      "수술 전 상태·렌즈·회복 과정이 구체적으로 적혔는지, 광고·과장 표현은 없는지 구분하는 편이 안전합니다.",
    ],
    faqIds: [
      "review-01",
      "review-02",
      "hub-review-01",
      "hub-review-02",
      "hub-review-03",
      "hub-review-04",
      "hub-review-05",
    ],
  },
  {
    id: "faq-misc",
    numberLabel: "08",
    heading: "기타 자주 묻는 질문",
    directAnswer:
      "렌즈 적응, 난시, 양안 수술 간격, 회복 중 불편처럼 자주 이어지는 질문은 아래를 참고하세요.",
    paragraphs: [
      "같은 질문이라도 검사 결과와 생활 방식에 따라 확인해야 할 내용이 달라질 수 있습니다.",
    ],
    faqIds: [
      "extra-02",
      "extra-03",
      "extra-04",
      "extra-05",
      "extra-06",
      "cost-04",
      "recovery-03",
    ],
  },
] as const;

/** @deprecated FAQ_HUB_GROUPS 사용 */
export const FAQ_PAGE_IDS = FAQ_HUB_GROUPS.flatMap(
  (group) => group.faqIds,
) as readonly string[];

export {
  COMMON_FAQS,
  COST_FAQS,
  RECOVERY_FAQS,
  CAUTION_FAQS,
  HOSPITAL_FAQS,
  REVIEW_FAQS,
  EXTRA_FAQS,
  HUB_FAQS,
  FAQ_QUESTIONS_30,
};
