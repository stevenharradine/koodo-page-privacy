"use strict";

const kmPrivacy = {};

kmPrivacy.init = () => {
	jQuery("a[href^='#']").smoothScroll(); // apply smoothScroll to all internal links

	// toggle "expanded" state of accordion items
	jQuery(".ai-summary").on("click", function() {
		jQuery(this).toggleClass("expanded");
	});

	// enable "expanded" state on Nitty Gritty section when a superscript Nitty Gritty link is clicked
	jQuery("a[href*='#nitty-gritty']").on("click", () => {
		jQuery("#nitty-gritty .ai-summary").addClass("expanded");
	});
};

document.addEventListener("DOMContentLoaded", () => {
	kmPrivacy.init();
});