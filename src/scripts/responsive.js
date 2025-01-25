export function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 767) {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
}
