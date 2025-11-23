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

  } catch (err) {
    console.error("Error loading HTML:", err);
  }
}

// Load the header and footer on every page that includes this script.
loadHTML("header", "/header.html");
loadHTML("footer", "/footer.html");
