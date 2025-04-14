
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
