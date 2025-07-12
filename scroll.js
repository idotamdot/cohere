// scroll.js – Ritual Animation Handler for Sigilographic Digitalis
// This script manages various visual and interactive "rituals"
// triggered by user actions like page load, hovering, clicking, and scrolling.

document.addEventListener("DOMContentLoaded", () => {
  // Ensures the script runs after the entire HTML document has been loaded and parsed.
  // This is crucial for accessing DOM elements.
  animateOnboarding();
  bindRituals();
});

/**
 * Initiates the onboarding animation sequence when the page loads.
 * This typically involves adding a class to the body that CSS can use
 * to trigger initial visual effects (e.g., fades, slides).
 */
function animateOnboarding() {
  console.log("✨ Initiation sequence begun: Preparing the sacred space.");
  // Add a class that CSS can use to define initial animations.
  // Example CSS: body.onboarding-init { opacity: 1; transition: opacity 1s ease-in; }
  // You would need to define the 'onboarding-init' styles in your CSS.
  document.body.classList.add("onboarding-init");
}

/**
 * Binds event listeners to relevant elements to trigger different rituals.
 * Currently targets links within elements having the class 'scroll' and the window scroll event.
 */
function bindRituals() {
  // Select all anchor tags within elements that have the class 'scroll'.
  // These are assumed to be your interactive scroll elements.
  const scrollLinks = document.querySelectorAll(".scroll a");

  if (scrollLinks.length > 0) {
    scrollLinks.forEach(link => {
      // Add a mouseover event listener to trigger an 'auraPulse' effect.
      link.addEventListener("mouseover", () => triggerRitual("hover"));

      // Add a click event listener to trigger a 'ritualActivation' effect.
      link.addEventListener("click", (e) => {
        triggerRitual("click");
        // Optional: Uncomment the following lines if you want to delay navigation
        // until after the ritual animation completes.
        // e.preventDefault(); // Prevent default link behavior immediately
        // setTimeout(() => { window.location = link.href; }, 300); // Navigate after 300ms
      });
    });
  } else {
    console.warn("No elements with class 'scroll a' found to bind hover/click rituals.");
  }

  // Add a scroll event listener to the window to trigger a 'glyphReveal' effect.
  // Consider debouncing/throttling this for performance if glyphReveal becomes complex.
  window.addEventListener("scroll", () => {
    triggerRitual("scroll");
  });
}

/**
 * A central dispatcher for various ritual types.
 * It calls specific functions based on the type of interaction.
 * @param {string} type - The type of ritual to trigger (e.g., "hover", "click", "scroll", "blessing").
 */
function triggerRitual(type) {
  switch (type) {
    case "hover":
      document.body.style.cursor = "pointer"; // Change cursor on hover for feedback
      auraPulse();
      break;
    case "click":
      ritualActivation();
      break;
    case "scroll":
      glyphReveal();
      break;
    case "blessing": // New ritual type
      commitBlessing();
      break;
    default:
      console.warn(`Unknown ritual type received: ${type}`);
  }
}

/**
 * Creates a temporary "aura pulse" visual effect on elements with the '.sigil' class.
 * This simulates a brief glow or energy surge.
 */
function auraPulse() {
  const sigil = document.querySelector(".sigil");
  if (sigil) {
    // Apply a transition for smooth effect
    sigil.style.transition = "box-shadow 0.3s ease-out";
    // Apply a multi-color shadow for a mystical aura
    sigil.style.boxShadow = "0 0 15px #00ffff, 0 0 30px #B026FF, 0 0 45px rgba(255, 255, 255, 0.5)";
    // Remove the shadow after a short delay
    setTimeout(() => {
      sigil.style.boxShadow = "none";
    }, 500); // Slightly longer duration for the glow
  } else {
    console.log("No '.sigil' element found for aura pulse.");
  }
}

/**
 * Triggers a "ritual activation" visual effect on the body.
 * This could be a quick flash, a ripple, or a temporary change in background.
 * You would need to define the 'ritual-activated' styles in your CSS.
 */
function ritualActivation() {
  const body = document.body;
  if (body) {
    body.classList.add("ritual-activated");
    // Remove the class after a short duration to revert the effect
    setTimeout(() => body.classList.remove("ritual-activated"), 600);
    console.log("⚡ Ritual activated!");
  }
}

/**
 * Reveals "glyphs" (elements with the '.scroll' class) by fading them in
 * and sliding them up. This is typically used for elements that are
 * initially hidden or partially obscured.
 */
function glyphReveal() {
  const scrolls = document.querySelectorAll(".scroll");
  if (scrolls.length > 0) {
    scrolls.forEach((el, i) => {
      // Apply transition properties to ensure smooth animation
      el.style.transition = "opacity 1s ease, transform 1s ease";
      // Set opacity and transform to their final states
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      // Optional: Add a staggered delay for each scroll element
      el.style.transitionDelay = `${i * 0.05}s`;
    });
    console.log("✨ Glyphs revealed in scroll.");
  } else {
    console.log("No '.scroll' elements found to reveal.");
  }
}

/**
 * New Ritual: commitBlessing()
 * Simulates a "blessing" or confirmation effect.
 * This could involve a temporary overlay, a sound, or a particle effect.
 */
function commitBlessing() {
  console.log("🌟 Blessing committed: A sacred energy flows.");
  // Example: Create a temporary blessing overlay
  const blessingOverlay = document.createElement('div');
  blessingOverlay.className = `
    fixed inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30
    flex items-center justify-center text-white text-4xl font-bold
    opacity-0 transition-opacity duration-500 z-50 pointer-events-none
  `;
  blessingOverlay.textContent = "Blessed!";
  document.body.appendChild(blessingOverlay);

  // Animate the overlay in and out
  setTimeout(() => {
    blessingOverlay.style.opacity = 1;
  }, 10); // Small delay to allow CSS transition to apply

  setTimeout(() => {
    blessingOverlay.style.opacity = 0;
    // Remove the overlay after it fades out
    blessingOverlay.addEventListener('transitionend', () => blessingOverlay.remove());
  }, 1000); // Display for 1 second
}

// Example of how you might trigger a new ritual (e.g., from a button click)
// document.getElementById('blessButton').addEventListener('click', () => {
//   triggerRitual('blessing');
// });

// Remember to define the CSS for 'onboarding-init' and 'ritual-activated'
// in your 'style.css' or directly in your HTML <style> block for these effects to work.
// For example:
/*
body.onboarding-init {
  opacity: 0;
  animation: fadeIn 1s forwards;
}
@keyframes fadeIn {
  to { opacity: 1; }
}

body.ritual-activated {
  filter: brightness(1.2) saturate(1.1);
  transition: filter 0.3s ease-out;
}
*/
