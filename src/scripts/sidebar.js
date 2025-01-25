export function initializeSidebar() {
    const menuBar = document.getElementById('menu-bar');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebar = document.getElementById('close-sidebar');

    function toggleSidebarVisibility(displayStyle) {
        sidebar.style.display = displayStyle;
    }

    function handleSidebarEvents() {
        if (window.innerWidth <= 767) {
            toggleSidebarVisibility('none');
            menuBar.addEventListener('click', () => toggleSidebarVisibility('block'));
            closeSidebar.addEventListener('click', () => toggleSidebarVisibility('none'));
        } else {
            toggleSidebarVisibility('block');
        }
    }

    handleSidebarEvents();
    window.addEventListener('resize', handleSidebarEvents);
}

