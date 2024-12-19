<script setup>
definePageMeta({
  layout: "header-only",
});

useSeoMeta({
  title:
    "GymFlow254 - The Future of Gym Management: Simplify and Scale Your Business",
  ogTitle:
    "GymFlow254 - The Future of Gym Management: Simplify and Scale Your Business",
  description:
    "Elevate your fitness business with GymFlow254's modern tools. Engage members, simplify operations, and grow your gym with ease.",
  ogDescription:
    "Elevate your fitness business with GymFlow254's modern tools. Engage members, simplify operations, and grow your gym with ease.",
});

// const date = computed(() => {
//   const targetDate = new Date(2025, 1, 2).getTime(); // Target timestamp
//   const now = Date.now(); // Current timestamp
//   const timeDifference = targetDate - now;

//   if (timeDifference <= 0) {
//     // Countdown finished
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }

//   const seconds = Math.floor((timeDifference / 1000) % 60);
//   const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
//   const hours = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
//   const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

//   return { days, hours, minutes, seconds };
// });
</script>

<template>
  <div>
    <section id="hero-14" class="bg--scroll hero-section">
      <div class="container text-center">
        <!-- HERO TEXT -->
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-9">
            <div class="hero-14-txt color--white wow fadeInUp">
              <!-- Title -->
              <h1 class="s-60 w-900 mb-5">The Future of Gym Management</h1>
              <!-- Text -->
              <p class="s-21">
                Say goodbye to manual processes and scattered tools. GymFlow254
                is your all-in-one platform for seamless gym management.
              </p>
              <!-- HERO QUICK FORM -->
              <form
                name="quickform"
                class="quick-form form-shadow"
                action="https://formspree.io/f/xldeqezl"
                method="POST"
              >
                <!-- Form Inputs -->
                <div class="input-group">
                  <input
                    type="email"
                    name="email"
                    class="form-control email r-06"
                    placeholder="Your email address"
                    autocomplete="off"
                    required
                  />
                  <span class="input-group-btn form-btn">
                    <button
                      type="submit"
                      class="btn r-06 btn--theme hover--theme submit"
                    >
                      Join the waitlist
                    </button>
                  </span>
                </div>
                <!-- Form Message -->
                <div class="quick-form-msg"><span class="loading"></span></div>
              </form>
            </div>

            <!-- Timer -->
            <div class="container text-center" style="margin-top: 30px">
              <Countdown
                class="d-flex justify-content-center flex-wrap align-items-center"
                style="gap: 50px"
                :date="new Date('Feb 2, 2025 00:00:00')"
                v-slot="{ days, hours, minutes, seconds }"
              >
                <!-- Days -->
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-md-row"
                  style="gap: 10px"
                >
                  <h5 class="fw-bold display-6 mb-0 text-white">
                    {{ days }}
                  </h5>
                  <p class="small mb-0 text-black">Days</p>
                </div>

                <!-- Hours -->
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-md-row"
                  style="gap: 10px"
                >
                  <h5 class="fw-bold display-6 mb-0 text-white">
                    {{ hours }}
                  </h5>
                  <p class="small mb-0 text-black">Hours</p>
                </div>

                <!-- Minutes -->
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-md-row"
                  style="gap: 10px"
                >
                  <h5 class="fw-bold display-6 mb-0 text-white">
                    {{ minutes }}
                  </h5>
                  <p class="small mb-0 text-black">Minutes</p>
                </div>

                <!-- Seconds -->
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-md-row"
                  style="gap: 10px"
                >
                  <h5 class="fw-bold display-6 mb-0 text-white">
                    {{ seconds }}
                  </h5>
                  <p class="small mb-0 text-black">Seconds</p>
                </div>
              </Countdown>
            </div>
          </div>
        </div>
        <!-- END HERO TEXT -->
        <!-- HERO IMAGE -->
        <div class="row">
          <div class="col">
            <div class="hero-14-img wow fadeInUp">
              <img
                class="img-fluid"
                src="/assets/images/dashboard-02.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        <!-- END HERO IMAGE -->
      </div>
      <!-- End container -->
      <!-- WAVE SHAPE BOTTOM -->
      <div class="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
          <path
            fill-opacity="1"
            d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <hr class="divider" />
  </div>
</template>
