
      (function () {
        emailjs.init("X2PI0oSgoBxLuIUBL");
      })();
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          emailjs.sendForm("service_jrrfwud", "template_ntkmujz", this).then(
            () => {
              document.getElementById("form-status").innerText =
                "✅ Message Sent Successfully!";
              document.getElementById("form-status").style.color = "lime";
              this.reset();
            },
            (error) => {
              document.getElementById("form-status").innerText =
                "❌ Failed to send message. Try again.";
              document.getElementById("form-status").style.color = "red";
              console.error("EmailJS Error:", error);
            }
          );
        });
      function toggleDarkMode() {
        const body = document.body;
        body.classList.add("mode-transition");
        body.classList.toggle("light-mode");
        setTimeout(() => {
          body.classList.remove("mode-transition");
        }, 500);
      }
      function toggleMenu() {
        const menu = document.getElementById("dropdown-menu");
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
      }
      window.addEventListener("click", function (e) {
        const menu = document.getElementById("dropdown-menu");
        const toggle = document.querySelector(".menu-toggle");
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          menu.style.display = "none";
        }
      });
  