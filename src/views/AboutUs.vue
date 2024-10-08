<template>
  <div class="header-row"></div>
  <div class="about">
    <h1>About Us</h1>
    <section class="section-mission">
      <h2>What We Do?</h2>
      <p>
        At our library, we are dedicated to preserving books and safeguarding human knowledge for
        future generations. We collect, restore, and maintain a vast array of written works, from
        ancient manuscripts to contemporary literature, ensuring that valuable information is
        accessible to all. Through our extensive preservation efforts, we protect these materials
        from decay, damage, and loss, allowing them to continue serving as vital resources for
        education and research. We also digitize rare and fragile texts, making them available to a
        global audience while minimizing physical handling. Our mission is to sustain the written
        word and empower individuals with the knowledge contained within these invaluable
        collections.
      </p>
    </section>

    <section class="section-people">
      <h2>Our People</h2>
      <ul>
        <li><strong>Faisal Abdillah:</strong> Founder - Passionate about books and knowledge.</li>
        <li>
          <strong>Rinto Tampubolon:</strong> Coordinator - Expert in nonprofit management and
          logistics.
        </li>
        <li>
          <strong>Yogi Sarumaha:</strong> Outreach Specialist - Dedicated to connecting with
          communities and fostering relationships.
        </li>
        <li>
          <strong>Emma Clarkson:</strong> Senior Care Advocate - Advocates for author rights and
          ensures high standards of literature care are maintained.
        </li>
        <li>
          <strong>Marcus Yi:</strong> Development Officer - Specializes in program development and
          strategic partnerships for expanded outreach.
        </li>
        <li>
          <strong>Sophie Tran:</strong> Volunteer Coordinator - Manages book collection efforts and
          coordinates training programs to support staff and volunteer growth.
        </li>
        <li>
          <strong>Isaac Mendez:</strong> Research Specialist - Focuses on integrating the latest
          geriatric research into practical, community-based solutions.
        </li>
        <li>
          <strong>Leila Kahn:</strong> General Program Director - Oversees infrastucture
          initiatives, including book care programs and preventive care services tailored for the
          literatures.
        </li>
      </ul>
    </section>

    <section class="section-history">
      <h2>History</h2>
      <p>
        Founded over a century ago, our library began as a small collection of rare books curated by
        scholars passionate about preserving human knowledge. Over the years, we have grown into one
        of the world’s leading institutions for the conservation of literary works, manuscripts, and
        archival documents. Our commitment to safeguarding history has driven us to develop
        cutting-edge restoration and digitization technologies, allowing us to protect even the most
        fragile texts. Today, we continue this mission with a global reach, ensuring that our
        collections are accessible to scholars, researchers, and the public alike.
      </p>
    </section>

    <section class="section-why">
      <h2>Why Us?</h2>
      <p>
        We are more than just a library—we are a trusted guardian of the written word. With a team
        of expert conservators and state-of-the-art facilities, we specialize in preserving books
        and manuscripts that hold invaluable knowledge and cultural significance. Our focus on both
        physical and digital preservation ensures that our collections will endure for generations
        to come. By choosing us, you support an institution dedicated to the meticulous care of
        humanity’s intellectual and literary heritage.r families, knowing that their loved ones are
        cared for with compassion and professionalism.
      </p>
    </section>
  </div>
</template>

<script>
// export default {
//   name: 'About'
// }
</script>

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

.about {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.about h1 {
  color: #133178;
  margin-bottom: 30px;
}

.section-mission,
.section-history {
  background-color: #a2d5e3;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-style: outset;
}

.section-people,
.section-why {
  background-color: #a2d5e3;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-style: outset;
}

.about h2 {
  color: #126596;
  margin-bottom: 10px;
}

.about p,
.about li {
  text-align: left;
  color: #333;
}

.about ul {
  list-style-type: none;
  padding: 0;
  margin-left: 20px;
}

.about li {
  margin-bottom: 10px;
  font-size: 16px;
  padding-left: 10px;
}
</style>
