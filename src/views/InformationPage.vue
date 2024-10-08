<template>
  <div class="header-row"></div>
  <div class="information-page">
    <h1>Information Hub</h1>
    <section>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Health and Well-being Information</h2>

        <div class="slideshow-container">
          <img src="@/assets/images/info_1.png" alt="Info 1" class="img-fluid" />
          <div class="text">
            One key fact in learning is that active engagement significantly enhances knowledge
            retention. Studies have shown that learners who participate in discussions, hands-on
            activities, or problem-solving exercises tend to understand and remember concepts better
            than those who passively absorb information. Additionally, spacing out learning over
            time, known as spaced repetition, improves long-term retention compared to cramming.
            Feedback is also essential, as it helps learners identify mistakes and correct their
            understanding. Finally, personalized learning approaches, which cater to an individual's
            pace and style, are more effective than one-size-fits-all methods.
          </div>
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Event Calendar</h2>
        <p>This will need to be linked to a calendar script or service</p>
      </div>
    </section> -->

    <section>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Attendance Guidelines</h2>
        <p>
          Find all you need to know about how to attend our charity events, including registration,
          required materials, and other key details.
        </p>
      </div>
    </section>

    <section>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Book Donation Opportunities</h2>
        <p>
          Learn about how, when, and where you can contribute to our cause. Your donations help us
          continue our work with the elderly in Australia.
        </p>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.header-row {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  background-color: #133178;
  color: white;
  padding: 10px 0;
  border-radius: 10px;
  margin-bottom: 20px;
}

.information-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.information-page h1 {
  color: #133178;
  margin-bottom: 30px;
}

.information-page h2 {
  color: #126596;
  margin-bottom: 20px;
  margin-top: 20px;
}

.slideshow-container {
  position: relative;
  max-width: 100%;
  margin: 20px 0;
}

.mySlides,
.prev,
.next {
  width: 100%;
  overflow: hidden;
}

.mySlides img {
  width: 100%;
  vertical-align: middle;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  background-color: #137844; 
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.information-page p,
.information-page li {
  text-align: left;
  color: #333;
  margin-bottom: 10px;
}

.mySlides img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
