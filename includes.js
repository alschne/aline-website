// This function loads an external HTML file and puts its contents
// into the element with the matching ID ("header" or "footer").

async function loadHTML(id, file) {
  try {
    const element = document.getElementById(id);
    if (!element) return;

    const response = await fetch(file);
    if (!response.ok) {
      console.error(`Failed to load ${file}: ${response.status}`);
      return;
    }

    const html = await response.text();
    element.innerHTML = html;

    return true;
  } catch (err) {
    console.error("Error loading HTML:", err);
  }
}

// Load the header and footer on every page that includes this script.
loadHTML("header", "/header.html").then(() => {
  let currentPath = window.location.pathname;
    if (currentPath.length > 1 && currentPath.endsWith('/')) {
      currentPath = currentPath.slice(0, -1);
    }

    document.querySelectorAll("nav a").forEach(link => {
      // 2. Get the link path and normalize it the same way
      let linkPath = link.getAttribute("href");
      let normalizedLinkPath = linkPath;
      
      if (normalizedLinkPath.length > 1 && normalizedLinkPath.endsWith('/')) {
        normalizedLinkPath = normalizedLinkPath.slice(0, -1);
      }

      // 3. Clear existing active classes (prevents duplicates)
      link.classList.remove("active");

      // 4. Logic for active state
      if (normalizedLinkPath === currentPath) {
        // Direct match (Home, About, FAQ, etc.)
        link.classList.add("active");
      } 
      else if (
        normalizedLinkPath !== "/" && 
        currentPath.startsWith(normalizedLinkPath)
      ) {
        // Section match (e.g., highlighting "Services" while on a sub-service page)
        link.classList.add("active");
      }
    });
  });
loadHTML("footer", "/footer.html");
