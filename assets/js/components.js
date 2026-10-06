// Shared Navbar + Footer loader and sidebar controls.
const componentStyle = document.createElement('style');
componentStyle.innerHTML = `body { opacity: 0; transition: opacity .12s ease-in-out; } .components-loaded { opacity: 1 !important; }`;
document.head.appendChild(componentStyle);

async function includeCommonComponents() {
    try {
        const [navResponse, footerResponse] = await Promise.all([
            fetch('navbar.html'),
            fetch('footer.html')
        ]);

        if (!navResponse.ok || !footerResponse.ok) throw new Error('Common component file could not be loaded.');

        const [navData, footerData] = await Promise.all([
            navResponse.text(),
            footerResponse.text()
        ]);

        const navPlace = document.getElementById('navbar-placeholder');
        const footerPlace = document.getElementById('footer-placeholder');

        if (navPlace) navPlace.innerHTML = navData;
        if (footerPlace) footerPlace.innerHTML = footerData;

        document.body.classList.add('components-loaded');

        if (typeof loadVisitorCount === 'function') loadVisitorCount();
    } catch (error) {
        console.error('Common components load error:', error);
        document.body.classList.add('components-loaded');
    }
}


window.openSidebar = function () {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sideOverlay');
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
};

window.closeSidebar = function () {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sideOverlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
};

window.toggleMSub = function (id, element) {
    const sub = document.getElementById(id);
    if (!sub) return;
    element.classList.toggle('active');
    sub.classList.toggle('open');
};

window.addEventListener('DOMContentLoaded', includeCommonComponents);
