document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress div'); // Select all progress bar values

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running"; // Start the animation
                observer.unobserve(entry.target); // Stop observing once the animation starts
            }
        });
    });

    // Set all animations to paused initially
    progressBars.forEach(bar => {
        bar.style.animationPlayState = "paused";
        observer.observe(bar); // Observe each progress bar
    });
});


  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check the saved theme in local storage
  if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  // Toggle theme when checkbox changes
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
