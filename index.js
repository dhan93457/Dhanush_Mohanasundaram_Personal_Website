
function showSection(sectionId, event) {
    event.preventDefault();
    
    const allSections = document.querySelectorAll('.window-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }
});
window.addEventListener('scroll', () => {
    const centerContent = document.querySelector('.center-content');
    centerContent.scrollTop = 0;
});

