import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const IMAGE = {
  src: "/images/og/cataractguide-kakao.png",
  alt: "노안백내장 수술 후 빛번짐 눈부심 확인 안내",
  width: 1200,
  height: 630,
} as const;

export const GLARE_CHECK_PAGE: ContentPage = {
  id: "glareCheck",
  order: 141,
  numberLabel: "01",
  slug: "노안백내장-수술-후-빛번짐-눈부심",
  href: ROUTES.glareCheck,
  navLabel: "노안백내장 수술 후 빛번짐·눈부심",
  categoryLabel: SITE.categoryLabel,
  h1: "노안백내장 수술 후 빛번짐·눈부심, 어떻게 확인하나요?",
  heading: "노안백내장 수술 후 빛번짐·눈부심, 어떻게 확인하나요?",
  breadcrumbLabel: "노안백내장 수술 후 빛번짐·눈부심",
  infoTopicLabel: "경과·주의",
  infoCardDescription:
    "수술 후 나타날 수 있는 빛번짐·눈부심의 일반적인 경과와 확인이 필요한 상황을 안내합니다.",
  intro: [
    "노안백내장 수술 후에는 야간 조명 주변에 번짐이 보이거나 밝은 빛에 눈부심이 커지는 변화를 느낄 수 있습니다. 이런 변화가 있다는 것 자체만으로 문제가 있다고 단정할 수는 없지만, 정도와 지속 기간을 관찰하는 것이 중요합니다.",
    "이 글은 빛번짐·눈부심의 일반적인 경과와 확인이 필요한 상황을 정리한 의료정보이며, 개인별 증상의 원인을 스스로 진단하는 자료가 아닙니다.",
  ],
  hubContextLink: {
    before: "빛번짐 외에 시력 변화 전반까지 함께 보려면 ",
    anchor: "노안백내장 종합 안내",
    after: "에서 확인할 수 있습니다.",
    href: "/",
  },
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "glare-check-01",
    "glare-check-02",
    "glare-check-03",
    "glare-check-04",
    "glare-check-05",
  ],
  faqTitle: "노안백내장 수술 후 빛번짐·눈부심 자주 묻는 질문",
  conclusion: [
    "빛번짐·눈부심은 렌즈 종류와 회복 단계에 따라 나타날 수 있는 변화로 알려져 있으며, 정도와 지속 기간은 개인차가 있습니다. 심하거나 오래 지속되면 자가 판단보다 시술받은 의료기관에 확인하는 것이 안전합니다.",
    "이 글은 일반적인 의료정보 제공을 목적으로 하며 개인의 진단·치료 결정을 대신하지 않습니다.",
  ],
  thumbnail: IMAGE,
  topImages: [],
  bodyImage: null,
  heroImage: IMAGE,
  secondaryImage: null,
  repeatImage: null,
  inlineImage: IMAGE,
  accentColor: "#1758C9",
  accentHoverColor: "#0D3F99",
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  showPublishedDate: true,
  repeatImageBeforeSectionNumber: null,
  relatedGuideIds: ["lensTypeCheck", "visionChangeObservation", "symptomCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "일반적 변화",
      text: "야간 조명 주변 번짐은 회복 과정에서 나타날 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "렌즈 특성",
      text: "다초점 렌즈는 관련 특성이 함께 언급되는 경우가 있습니다.",
    },
    {
      numberLabel: "03",
      title: "관찰 방법",
      text: "정도와 지속 기간을 기록해 두면 상담에 도움이 됩니다.",
    },
    {
      numberLabel: "04",
      title: "확인 시점",
      text: "심하거나 지속되면 자가 판단보다 문의를 우선합니다.",
    },
  ],
  seo: {
    title: "노안백내장 수술 후 빛번짐·눈부심, 어떻게 확인하나요? | 노안백내장",
    description:
      "노안백내장 수술 후 빛번짐·눈부심의 일반적인 경과와 확인이 필요한 상황을 안내합니다.",
    keywords: [
      "노안백내장 수술 후 빛번짐",
      "백내장 수술 후 눈부심",
      "다초점렌즈 야간 빛번짐",
      "백내장 수술 후 야간 시야",
    ],
    ogImage: "/images/og/cataractguide-kakao.png",
    socialImage: "/images/og/cataractguide-kakao.png",
    category: SITE.categoryLabel,
  },
  officialSources: [...INFO_GUIDE_OFFICIAL_SOURCES],
  sections: [
    {
      id: "glare-check-general",
      order: 1,
      numberLabel: "01",
      heading: "빛번짐·눈부심은 왜 나타날 수 있나요?",
      layout: "prose",
      decorativeIcon: "💡",
      directAnswer:
        "인공수정체 삽입과 회복 과정에서 야간 조명 주변에 번짐이나 눈부심이 일시적으로 나타날 수 있다고 알려져 있습니다. 렌즈 종류에 따라 관련 특성이 다르게 설명되기도 합니다.",
      paragraphs: [
        "특히 다초점 인공수정체는 설계 특성상 야간 빛 번짐이 함께 언급되는 경우가 있습니다. 다만 정도는 개인마다 다르게 나타날 수 있어 모든 사람이 동일하게 겪는다고 단정할 수 없습니다.",
        "초기 회복 단계에서 느껴지는 변화가 시간이 지나며 줄어드는 경우도 있다고 알려져 있지만, 이 역시 개인차가 있는 사안입니다.",
      ],
      relatedHref: ROUTES.lensTypeCheck,
      relatedLabel: "노안백내장 단초점·다초점 차이 보기",
    },
    {
      id: "glare-check-observe",
      order: 2,
      numberLabel: "02",
      heading: "어떻게 관찰하면 좋은가요?",
      layout: "checklist",
      decorativeIcon: "📝",
      directAnswer:
        "언제 어떤 상황에서 나타나는지, 정도가 심해지는지 줄어드는지, 일상생활에 미치는 영향을 기록해 두면 상담에서 설명하기 수월해집니다.",
      paragraphs: [
        "특정 조명 환경에서만 나타나는지, 낮에도 지속되는지 구분해 기록하면 의료진이 상태를 파악하는 데 참고가 될 수 있습니다.",
      ],
      bullets: [
        "야간 운전 시에만 나타나는지, 실내에서도 느껴지는지",
        "시간이 지나며 정도가 변화하는지",
        "일상생활(운전, 독서 등)에 미치는 영향",
        "함께 나타나는 다른 증상이 있는지",
      ],
      relatedHref: ROUTES.visionChangeObservation,
      relatedLabel: "노안백내장 수술 후 시력 변화 관찰 보기",
    },
    {
      id: "glare-check-confirm",
      order: 3,
      numberLabel: "03",
      heading: "언제 의료기관에 확인해야 하나요?",
      layout: "prose",
      decorativeIcon: "⚠️",
      directAnswer:
        "빛번짐·눈부심이 일상생활에 큰 지장을 줄 정도로 심하거나, 시간이 지나도 나아지지 않고 오히려 심해진다면 자가 판단보다 시술받은 의료기관에 확인하는 것이 안전합니다.",
      paragraphs: [
        "이 증상이 정상적인 범위인지, 추가 확인이 필요한 상황인지는 스스로 단정하기 어려운 경우가 많으므로, 걱정되는 정도라면 상담을 통해 직접 확인하는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.symptomCheck,
      relatedLabel: "노안백내장 수술 후 이상증상 확인 보기",
    },
    {
      id: "glare-check-driving",
      order: 4,
      numberLabel: "04",
      heading: "빛번짐이 운전에도 영향을 주나요?",
      layout: "prose",
      decorativeIcon: "🚗",
      directAnswer:
        "야간 운전은 빛번짐·눈부심의 영향을 더 크게 받을 수 있는 활동으로 알려져 있어, 관련 증상이 남아 있다면 야간 운전 재개 시점을 더 신중하게 판단하는 것이 좋습니다.",
      paragraphs: [
        "운전 재개와 관련한 전반적인 확인 기준은 별도 안내에서 더 자세히 다룹니다.",
      ],
      relatedHref: ROUTES.drivingResumeCheck,
      relatedLabel: "노안백내장 수술 후 운전 재개 확인 보기",
    },
  ],
};
