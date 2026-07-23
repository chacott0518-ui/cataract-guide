import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const RECOVERY_PAGE: ContentPage = {
  id: "recovery",
  order: 2,
  numberLabel: "02",
  slug: "노안백내장-회복기간",
  href: ROUTES.recovery,
  navLabel: "노안백내장 회복기간",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 회복기간",

  heading: "노안백내장 회복기간, 일상 복귀는 언제 가능할까요?",
  intro: [
    "노안백내장 수술 후 회복 속도는 기존 눈 상태, 렌즈 종류, 양안 수술 일정과 생활 방식에 따라 달라질 수 있습니다. 다른 사람의 일정과 동일하게 맞추기보다 자신의 경과와 의료진 안내를 기준으로 일상 복귀 시점을 확인해야 합니다.",
    "수술 직후의 불편, 세안·운전·운동 재개, 시야 적응과 경과 관찰은 단계적으로 확인하는 편이 안전합니다. 특정 기간 안에 결과가 나온다고 보장할 수는 없습니다.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-22",
  faqIds: [
    "recovery-01",
    "recovery-02",
    "recovery-03",
    "recovery-04",
    "recovery-05",
  ],
  faqTitle: "노안백내장 회복기간 자주 묻는 질문",
  conclusion: [
    "노안백내장 회복기간은 개인차가 큽니다. 기존 눈 상태, 렌즈 적응, 양안 일정과 생활 환경에 따라 체감 속도가 달라질 수 있으므로, 다른 사람의 일정과 비교하기보다 의료진 안내와 본인 경과를 기준으로 삼으세요.",
    "세안·운전·운동은 허용 시점과 시야·불편 정도를 함께 확인한 뒤 단계적으로 재개하고, 갑작스러운 시력 변화나 심한 통증이 있으면 안내받은 연락 방법으로 확인하세요. 이 페이지는 일반 정보 안내입니다.",
  ],
  thumbnail: TOPIC_MEDIA.recovery.thumbnail,
  topImages: [TOPIC_MEDIA.recovery.thumbnail],
  bodyImage: TOPIC_MEDIA.recovery.secondaryImage,
  heroImage: TOPIC_MEDIA.recovery.thumbnail,
  secondaryImage: TOPIC_MEDIA.recovery.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.recovery.secondaryImage,
  accentColor: TOPIC_MEDIA.recovery.accentColor,
  accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  seo: {
    title: "노안백내장 회복기간 | 노안백내장",
    description:
      "노안백내장 회복기간은 개인차가 있으며, 세안·운전·운동 등 일상 복귀 시점과 경과 확인 시 살펴볼 점을 안내합니다.",
    keywords: [
      "노안백내장 회복기간",
      "백내장 수술 회복",
      "백내장 수술 후 일상생활",
      "백내장 수술 후 관리",
      "백내장 수술 후 운전",
    ],
    ogImage: TOPIC_MEDIA.recovery.thumbnail.src,
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "recovery-individual",
      order: 1,
      numberLabel: "01",
      heading: "노안백내장 수술 회복 일정에는 개인차가 있을까요?",
      layout: "info-grid",
      directAnswer:
        "회복 속도는 건조증, 각막·망막 상태, 렌즈 종류, 양안 수술 간격과 기존 안과 질환 등에 따라 달라질 수 있습니다. 특정 기간에 모든 회복이 끝난다고 단정하기는 어렵습니다.",
      paragraphs: [
        "다초점·연속초점 렌즈를 선택한 경우에는 초점 적응에 더 긴 시간이 필요할 수 있습니다. 당뇨·고혈압 등 전신 질환, 이전 안과 수술 이력, 사용 중인 안약·전신 약물도 상담 시 함께 알리는 것이 좋습니다.",
        "양안을 나누어 수술하면 한쪽 경과를 보며 다른 쪽 일정을 조정할 수 있어, 전체 회복 감각이 한쪽만 수술한 경우와 다를 수 있습니다.",
      ],
      infoBlocks: [
        {
          label: "기존 눈 상태",
          text: "건조증·각막·망막 상태에 따라 체감 속도가 달라질 수 있습니다.",
        },
        {
          label: "렌즈 종류",
          text: "초점 적응과 생활 방식에 따라 회복 감각이 달라질 수 있습니다.",
        },
        {
          label: "수술 일정",
          text: "한쪽·양쪽 수술 간격이 전체 회복 감각에 영향을 줄 수 있습니다.",
        },
        {
          label: "생활·약물",
          text: "운전·근거리 작업과 복용 약물도 함께 확인합니다.",
        },
      ],
    },
    {
      id: "recovery-immediate",
      order: 2,
      numberLabel: "02",
      heading: "수술 직후에는 어떤 변화가 나타날 수 있나요?",
      layout: "timeline",
      directAnswer:
        "수술 직후에는 이물감, 눈부심, 건조감, 흐릿함 등이 나타날 수 있으며, 보호 안경·안약 사용과 초점 적응 과정은 개인차가 있습니다.",
      paragraphs: [
        "당일에는 눈꺼풀 무거움으로 눈을 자주 감게 될 수 있고, 안내받은 자세로 휴식하는 경우가 많습니다. 시간이 지나며 완화되는 사례가 많지만, 모든 사람에게 같은 경험이 나타나지는 않습니다.",
        "처방 안약 사용법, 눈 비비기 금지, 보호 안경·안대 착용 방법을 지키는 것이 초기 관리의 기본입니다. 정상·비정상을 스스로 단정하기보다, 안내 범위와 다른 변화가 있으면 재진에서 확인하세요.",
      ],
      timeline: [
        {
          label: "당일",
          text: "이물감·눈꺼풀 무거움, 보호 안경·안약 사용 시작",
        },
        {
          label: "초기",
          text: "눈부심·건조감·흐릿함이 나타날 수 있음",
        },
        {
          label: "적응 과정",
          text: "초점 적응에 따른 불편은 개인차 있음",
        },
        {
          label: "확인 시점",
          text: "안내와 다른 변화가 있으면 재진에서 확인",
        },
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 자세히 보기",
    },
    {
      id: "recovery-activity",
      order: 3,
      numberLabel: "03",
      heading: "세안·운전·운동은 언제부터 확인해야 하나요?",
      layout: "responsive-table",
      directAnswer:
        "세안·샤워, 운전, 운동, 음주, 업무 복귀 시점은 개인 경과와 의료진 안내에 따라 달라질 수 있습니다. 날짜만 기억하기보다 시야·불편 정도를 함께 확인하세요.",
      paragraphs: [
        "물·비누·샴푸가 눈에 들어가지 않도록 하는 안내가 흔하며, 수영·사우나처럼 물·고온 노출이 긴 활동은 허용 시점까지 미루는 경우가 많습니다.",
        "야간 운전은 빛 번짐이 실제 운전에 지장을 주는지 스스로 점검하고, 화면 작업이 많은 업무는 사용 시간을 나누어 조절하는 편이 안내될 수 있습니다.",
      ],
      table: {
        caption: "생활 활동 재개 시 확인 포인트",
        mobileMode: "cards",
        columns: [
          { key: "activity", label: "활동" },
          { key: "point", label: "확인 포인트" },
        ],
        rows: [
          {
            activity: "세안·샤워",
            point: "눈에 물이 직접 닿지 않도록 안내에 따라 확인",
          },
          {
            activity: "운전",
            point: "시야와 눈부심 상태를 확인한 뒤 판단",
          },
          {
            activity: "운동",
            point: "강도와 충격 가능성을 고려해 단계적으로 시작",
          },
          {
            activity: "음주",
            point: "회복과 약 사용 상태를 고려해 안내 확인",
          },
          {
            activity: "업무",
            point: "화면 사용 시간과 업무 강도에 따라 조절",
          },
        ],
      },
    },
    {
      id: "recovery-urgent",
      order: 4,
      numberLabel: "04",
      heading: "회복 중 어떤 증상은 의료진에게 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "갑작스러운 시력 변화, 심해지는 통증, 충혈 변화, 한쪽 눈의 뚜렷한 변화처럼 안내받은 회복 과정과 다른 증상은 지체 없이 확인하는 것이 좋습니다.",
      paragraphs: [
        "가벼운 이물감·건조감과 구분해서 안내받는 것이 중요합니다. 응급·야간 연락 방법을 미리 저장해 두면 증상 변화 시 판단이 수월합니다.",
        "회복이 더뎌 느껴져도 모든 경우가 문제를 의미하지는 않지만, 불안한 변화는 안내받은 절차대로 확인하세요. 정기 경과 관찰에서는 시력·염증·안압과 생활 재개 범위도 함께 점검할 수 있습니다.",
      ],
      bullets: [
        "갑작스러운 시력 변화",
        "심해지는 통증",
        "충혈 변화",
        "지속되는 불편",
        "한쪽 눈의 뚜렷한 변화",
        "안내받은 회복 과정과 다른 변화",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "노안백내장 주의사항 자세히 보기",
    },
  ],
};
