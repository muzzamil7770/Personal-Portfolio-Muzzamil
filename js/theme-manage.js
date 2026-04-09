

// ============================================
// THEME MANAGEMENT
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.body.classList.toggle('light', theme === 'light');
    const icons = document.querySelectorAll('.toggle-circle i');
    icons.forEach(icon => {
        icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    });
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}