import type { OfficialSource } from "@/types/content";

type OfficialSourcesProps = {
  sources: OfficialSource[];
  summaryLabel?: string;
};

/**
 * 공식 출처 및 참고자료 — details/summary로 HTML에 내용이 항상 존재.
 * 출처는 보증·인증이 아니라 의료정보 작성 참고용이다.
 */
export function OfficialSources({
  sources,
  summaryLabel = "공식 출처 및 참고자료",
}: OfficialSourcesProps) {
  if (sources.length === 0) return null;

  return (
    <details className="cg-official-sources">
      <summary className="cg-official-sources__summary">{summaryLabel}</summary>
      <ul className="cg-official-sources__list">
        {sources.map((source) => (
          <li key={source.url} className="cg-official-sources__item">
            <p className="cg-official-sources__org">{source.organization}</p>
            <p className="cg-official-sources__doc">{source.title}</p>
            <a
              className="cg-official-sources__link"
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.url}
            </a>
          </li>
        ))}
      </ul>
      <p className="cg-official-sources__note">
        위 자료는 일반 의료정보 작성의 참고 출처이며, 특정 기관의 보증·인증·추천을
        의미하지 않습니다.
      </p>
    </details>
  );
}
