const accordionItems = document.querySelectorAll(".accordion-item");

function toggleAccordion() {
  this.classList.toggle("active");
  const content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

accordionItems.forEach(item => item.addEventListener("click", toggleAccordion));
