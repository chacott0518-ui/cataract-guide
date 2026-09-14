export type ClayAccent =
  | "orange"
  | "pink"
  | "lime"
  | "blue"
  | "cyan"
  | "neutral";

export type ContentClusterId =
  | "cost"
  | "recovery"
  | "precautions"
  | "hospital"
  | "reviews"
  | "faq"
  | "faqHub";

/** 핵심 6카드 밖의 의료정보 가이드 */
export type InfoGuideId =
  | "preExam"
  | "medicationCheck"
  | "historyCheck"
  | "consultationQuestions"
  | "iolInfoCheck"
  | "lensTypeCheck"
  | "targetDistanceConsult"
  | "procedureProcess"
  | "bothEyesSchedule"
  | "dailyLifeAfter"
  | "drivingResumeCheck"
  | "glassesChangeCheck"
  | "glareCheck"
  | "visionChangeObservation"
  | "symptomCheck"
  | "medicalInfoCheck"
  | "adInfoCheck";

export type ContentPageId = ContentClusterId | InfoGuideId;

export type ContentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  socialImage?: string;
  category?: string;
};

export type SectionLayout =
  | "prose"
  | "comparison"
  | "checklist"
  | "steps"
  | "timeline"
  | "info-blocks"
  | "info-grid"
  | "compare-table"
  | "responsive-table"
  | "callout"
  | "conclusion";

export type ComparisonSide = {
  label: string;
  text: string;
};

export type SectionStep = {
  label: string;
  text: string;
};

export type CompareRow = {
  criterion: string;
  left: string;
  right: string;
};

export type TableColumn = {
  key: string;
  label: string;
};

export type TableRow = Record<string, string>;

export type ResponsiveTableData = {
  caption?: string;
  columns: TableColumn[];
  rows: TableRow[];
  /** cards: 모바일 카드 전환 / scroll: 가로 스크롤 */
  mobileMode?: "cards" | "scroll";
  leftHeader?: string;
  rightHeader?: string;
};

export type ArticleSection = {
  id: string;
  order?: number;
  numberLabel?: string;
  heading: string;
  /** AEO용 첫 문장 직접 답변 */
  directAnswer?: string;
  paragraphs: string[];
  bullets?: string[];
  layout?: SectionLayout;
  /** 장식 아이콘(화면용 aria-hidden). 텍스트에 합치지 않음 */
  decorativeIcon?: string;
  /** 모바일 info 카드 열 수 (기본 자동) */
  mobileCardColumns?: 1 | 2;
  comparison?: {
    left: ComparisonSide;
    right: ComparisonSide;
    note?: string;
  };
  steps?: SectionStep[];
  timeline?: SectionStep[];
  infoBlocks?: SectionStep[];
  compareRows?: CompareRow[];
  compareHeaders?: [string, string];
  table?: ResponsiveTableData;
  callout?: string;
  relatedHref?: string;
  relatedLabel?: string;
  level?: "h2" | "h3";
  /** 섹션 내 인라인 FAQ (FAQ 페이지 그룹용) */
  faqIds?: string[];
  /** H2 흐름 하단 관련 참고 이미지 */
  sectionImage?: ContentImage;
};

export type ContentCard = {
  id: ContentClusterId;
  order: number;
  numberLabel: string;
  href: string;
  slug: string;
  title: string;
  /** 카드용 긴 제목 (필요 시) */
  cardTitle: string;
  /** 메뉴·네비용 전체 제목 */
  shortTitle: string;
  /** 카드 메타에 표시할 짧은 라벨 (예: 수술비용) */
  cardMetaLabel: string;
  iconKey: ContentClusterId;
  /** 긴 설명 (메가메뉴 등) */
  description: string;
  /** PC 카드 요약 */
  cardDescription: string;
  /** 모바일 카드 요약 (짧음) */
  mobileCardDescription: string;
  accent: ClayAccent;
  accentColor: string;
  accentHoverColor: string;
  image: ContentImage;
  /** 상세 상단·본문 재사용 이미지 (기본: image와 동일) */
  heroImage: ContentImage;
  inlineImage: ContentImage;
  publishedAt: string;
  categoryLabel: string;
  faqIds: string[];
};

export type ContentPage = {
  id: ContentPageId;
  order: number;
  numberLabel: string;
  slug: string;
  href: string;
  navLabel: string;
  categoryLabel: string;
  /** 화면 H1 (짧은 주제 제목) */
  h1: string;
  /** Breadcrumb·BreadcrumbList 라벨 (미설정 시 h1) */
  breadcrumbLabel?: string;
  /**
   * 질문형·상세 제목.
   * H1과 다르면 화면에서는 H2로 출력. Article JSON-LD headline 등으로 활용.
   */
  heading: string;
  /** @deprecated 화면 미표시. 스키마/내부 참고용으로만 유지할 수 있음 */
  lead?: string;
  /** 도입부 (보통 2문단) */
  intro: string[];
  /**
   * 메인(`/`)으로 향하는 본문 문맥링크 1개.
   * 도입부·핵심요약 직후·목차 앞에 렌더한다.
   */
  hubContextLink?: HubContextLink;
  /** 홈 정보 카드용 짧은 주제 라벨 */
  infoTopicLabel?: string;
  /** 홈 정보 카드용 설명 (미설정 시 seo.description) */
  infoCardDescription?: string;
  /** 페이지 핵심요약 카드 */
  keySummary?: KeySummaryEntry[];
  /** 공식 출처 (details/summary) */
  officialSources?: OfficialSource[];
  sections: ArticleSection[];
  faqIds: string[];
  faqTitle: string;
  /** 결론 본문 (1~2문단) */
  conclusion?: string | string[];
  seo: PageSeo;
  publishedAt: string;
  updatedAt: string;
  thumbnail: ContentImage;
  /** H1 아래 상단 대표 이미지 (보통 1장) */
  topImages: ContentImage[];
  /** 첫 제휴 CTA 아래·질문형 H2 위에 두는 본문 이미지 */
  bodyImage?: ContentImage | null;
  /** @deprecated topImages 우선 */
  heroImage: ContentImage;
  /** @deprecated bodyImage / topImages 우선 */
  secondaryImage?: ContentImage | null;
  /**
   * 본문 중간 반복 이미지.
   * 현재 노안백내장 콘텐츠에서는 null/미설정으로 비활성.
   */
  repeatImage?: ContentImage | null;
  /** 반복 이미지를 끼울 섹션 번호. 미설정 시 반복 없음 */
  repeatImageBeforeSectionNumber?: string | null;
  /** @deprecated */
  inlineImage?: ContentImage;
  accentColor: string;
  accentHoverColor: string;
  /** H1 위 작은 분류 라벨 표시 여부 */
  showArticleEyebrow?: boolean;
  /** 관련 콘텐츠 안내 문구(CONTENT GUIDE 등) 표시 여부 */
  showRelatedGuideHeading?: boolean;
  /** 6개 콘텐츠 카드 그리드 표시 */
  showContentCards?: boolean;
  /** FAQ 허브 카드 표시 */
  showFaqHub?: boolean;
  /** H1 아래 게시·수정일 표시 여부 (신규 InfoGuide 전용, 기본 미표시) */
  showPublishedDate?: boolean;
  /** FAQ 다음·공식출처 이전 "다른 노안백내장 의료정보" 카드용 InfoGuide id (신규 InfoGuide 전용) */
  relatedGuideIds?: InfoGuideId[];
};

export type KeySummaryEntry = {
  numberLabel: string;
  title: string;
  text: string;
};

export type OfficialSource = {
  organization: string;
  title: string;
  url: string;
};

export type InfoGuideCard = {
  id: InfoGuideId;
  href: string;
  topicLabel: string;
  title: string;
  description: string;
  publishedAt: string;
  topicName: string;
};

/** 하위 페이지 → 메인 허브 문맥링크 */
export type HubContextLink = {
  before: string;
  anchor: string;
  after: string;
  href: "/";
};

export type HomeIntro = {
  /** 표시하지 않을 때 빈 문자열 가능 */
  category?: string;
  heading: string;
  /** 1열 도입 문단 */
  paragraphs: string[];
  /** 짧은 핵심 요약 */
  summary: string;
  featureImage?: ContentImage;
  /** HOME Mobile Hero (4:5) — PC Hero와 분리 */
  featureImageMobile?: ContentImage;
};

export type HomeIndexItem = {
  order: number;
  numberLabel: string;
  title: string;
  description: string;
  href: string;
};

export type TocItem = {
  id: string;
  numberLabel?: string;
  label: string;
  decorativeIcon?: string;
};
