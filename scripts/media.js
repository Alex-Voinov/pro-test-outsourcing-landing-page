const loadScriptByScreenSize = () => {
    const script = document.createElement('script');
    script.src = (
        window.matchMedia("(max-width: 767px)").matches
            ? 'scripts/mobile-scripts.js'
            : (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches
                ? 'scripts/tablet-scripts.js'
                : 'scripts/desktop-scripts.js'
            )
    );
    script.type = 'module';
    document.head.appendChild(script);
}

window.onload = loadScriptByScreenSize;