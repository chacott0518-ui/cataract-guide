/**
 * 콘텐츠 날짜(`YYYY-MM-DD`)를 ISO 8601(KST)로 변환한다.
 * 이미 시각이 포함된 값은 그대로 반환한다.
 */
export function toIso8601Kst(date: string): string {
  const trimmed = date.trim();
  if (!trimmed) {
    throw new Error("날짜 문자열이 비어 있습니다.");
  }

  if (trimmed.includes("T")) {
    return trimmed;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    throw new Error(`날짜 형식이 올바르지 않습니다: ${date}`);
  }

  return `${trimmed}T00:00:00+09:00`;
}
