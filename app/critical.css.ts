/**
 * First-viewport critical CSS (HOME 기준).
 * Full styles remain in globals.css / header.css — loaded deferred from layout.
 */
export const CRITICAL_CSS = `
*,*::before,*::after{box-sizing:border-box}
html{margin:0;padding:0;-webkit-text-size-adjust:100%}
body{margin:0;padding:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Segoe UI",sans-serif;background:#f5f3ef;color:#102f3d;line-height:1.55}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto;display:block}
.skip-link{position:absolute;left:-9999px;top:auto}
.skip-link:focus{left:12px;top:12px;z-index:10000;background:#17364a;color:#fff;padding:8px 12px}
.cg-site-header{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.98);border-bottom:1px solid rgba(16,47,61,.08)}
.cg-site-header__inner{max-width:1180px;margin:0 auto}
.cg-header-bar{display:flex;align-items:center;justify-content:space-between;min-height:58px;padding:0 16px}
.cg-header-logo{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:1.05rem}
.cg-header-logo__mark{width:10px;height:10px;border-radius:50%;background:#ff6b16}
.cg-header-menu-button{width:40px;height:40px;border:0;background:transparent;padding:0}
.cg-container{width:min(1180px,calc(100% - 32px));margin:0 auto}
.cg-home__header{padding:20px 0 8px}
.cg-home__title{margin:0;font-size:1.7rem;line-height:1.25;letter-spacing:-.02em}
.cg-home-intro{margin:0 0 20px}
.cg-home-feature{margin:0 0 16px;aspect-ratio:4/5;background:#eee;border-radius:12px;overflow:hidden}
.cg-home-feature__img--pc{display:none}
.cg-home-feature__img--mobile{display:block;width:100%;height:auto}
.cg-home-intro__heading{margin:0 0 10px;font-size:1.2rem}
.cg-home-intro p{margin:0 0 10px;color:#445d68;font-size:.9375rem}
.cg-card-grid{margin:8px 0 24px}
.cg-card-grid__list{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.cg-content-card{display:block;background:#fff;border-radius:12px;overflow:hidden;border:1px solid rgba(16,47,61,.08)}
.cg-content-card__media{display:block;aspect-ratio:1;background:#f0eeea}
.cg-content-card__body{display:block;padding:10px}
.cg-content-card__title{display:block;font-size:.95rem;line-height:1.35}
.cg-content-card__meta,.cg-content-card__desc--pc,.cg-content-card__more{display:none}
.cg-content-card__desc--mobile{display:block;margin-top:4px;font-size:.75rem;color:#6f8088}
.cg-float-nav{display:none}
@media (min-width:900px){
.cg-home-feature{aspect-ratio:16/9}
.cg-home-feature__img--pc{display:block}
.cg-home-feature__img--mobile{display:none}
.cg-card-grid__list{grid-template-columns:repeat(3,1fr);gap:14px}
.cg-content-card__desc--pc{display:block;margin-top:6px;font-size:.82rem;color:#6f8088}
.cg-content-card__desc--mobile{display:none}
.cg-content-card__meta,.cg-content-card__more{display:block;margin-top:6px;font-size:.75rem;color:#6f8088}
}
`.replace(/\n/g, "");
