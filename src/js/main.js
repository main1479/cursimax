// =======================================
// sticky nav
// =======================================
const nav = document.querySelector('.nav');
const stickyNav = (entries) => {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = document.querySelector('h1.heading');
function stickyNavInit() {
	if (!header) return;
	const navHeight = nav.getBoundingClientRect().height;
	const headerObserver = new IntersectionObserver(stickyNav, {
		root: null,
		threshold: 0,
		rootMargin: `-${navHeight}px`,
	});
	headerObserver.observe(header);
}
stickyNavInit();
// =======================================
// Mobile Menu
// =======================================
const navTrigger = document.querySelectorAll('.menu__trigger');
navTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
	});
});
// =======================================
// Video ELEMENTS
// =======================================
const playBtns = document.querySelectorAll('.play__btn');

let playing = false;
playBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const videoId = btn.dataset.videoId;
		console.log(videoId);
		if (!videoId) return;
		const videoEl = document.querySelector(videoId);
		if (playing) {
			videoEl.pause();
			playing = false;
			btn.classList.remove('playing');
		} else {
			videoEl.play();
			playing = true;
			btn.classList.add('playing');
		}
	});
});
