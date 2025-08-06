 // Interactive comment submission
      document
        .querySelector(".comment-section form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const name = this.querySelector('input[type="text"]').value;
          const comment = this.querySelector("textarea").value;

          if (name && comment) {
            // Create new comment element
            const newComment = document.createElement("div");
            newComment.className = "comment";
            newComment.innerHTML = `
                    <div class="comment-author">${name}</div>
                    <div class="comment-date">Just now</div>
                    <p class="mt-2 mb-0">${comment}</p>
                `;

            // Add to comments list
            const commentsList = document.querySelector(".comments-list");
            commentsList.insertBefore(newComment, commentsList.firstChild);

            // Reset form
            this.reset();

            // Show success message
            const alert = document.createElement("div");
            alert.className =
              "alert alert-success alert-dismissible fade show mt-3";
            alert.innerHTML = `
                    <i class="fas fa-check-circle me-2"></i>Your comment has been posted successfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
            this.appendChild(alert);

            // Auto-remove alert after 3 seconds
            setTimeout(() => {
              alert.remove();
            }, 3000);
          }
        });

      // Newsletter subscription
      document
        .querySelector(".sidebar form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const email = this.querySelector('input[type="email"]').value;
          if (email) {
            const button = this.querySelector("button");
            const originalText = button.textContent;

            button.textContent = "Subscribing...";
            button.disabled = true;

            setTimeout(() => {
              button.textContent = "Subscribed! ✓";
              button.className = "btn btn-success w-100";

              setTimeout(() => {
                button.textContent = originalText;
                button.className = "btn btn-primary w-100";
                button.disabled = false;
                this.reset();
              }, 2000);
            }, 1000);
          }
        });

      // Smooth scrolling for internal links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
            });
          }
        });
      });

      // Post card hover effects
      document.querySelectorAll(".post-card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
        });
      });
    