
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            // Get the height of the window
          var windowHeight = window.innerHeight;

        // getBoundingClientRect().top finds how far from the top of the screen the element is
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150; // Triggers when element is 150px into view

        //   it means the element is visible in the size of the window at that point means 150px

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } 
          else {
            // Optional: remove this if you want it to stay visible after first scroll
            reveals[i].classList.remove("active");
          }
        }
      }

    //   trigger function when scrolling
      window.addEventListener("scroll", reveal);

      // Run once on load in case elements are already in view
      reveal();
    