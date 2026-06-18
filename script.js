document.addEventListener("DOMContentLoaded", () => {

  // PHOTO REVEAL

  const images =
    document.querySelectorAll(".photo-grid img");

  function reveal() {

    images.forEach((img) => {

      const windowHeight =
        window.innerHeight;

      const revealTop =
        img.getBoundingClientRect().top;

      if (revealTop < windowHeight - 100) {

        img.classList.add("show");

      }

    });

  }

  window.addEventListener("scroll", reveal);

  reveal();

  // INTRO SCREEN

  const intro =
    document.getElementById("intro");

  const enterBtn =
    document.getElementById("enterBtn");

  const music =
    document.getElementById("bgMusic");

  if (enterBtn) {

    enterBtn.addEventListener("click", () => {

      intro.style.display = "none";

      if (music) {

        music.play().catch((err) => {

          console.log(
            "Autoplay blocked:",
            err
          );

        });

      }

    });

  }

  // MUSIC BUTTON

  const musicBtn =
    document.getElementById("musicBtn");

  if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

      if (music.paused) {

        music.play();

      } else {

        music.pause();

      }

    });

  }

  // SECRET STAR

  const secretStar =
    document.getElementById("secretStar");

  let clickCount = 0;

  if (secretStar) {

    secretStar.addEventListener("click", () => {

      clickCount++;

      secretStar.style.transform =
        "scale(1.6) rotate(20deg)";

      setTimeout(() => {

        secretStar.style.transform =
          "scale(1) rotate(0deg)";

      }, 300);

      if (clickCount === 5) {

        alert(
          "The universe remembers what hearts never forget ✨"
        );

        clickCount = 0;

      }

    });

  }

  // VIDEO + MUSIC CONTROL

  const videos =
    document.querySelectorAll(".memory-video");

  videos.forEach((video) => {

    // VIDEO STARTS

    video.addEventListener("play", () => {

      if (music) {

        music.pause();

      }

      videos.forEach((otherVideo) => {

        if (
          otherVideo !== video &&
          !otherVideo.paused
        ) {

          otherVideo.pause();

        }

      });

    });

    // VIDEO PAUSED

    video.addEventListener("pause", () => {

      const anyVideoPlaying =
        [...videos].some(
          v => !v.paused && !v.ended
        );

      if (
        !anyVideoPlaying &&
        music
      ) {

        music.play().catch(() => {});

      }

    });

    // VIDEO ENDED

    video.addEventListener("ended", () => {

      if (music) {

        music.play().catch(() => {});

      }

    });

  });

});