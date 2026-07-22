import { HEALTH_INFO_DISCLAIMER } from "@/config/disclaimer";

type HealthInformationNoticeProps = {
  text?: string;
};

export function HealthInformationNotice({
  text = HEALTH_INFO_DISCLAIMER,
}: HealthInformationNoticeProps) {
  return (
    <p className="cg-health-note">
      <span className="cg-health-note__icon" aria-hidden="true">
        🛡️
      </span>
      <span className="cg-health-note__text">{text}</span>
    </p>
  );
}
