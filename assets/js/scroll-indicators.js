/**
 * Scroll Indicators JavaScript
 * Handles the functionality for horizontal scrolling with arrow indicators
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all scrollable containers
  const scrollContainers = document.querySelectorAll('.has-scrollbar');
  
  // For each scrollable container, add scroll indicators
  scrollContainers.forEach((container, index) => {
    // Create a wrapper for the scroll container
    const parentElement = container.parentElement;
    const wrapper = document.createElement('div');
    wrapper.className = 'scroll-indicator-container';
    
    // Create indicators
    const indicators = document.createElement('div');
    indicators.className = 'scroll-indicators';
    
    // Create left arrow
    const leftArrow = document.createElement('button');
    leftArrow.className = 'scroll-arrow left';
    leftArrow.setAttribute('aria-label', 'Scroll left');
    
    // Create right arrow
    const rightArrow = document.createElement('button');
    rightArrow.className = 'scroll-arrow right';
    rightArrow.setAttribute('aria-label', 'Scroll right');
    
    // Add all elements to the indicators container
    indicators.appendChild(leftArrow);
    indicators.appendChild(rightArrow);
    
    // Insert the container after the scrollable element
    parentElement.insertBefore(wrapper, container.nextSibling);
    wrapper.appendChild(indicators);
    
    // Add click event listeners to arrows
    leftArrow.addEventListener('click', function() {
      scrollHorizontally(container, -300); // Scroll left by 300px
    });
    
    rightArrow.addEventListener('click', function() {
      scrollHorizontally(container, 300); // Scroll right by 300px
    });
  });
});

/**
 * Scrolls the container horizontally by the specified amount
 */
function scrollHorizontally(container, amount) {
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}
