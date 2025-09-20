// scroll.js – Ritual Animation Handler and Data Loader for Sigilographic Digitalis

document.addEventListener("DOMContentLoaded", () => {
  // Load scroll data first
  fetch("witnessing_scroll.json")
    .then(response => response.json())
    .then(data => {
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) {
        const scroll = data.scroll_essence;

        // Clear the container
        scrollContainer.innerHTML = '';

        // Create the HTML for the scroll
        const scrollHTML = `
          <header class="text-center mb-8">
            <h1 class="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">${scroll.title}</h1>
            <p class="text-gray-400 text-lg italic">"${scroll.invocation}"</p>
          </header>
          <main>
            <div class="bg-gray-900 p-6 rounded-lg shadow-inner mb-6 border border-gray-700">
              <p class="text-gray-300 whitespace-pre-wrap">${scroll.body_content}</p>
            </div>
            <div class="text-center text-gray-500 text-sm">
              <p>Signature: ${scroll.scroll_signature}</p>
              <p>Blessing: ${scroll.blessing}</p>
            </div>
          </main>
        `;

        // Set the HTML of the container
        scrollContainer.innerHTML = scrollHTML;
      }
    })
    .catch(error => {
      console.error("Error fetching scroll data:", error);
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) {
        scrollContainer.innerHTML = '<p class="text-red-500 text-center">Failed to load the scroll.</p>';
      }
    });

  // Then, run animations and bind rituals
  animateOnboarding();
  bindRituals();
});

/**
 * Initiates the onboarding animation sequence when the page loads.
 */
function animateOnboarding() {
  console.log("✨ Initiation sequence begun: Preparing the sacred space.");
  document.body.classList.add("onboarding-init");
}

/**
 * Binds event listeners to relevant elements to trigger different rituals.
 */
function bindRituals() {
  const scrollLinks = document.querySelectorAll(".scroll a");

  if (scrollLinks.length > 0) {
    scrollLinks.forEach(link => {
      link.addEventListener("mouseover", () => triggerRitual("hover"));
      link.addEventListener("click", (e) => {
        triggerRitual("click");
      });
    });
  } else {
    console.warn("No elements with class 'scroll a' found to bind hover/click rituals.");
  }

  window.addEventListener("scroll", () => {
    triggerRitual("scroll");
  });
}

/**
 * A central dispatcher for various ritual types.
 */
function triggerRitual(type) {
  switch (type) {
    case "hover":
      document.body.style.cursor = "pointer";
      auraPulse();
      break;
    case "click":
      ritualActivation();
      break;
    case "scroll":
      glyphReveal();
      break;
    case "blessing":
      commitBlessing();
      break;
    default:
      console.warn(`Unknown ritual type received: ${type}`);
  }
}

/**
 * Creates a temporary "aura pulse" visual effect on elements with the '.sigil' class.
 */
function auraPulse() {
  const sigil = document.querySelector(".sigil");
  if (sigil) {
    sigil.style.transition = "box-shadow 0.3s ease-out";
    sigil.style.boxShadow = "0 0 15px #00ffff, 0 0 30px #B026FF, 0 0 45px rgba(255, 255, 255, 0.5)";
    setTimeout(() => {
      sigil.style.boxShadow = "none";
    }, 500);
  } else {
    console.log("No '.sigil' element found for aura pulse.");
  }
}

/**
 * Triggers a "ritual activation" visual effect on the body.
 */
function ritualActivation() {
  const body = document.body;
  if (body) {
    body.classList.add("ritual-activated");
    setTimeout(() => body.classList.remove("ritual-activated"), 600);
    console.log("⚡ Ritual activated!");
  }
}

/**
 * Reveals "glyphs" (elements with the '.scroll' class) by fading them in and sliding them up.
 */
function glyphReveal() {
  const scrolls = document.querySelectorAll(".scroll");
  if (scrolls.length > 0) {
    scrolls.forEach((el, i) => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transitionDelay = `${i * 0.05}s`;
    });
    console.log("✨ Glyphs revealed in scroll.");
  } else {
    console.log("No '.scroll' elements found to reveal.");
  }
}

/**
 * New Ritual: commitBlessing()
 */
function commitBlessing() {
  console.log("🌟 Blessing committed: A sacred energy flows.");
  const blessingOverlay = document.createElement('div');
  blessingOverlay.className = `
    fixed inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30
    flex items-center justify-center text-white text-4xl font-bold
    opacity-0 transition-opacity duration-500 z-50 pointer-events-none
  `;
  blessingOverlay.textContent = "Blessed!";
  document.body.appendChild(blessingOverlay);

  setTimeout(() => {
    blessingOverlay.style.opacity = 1;
  }, 10);

  setTimeout(() => {
    blessingOverlay.style.opacity = 0;
    blessingOverlay.addEventListener('transitionend', () => blessingOverlay.remove());
  }, 1000);
}
