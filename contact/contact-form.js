const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const btn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    // UI Feedback: Disable button and show loading state
    btn.disabled = true;
    btn.innerText = "Sending...";
    
    const data = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Success Feedback
            status.style.display = "block";
            status.style.backgroundColor = "#d4edda"; // Light green
            status.style.color = "#155724";
            status.innerText = "Thanks! Your message has been sent successfully.";
            form.reset(); // Clear the form
        } else {
            throw new Error();
        }
    } catch (error) {
        // Error Feedback
        status.style.display = "block";
        status.style.backgroundColor = "#f8d7da"; // Light red
        status.style.color = "#721c24";
        status.innerText = "Oops! There was a problem sending your message.";
    } finally {
        // Reset button state
        btn.disabled = false;
        btn.innerText = "Send Message";
    }
});