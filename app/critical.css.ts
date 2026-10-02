/**
 * First-viewport critical CSS (HOME 기준).
 * Full styles remain in globals.css / header.css — loaded deferred from layout.
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
.cg-card-grid{margin:0;width:100%;overflow-x:clip}
.cg-card-grid__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:stretch}
.cg-content-card{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #dce5ea}
.cg-content-card__media{display:block;box-sizing:border-box;width:100%;height:auto;aspect-ratio:900/951;flex:0 0 auto;padding:0;overflow:hidden;background:#e8f1f5}
.cg-content-card__img,.cg-content-card__media img{display:block;width:100%;height:100%;object-fit:contain;object-position:center center}
.cg-content-card__body{display:flex;flex-direction:column;flex:1 1 auto;gap:0;padding:10px 12px 12px;min-width:0}
.cg-content-card__title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.7em;margin:0 0 4px;font-size:.96875rem;font-weight:700;line-height:1.35}
.cg-content-card__meta{margin:0 0 4px;font-size:.75rem;line-height:1.4;color:#6f8088;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cg-content-card__desc--pc{display:none}
.cg-content-card__desc--mobile{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:0 0 8px;font-size:.78125rem;line-height:1.45;color:#445d68}
.cg-content-card__more{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;flex-shrink:0;height:32px;margin-top:auto;padding:0 12px;border:1px solid #c9d8e2;border-radius:999px;background:#fff;color:#0a3551;font-size:.78125rem;font-weight:700}
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
.cg-card-grid__list{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.cg-content-card{height:auto;min-height:0}
.cg-content-card__media{aspect-ratio:1/1;height:auto}
.cg-content-card__body{padding:14px 16px 16px}
.cg-content-card__title{font-size:1.125rem;margin-bottom:8px}
.cg-content-card{border-radius:20px}
.cg-content-card__title{min-height:2.6em;line-height:1.3}
.cg-content-card__meta{font-size:.8125rem;line-height:inherit;margin-bottom:6px}
.cg-content-card__desc--pc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:3em;margin:0 0 12px;font-size:.875rem;line-height:1.5}
.cg-content-card__desc--mobile{display:none}
.cg-content-card__more{height:36px;margin-top:auto;padding:0 14px;border:1px solid #c9d8e2;border-radius:999px;background:#fff;color:#0a3551;font-size:.84375rem;font-weight:700}
}
@media (min-width:901px){
.cg-header-kakao{display:inline-flex}
}
@media (max-width:900px){
.cg-header-kakao--pc{display:none}
}
`.replace(/\n/g, "");
