const loadScriptByScreenSize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
        const script = document.createElement('script');
        script.src = 'scripts/mobile-scripts.js';
        document.head.appendChild(script);
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        const script = document.createElement('script');
        script.src = 'scripts/tablet-scripts.js';
        document.head.appendChild(script);
    } else {
        const script = document.createElement('script');
        script.src = 'scripts/desktop-scripts.js';
        script.type = 'module';
        document.head.appendChild(script);
    }
}

window.onload = loadScriptByScreenSize;