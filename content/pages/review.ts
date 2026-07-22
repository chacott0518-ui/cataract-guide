import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const REVIEW_PAGE: ContentPage = {
  id: "reviews",
  order: 5,
  numberLabel: "05",
  slug: "노안백내장-후기",
  href: ROUTES.reviews,
  navLabel: "노안백내장 후기",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 후기",

  heading: "노안백내장 후기, 어떤 내용을 확인해야 할까요?",
  intro: [
    "노안백내장 후기는 다른 사람의 경험을 참고하는 자료일 뿐, 의료 판단을 대체하지 않습니다. 이 페이지는 가상 환자 후기를 작성하지 않으며, 온라인 후기를 볼 때 확인하면 좋은 기준을 안내합니다.",
    "비용·회복·렌즈·야간 시야·상담 과정이 함께 적힌 내용을 우선 살펴보고, 결과만 강조하거나 광고 여부가 불분명한 글은 거리를 두고 읽는 편이 안전합니다.",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-22",
  faqIds: [
    "review-01",
    "review-02",
    "review-03",
    "review-04",
    "review-05",
  ],
  faqTitle: "노안백내장 후기 자주 묻는 질문",
  conclusion: [
    "노안백내장 후기는 참고 자료입니다. 수술 전 상태, 렌즈 종류, 회복 과정, 비용·관리 경험이 구체적으로 적힌 글을 우선 확인하고, 과장된 결과 강조나 광고 표시가 없는 홍보성 글은 신중히 구분하세요.",
    "후기 작성자와 본인의 눈 상태·생활 패턴이 다를 수 있으므로, 중요한 질문은 검사와 상담에서 확인하세요. 이 페이지는 가짜 후기나 성공 사례를 제시하지 않습니다.",
  ],
  thumbnail: TOPIC_MEDIA.reviews.thumbnail,
  topImages: [TOPIC_MEDIA.reviews.thumbnail],
  bodyImage: TOPIC_MEDIA.reviews.secondaryImage,
  heroImage: TOPIC_MEDIA.reviews.thumbnail,
  secondaryImage: TOPIC_MEDIA.reviews.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.reviews.secondaryImage,
  accentColor: TOPIC_MEDIA.reviews.accentColor,
  accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  seo: {
    title:
      "노안백내장 후기 | 확인 기준과 개인차",
    description:
      "노안백내장 후기를 볼 때 확인하면 좋은 내용과 과장 표현 구분, 검사·상담과 함께 보는 이유를 정리합니다.",
    keywords: [
      "노안백내장 후기",
      "백내장 수술 후기",
      "다초점 렌즈 후기",
      "백내장 회복 후기",
      "인공수정체 후기",
      "백내장 수술 개인차",
    ],
    ogImage: TOPIC_MEDIA.reviews.thumbnail.src,
    category: SITE.categoryLabel,
  },
  sections: [
        {
      id: "review-why",
      order: 1,
      numberLabel: "01",
      heading: "노안백내장 후기를 찾는 이유는 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "많은 사람이 후기에서 비용 구성, 회복기간, 렌즈 선택, 야간 시야 적응, 상담·관리 과정을 참고하려 합니다. 다만 개인의 조건이 다르면 같은 경험이 반복된다고 보기 어렵습니다.",
      paragraphs: [
        "후기는 '무엇이 가능했는지'보다 '어떤 조건에서 어떤 과정을 거쳤는지'를 보는 자료로 활용하는 편이 오해를 줄입니다.",
        "금액·일정·결과만 요약된 글보다, 수술 전 상태와 포함 항목이 드러난 글을 우선 확인하세요.",
      ],
      infoBlocks: [
        {
          label: "비용",
          text: "포함 항목과 추가 비용 확인",
        },
        {
          label: "회복기간",
          text: "일상 복귀 과정 확인",
        },
        {
          label: "렌즈",
          text: "선택한 렌즈와 초점 범위 확인",
        },
        {
          label: "야간 시야",
          text: "빛 번짐과 적응 과정 확인",
        },
        {
          label: "병원 상담",
          text: "상담과 관리 과정 확인",
        },
        {
          label: "사후관리",
          text: "경과 확인과 이상 증상 대응 확인",
        },
      ],
    },
        {
      id: "review-mentions",
      order: 2,
      numberLabel: "02",
      heading: "후기에서는 어떤 내용이 자주 언급되나요?",
      layout: "info-grid",
      directAnswer:
        "유용한 후기에는 수술 전 눈 상태, 선택한 렌즈, 회복 과정, 시야 적응, 야간 운전, 비용 구성, 사후관리가 함께 언급되는 경우가 많습니다.",
      paragraphs: [
        "렌즈명·기능 범위가 없고 결과만 적힌 글은 비교 기준으로 쓰기 어렵습니다. 회복 중 불편과 적응 기간이 구체적으로 적혀 있는지도 함께 보세요.",
        "비용은 총액뿐 아니라 검사·약제·재진 포함 여부가 드러나는지가 중요합니다.",
      ],
      infoBlocks: [
        {
          label: "수술 전 눈 상태",
          text: "수술 전 눈 상태와 검토 배경",
        },
        {
          label: "선택한 렌즈 종류",
          text: "선택한 렌즈 종류와 초점 범위",
        },
        {
          label: "회복 과정",
          text: "회복 과정과 일상 복귀 시점",
        },
        {
          label: "시야 적응",
          text: "시야 적응과 초점 변화",
        },
        {
          label: "야간 운전",
          text: "야간 운전과 빛 번짐 경험",
        },
        {
          label: "비용 구성",
          text: "비용 구성과 포함·제외 항목",
        },
        {
          label: "사후관리",
          text: "사후관리와 경과 확인 경험",
        },
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "노안백내장 수술비용 자세히 보기",
    },
        {
      id: "review-caution",
      order: 3,
      numberLabel: "03",
      heading: "후기를 볼 때 무엇을 주의해야 하나요?",
      layout: "compare-table",
      directAnswer:
        "개인 상태·렌즈·회복 과정이 구체적으로 적히고 개인차를 인정하는 글은 참고 가치가 높고, 결과만 강조하거나 광고 여부가 불분명한 글은 신중히 구분해야 합니다.",
      paragraphs: [
        "'바로', '완전', '모두 동일'처럼 단정하는 표현이 많으면 기대와 실제가 어긋나기 쉽습니다. 협찬·광고 표시 여부도 함께 확인하세요.",
        "별점·전후 사진·성공 사례만으로 판단을 대체하지 않는 것이 좋습니다.",
      ],
      compareHeaders: ["참고 가치가 높은 후기", "주의해서 볼 후기"],
      compareRows: [
        {
          criterion: "개인 상태",
          left: "개인 상태가 설명됨",
          right: "결과만 과도하게 강조",
        },
        {
          criterion: "렌즈 정보",
          left: "렌즈 종류가 명확함",
          right: "렌즈 정보가 없음",
        },
        {
          criterion: "회복 과정",
          left: "회복 과정이 구체적임",
          right: "즉각적인 효과만 강조",
        },
        {
          criterion: "광고 표시",
          left: "광고·협찬 표시가 있음",
          right: "광고 여부가 불분명",
        },
        {
          criterion: "개인차",
          left: "개인차를 인정함",
          right: "모두에게 같은 결과를 암시",
        },
      ],
    },
        {
      id: "review-with-exam",
      order: 4,
      numberLabel: "04",
      heading: "상담과 검사 내용을 함께 확인해야 하는 이유는 무엇인가요?",
      layout: "steps",
      directAnswer:
        "후기 작성자와 본인의 눈 상태, 렌즈 적합성, 생활 패턴이 다를 수 있어 후기만으로는 수술·렌즈 선택을 결정하기 어렵습니다. 검사와 상담으로 확인해야 합니다.",
      paragraphs: [
        "같은 렌즈라도 망막·각막 상태, 동공 크기, 야간 활동량에 따라 체감이 달라질 수 있습니다. 후기에서 궁금한 점을 질문 목록으로 만들어 상담에 가져가면 도움이 됩니다.",
        "이 사이트는 가상 환자 후기, 가짜 인용문, 별점, 전후 사진, 수술 성공 사례를 제공하지 않습니다.",
      ],
      steps: [
        {
          label: "01 후기에서 조건 확인",
          text: "후기에 적힌 렌즈·비용·회복 조건을 정리합니다.",
        },
        {
          label: "02 검사 결과와 구분",
          text: "본인 검사 결과와 후기 조건의 차이를 구분합니다.",
        },
        {
          label: "03 생활 우선순위 정리",
          text: "야간 운전·근거리 작업 등 생활 우선순위를 정리합니다.",
        },
        {
          label: "04 상담에서 질문 정리",
          text: "포함 항목·사후관리를 견적과 함께 상담에서 확인합니다.",
        },
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "노안백내장 병원선택 기준 보기",
    },
  ],
};
