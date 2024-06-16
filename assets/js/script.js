const toggleNavBtn = document.getElementById('toggleNavBtn');
const mainNav = document.getElementById('mainNav');

toggleNavBtn.addEventListener('click', function() {
    mainNav.classList.toggle('hidden');
});