/**
 * First-viewport critical CSS (HOME 기준).
 * Header + H1 + lead + hero image only.
 * Below-fold (cards/FAQ/Footer/float-nav chrome) comes from deferred SiteCss.
 */
export const CRITICAL_CSS = `
*,*::before,*::after{box-sizing:border-box}
html{margin:0;padding:0;-webkit-text-size-adjust:100%}
body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Noto Sans KR","Segoe UI",Arial,sans-serif;background:#f5f3ef;color:#102f3d;font-size:16px;line-height:1.7;letter-spacing:-.015em}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto;display:block}
.skip-link{position:absolute;left:-9999px;top:auto}
.skip-link:focus{left:12px;top:12px;z-index:10000;background:#17364a;color:#fff;padding:8px 12px}
.cg-site-header{position:fixed;top:0;left:0;right:0;z-index:50;width:100%;background:transparent;border:0}
.cg-site-header-spacer{height:56px}
.cg-site-header__inner{box-sizing:border-box;position:relative;width:100%;max-width:1180px;margin:0 auto;padding:0}
.cg-header-bar{display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;height:56px;padding:0 18px;gap:12px;background:rgba(255,255,255,.98);border-radius:0 0 16px 16px}
.cg-header-logo{display:inline-flex;align-items:center;min-width:0}
.cg-header-logo__mark{display:none}
.cg-header-logo__text{font-size:15px;font-weight:700;letter-spacing:-.015em;white-space:nowrap}
.cg-header-actions{display:flex;align-items:center;gap:14px;flex-shrink:0}
.cg-header-kakao{display:inline-flex;align-items:center;justify-content:center;height:40px;min-height:40px;padding:0 14px;border:0;border-radius:14px;background:#f5c84b;color:#0a2b3f;font-size:13px;font-weight:600;text-decoration:none}
.cg-header-menu-button{width:44px;height:44px;border:0;background:transparent;padding:0}
.cg-container{box-sizing:border-box;width:100%;max-width:1180px;margin:0 auto;padding:0 18px}
.cg-home{padding-top:0}
.cg-home-top{width:100%;margin:0;padding:0}
.cg-home__header{margin:28px 0 14px;padding:0;width:100%}
.cg-home__title{margin:0;font-size:1.75rem;font-weight:700;line-height:1.25;letter-spacing:-.03em}
.cg-home-hero{margin:0 0 40px;width:100%;padding:0}
.cg-home-hero__copy{max-width:min(860px,100%);width:100%;margin:0 0 18px;padding:0}
.cg-home-hero__copy p{margin:0 0 13px;color:#445d68;font-size:.9375rem;line-height:1.65}
.cg-home-hero__media{margin:0;padding:0;width:100%;border-radius:20px;overflow:hidden;aspect-ratio:4/5;background:#eee}
.cg-home-hero__img{display:block;width:100%;height:auto;margin:0;padding:0;border-radius:20px}
.cg-home-hero__img--pc{display:none}
.cg-home-hero__img--mobile{display:block}
.cg-float-nav{display:none}
@media (min-width:768px){
.cg-site-header-spacer{height:60px}
.cg-header-bar{height:60px;padding:0 24px}
.cg-container{padding:0 24px}
.cg-home__header{margin:40px 0 16px}
.cg-home__title{font-size:2.5rem}
.cg-home-hero__copy p{margin:0 0 15px;font-size:.96875rem;line-height:1.7}
.cg-home-hero{margin-bottom:64px}
.cg-home-hero__media{aspect-ratio:16/9}
.cg-home-hero__img--pc{display:block}
.cg-home-hero__img--mobile{display:none}
}
@media (min-width:901px){
.cg-header-kakao{display:inline-flex}
}
@media (max-width:900px){
.cg-header-kakao--pc{display:none}
}
`.replace(/\n/g, "");
