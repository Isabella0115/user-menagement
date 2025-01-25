import { initializeSidebar } from './sidebar.js';
import { fetchAndRenderUsers } from './cards.js';
import { handleResize } from './responsive.js';

document.addEventListener('DOMContentLoaded', function () {
    // Sidebar initialization
    initializeSidebar();

    // Fetch users and render them
    fetchAndRenderUsers();

    // Handle screen resize for sidebar visibility
    handleResize();
    window.addEventListener('resize', handleResize);
});
