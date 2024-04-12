let oldScriptPath = null;
let oldScript = null;
const loadScriptByScreenSize = () => {
    const path = window.matchMedia("(max-width: 767px)").matches
        ? 'scripts/mobile-scripts.js'
        : (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches
            ? 'scripts/tablet-scripts.js'
            : 'scripts/desktop-scripts.js'
        )
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