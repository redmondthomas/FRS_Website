
document.getElementById("header").innerHTML = `
<header>
    <a class="logo" href="index.html">
        <img src="images/home-logo.jpeg" alt="Site Logo">
    </a>
</header>
`;

// NAVIGATION
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


// FOOTER
document.getElementById("footer").innerHTML = `
<footer>
    <p>&copy; 2025 FRS Farm Relief Services</p>
</footer>
`;
