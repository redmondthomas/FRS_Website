
document.getElementById("header").innerHTML = `
<header>
    <a class="logo" href="index.html">
        <img src="images/home-logo.jpeg" alt="Site Logo">
    </a>

    <div class="searchbar">
        <input type="text" name="searchtext" placeholder="Type here...">
        <input type="submit" value="Search">
    </div>
</header>
`;
// header


// nav
document.getElementById("nav").innerHTML = `
<nav>
  <ul>
    <li><a href="index.html">
      <img class="icon" src="images/home-icon.svg" alt="Home">
      <span class="text">Home</span>
    </a></li>
    <li><a href="services.html">
      <img class="icon" src="images/services-icon.svg" alt="Services">
      <span class="text">Services</span>
    </a></li>
    <li><a href="book.html">
      <img class="icon" src="images/book-icon.svg" alt="Book">
      <span class="text">Book</span>
    </a></li>
    <li><a href="about.html">
      <img class="icon" src="images/about-icon.svg" alt="About">
      <span class="text">About</span>
    </a></li>
    <li><a href="contact.html">
      <img class="icon" src="images/contact-icon.svg" alt="Contact">
      <span class="text">Contact</span>
    </a></li>
  </ul>
</nav>
`;

// footer
document.getElementById("footer").innerHTML = `
<footer>
    <p>&copy; 2025 FRS Farm Relief Services</p>
</footer>
`;

//search
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".searchbar input[type='text']");
  if (!searchInput) return;

  function removeHighlights(element) {
    const highlighted = element.querySelectorAll("mark.search-highlight");
    highlighted.forEach(el => {
      el.outerHTML = el.innerText;
    });
  }

  function highlightText(element, term) {
    const regex = new RegExp(`(${term})`, "gi");

    element.childNodes.forEach(node => {
      if (node.nodeType === 3) { 
        const newHTML = node.textContent.replace(regex, `<mark class="search-highlight">$1</mark>`);
        if (newHTML !== node.textContent) {
          const span = document.createElement("span");
          span.innerHTML = newHTML;
          node.replaceWith(span);
        }
      } else {
        highlightText(node, term);
      }
    });
  }

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase().trim();
    const searchableArea = document.querySelector(".searchable");
    if (!searchableArea) return;

    const items = searchableArea.querySelectorAll("h1, h2, h3, p, li, .service-card");

    items.forEach(item => {
      removeHighlights(item); // always clear old highlights

      if (term === "") return; // if empty, stop

      if (item.innerText.toLowerCase().includes(term)) {
        highlightText(item, term);
      }
    });
  });
});

// booking
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const modal = document.getElementById("confirmModal");
  const yesBtn = document.getElementById("confirmYes");
  const noBtn = document.getElementById("confirmNo");
  const detailsBox = document.getElementById("confirmDetails");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // get text inputs
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const county = document.getElementById("county").value;
    const date = document.getElementById("date").value;
    const extraMessage = document.getElementById("extraMessage").value.trim();

    // get selected checkboxes (services)
    const services = [...document.querySelectorAll("input[name='services']:checked")]
      .map(checkbox => checkbox.parentElement.textContent.trim());

    // build summary for confirm
    detailsBox.innerHTML = `
            <p><strong>Full Name:</strong> ${name || "Not provided"}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Phone Number:</strong> ${phone || "Not provided"}</p>
            <p><strong>Nearest Location:</strong> ${county || "Not selected"}</p>
            <p><strong>Date:</strong> ${date || "Not selected"}</p>

            <p><strong>Selected Services:</strong></p>
            ${services.length > 0
        ? `<ul>${services.map(s => `<li>${s}</li>`).join("")}</ul>`
        : "<p>No services selected.</p>"
      }

    <p><strong>Additional Enquiry:</strong></p>
    <p>${extraMessage || "No additional message provided."}</p>
        `;

    modal.style.display = "block";
  });

  yesBtn.addEventListener("click", () => {
    modal.style.display = "none";
    form.submit(); // submit for real
  });

  noBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

