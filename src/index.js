import "./styles.css";

// script.js
class Dropdown {
  constructor(dropdownElement) {
      this.dropdown = dropdownElement;
      this.toggleButton = this.dropdown.querySelector('.dropdown-toggle');
      this.menu = this.dropdown.querySelector('.dropdown-menu');
      
      this.init();
  }

  init() {
      this.toggleButton.addEventListener('click', () => this.toggleMenu());
      
      // Close the dropdown if clicked outside
      document.addEventListener('click', (e) => this.handleOutsideClick(e));
  }

  toggleMenu() {
      // Hide all other dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== this.menu) {
              menu.style.display = 'none';
          }
      });

      // Toggle this dropdown
      this.menu.style.display = this.menu.style.display === 'block' ? 'none' : 'block';
  }

  handleOutsideClick(event) {
      if (!this.dropdown.contains(event.target)) {
          this.menu.style.display = 'none';
      }
  }
}

// Initialize all dropdowns on the page
document.addEventListener('DOMContentLoaded', function () {
  const dropdownElements = document.querySelectorAll('.dropdown');
  dropdownElements.forEach(dropdownElement => {
      new Dropdown(dropdownElement);
  });
});
