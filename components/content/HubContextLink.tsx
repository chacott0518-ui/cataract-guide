import Link from "next/link";

import type { HubContextLink as HubContextLinkData } from "@/types/content";

type HubContextLinkProps = {
  link: HubContextLinkData;
};

/** 하위 페이지 → 메인(`/`) 본문 문맥링크 */
export function HubContextLink({ link }: HubContextLinkProps) {
  return (
    <p className="cg-hub-context-link">
      {link.before}
      <Link href={link.href}>{link.anchor}</Link>
      {link.after}
    </p>
  );
}
