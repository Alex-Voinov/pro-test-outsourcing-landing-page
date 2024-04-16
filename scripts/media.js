let oldScriptPath = null;
let oldScript = null;
const loadScriptByScreenSize = () => {
    let path
    if (window.matchMedia("(max-width: 767px) and (orientation: portrait)").matches) path = 'scripts/mobile-scripts.js'
    else if (window.matchMedia("(max-width: 767.98px) and (orientation: landscape)").matches || (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches))
        path = 'scripts/tablet-scripts.js'
    else path = 'scripts/desktop-scripts.js'

    if (path !== oldScriptPath) {
        if (oldScriptPath) {
            document.head.removeChild(oldScript);
        }
        const script = document.createElement('script');
        script.src = path;
        script.type = 'module';
        document.head.appendChild(script);
        oldScriptPath = path;
        oldScript = script;
    }
}

window.onload = loadScriptByScreenSize;
window.addEventListener('resize', loadScriptByScreenSize)