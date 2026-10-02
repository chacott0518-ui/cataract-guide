"use client";

import { useEffect, useRef, useState } from "react";

type CopyAddressButtonProps = {
  address: string;
};

type CopyStatus = "idle" | "ok" | "fail";

function legacyCopy(text: string): boolean {
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

/** 주소 복사 — clipboard API, 미지원 시 execCommand fallback */
export function CopyAddressButton({ address }: CopyAddressButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const handleCopy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(address);
      ok = true;
    } catch {
      ok = legacyCopy(address);
    }
    setStatus(ok ? "ok" : "fail");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2600);
  };

  return (
    <>
      <button
        type="button"
        className="cg-clinic-info__pill cg-clinic-info__pill--copy"
        onClick={handleCopy}
      >
        주소복사
      </button>
      <span className="cg-clinic-info__toast" role="status" aria-live="polite">
        {status === "ok"
          ? "주소가 복사되었습니다."
          : status === "fail"
            ? "주소를 복사하지 못했습니다."
            : ""}
      </span>
    </>
  );
}
