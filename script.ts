
anime({
  targets: '.logo svg .cls-1',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInCirc",
  duration: 1800,
  // delay: function(el, i) { return i * 0 },
  // direction: 'alternate',
  // loop: true,
	complete: function() {
		$("svg .cls-1").each((i, el) => {
			$(el).removeClass("cls-1")
			$(el).addClass("cls-1-f")
		})
		$("svg .cls-2").each((i, el) => {
			$(el).removeClass("cls-2")
			$(el).addClass("cls-2-f")
		})
		$("svg .cls-3").each((i, el) => {
			$(el).removeClass("cls-3")
			$(el).addClass("cls-3-f")
		})
		$("svg .cls-4").each((i, el) => {
			$(el).removeClass("cls-4")
			$(el).addClass("cls-4-f")
		})
		$("svg .cls-5").each((i, el) => {
			$(el).removeClass("cls-5")
			$(el).addClass("cls-5-f")
		})
	}
});

anime({
  targets: '.logo svg polygon',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1800,
  // delay: function(el, i) { return i * 0 },
  // direction: 'alternate',
  // loop: true,
	complete: function() {
		$("svg .cls-1").each((i, el) => {
			$(el).removeClass("cls-1")
			$(el).addClass("cls-1-f")
		})
		$("svg .cls-2").each((i, el) => {
			$(el).removeClass("cls-2")
			$(el).addClass("cls-2-f")
		})
		$("svg .cls-3").each((i, el) => {
			$(el).removeClass("cls-3")
			$(el).addClass("cls-3-f")
		})
		$("svg .cls-4").each((i, el) => {
			$(el).removeClass("cls-4")
			$(el).addClass("cls-4-f")
		})
		$("svg .cls-5").each((i, el) => {
			$(el).removeClass("cls-5")
			$(el).addClass("cls-5-f")
		})
	}
});

const controller = new ScrollMagic.Controller()

// Pin Hero section
new ScrollMagic.Scene({
	triggerElement: ".hero",
	triggerHook: "onLeave"
})
.addTo(controller)
.setPin(".hero")

// Parallax the intro section
new ScrollMagic.Scene({
	triggerElement: ".intro",
	triggerHook: "onEnter"
})
	.duration("200%")
	.setTween(".intro", {
		backgroundPosition: "100% 0%",
		ease: Linear.easeNone
	})
	.addIndicators()
	.addTo(controller)

// Pin intro section
new ScrollMagic.Scene({
	triggerElement: ".intro",
	triggerHook: "onLeave"
})
.setPin(".intro")
.addTo(controller)

// Parallax the client connection section
new ScrollMagic.Scene({
	triggerElement: ".client-connection",
	triggerHook: "onEnter"
})
	.duration("200%")
	.setTween(".client-connection", {
		backgroundPosition: "90% 50%",
		ease: Linear.easeNone
	})
	.addIndicators()
	.addTo(controller)


// Pin client-connection section
new ScrollMagic.Scene({
	triggerElement: ".client-connection",
	triggerHook: "onLeave"
})
.setPin(".client-connection")
.addTo(controller)

// Pin purpose section
new ScrollMagic.Scene({
	triggerElement: ".purpose",
	triggerHook: "onLeave"
})
.setPin(".purpose")
.addTo(controller)

// Pin benefits section
new ScrollMagic.Scene({
	triggerElement: ".benefits",
	triggerHook: "onLeave"
})
.setPin(".benefits")
.addTo(controller)

// Pin solution section
new ScrollMagic.Scene({
	triggerElement: ".solution",
	triggerHook: "onLeave"
})
.setPin(".solution")
.addTo(controller)

// Pin differential section
new ScrollMagic.Scene({
	triggerElement: ".differential",
	triggerHook: "onLeave"
})
.setPin(".differential")
.addTo(controller)

// Pin cta section
new ScrollMagic.Scene({
	triggerElement: ".cta",
	triggerHook: "onLeave"
})
.setPin(".cta")
.addTo(controller)
