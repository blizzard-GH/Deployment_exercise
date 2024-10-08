<template>
  <div class="header-row"></div>
  <div class="news-feed">
    <h1>News Feed</h1>
    <p>Welcome to our latest news and gallery section.</p>

    <section>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Recent News</h2>
        <div class="slideshow-container">
          <img src="@/assets/images/news_1.png" alt="News 1" class="img-fluid" />
          <div class="text-title">
            Preserving the Legacy: The Importance and Challenges of Old Manuscripts
          </div>
          <div class="text">
            Old manuscripts offer invaluable insights into historical cultures, languages, and
            knowledge systems. These documents, often handwritten on materials like parchment or
            papyrus, can date back centuries or even millennia, preserving unique records of human
            thought and creativity. Many old manuscripts, such as religious texts, scientific
            treatises, and literary works, have shaped the development of civilizations. However,
            the fragile nature of these manuscripts makes their preservation a challenge, as they
            are vulnerable to damage from light, moisture, and time. Digital preservation techniques
            have become essential in ensuring that these ancient texts are accessible to future
            generations. Studying old manuscripts not only enhances our understanding of history but
            also connects us to the intellectual and artistic heritage of past societies.
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Gallery</h2>
        <img src="@/assets/images/event_1.png" alt="Event info 1" class="img-fluid" />
        <div class="text-title">Charity event in Pakenham on Friday, 2 August 2024.</div>
        <img src="@/assets/images/event_2.png" alt="Event info 2" class="img-fluid" />
        <div class="text-title">Charity event in Pakenham on Thursday, 4 July 2024.</div>
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

.news-feed {
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

.news-feed h1 {
  color: #133178;
  margin-bottom: 30px;
}

.news-feed h2 {
  color: #126596;
  margin-bottom: 20px;
  margin-top: 20px;
}

.text-title {
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
}

.slideshow-container,
.gallery-container {
  position: relative;
  max-width: 100%;
  margin: 20px 0;
}

.newsSlide,
.galleryItem {
  display: block;
  width: 100%;
  overflow: hidden;
}

.newsSlide img,
.galleryItem img {
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

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.galleryItem {
  margin-top: 20px;
}

.caption {
  margin-top: 5px;
  font-size: 14px;
  color: #333;
}
</style>
