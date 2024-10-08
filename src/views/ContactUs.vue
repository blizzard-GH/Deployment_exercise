<template>
  <div class="header-row"></div>
  <div class="contact-us">
    <h1>Contact Us</h1>

    <section class="contact-section">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Contact by Form</h2>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button class="btn btn-submit" type="submit">Submit</button>
        </form>
      </div>
    </section>

    <section class="contact-section">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Contact by Email</h2>
        <a href="mailto:elderlycare@gmail.com">Send us an Email</a>
      </div>
    </section>

    <section class="contact-section">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <h2>Arrange an Event with Us</h2>
        <form @submit.prevent="handleEventSubmission" class="contact-form">
          <div class="form-group">
            <label for="event-name">Event Name:</label>
            <input type="text" id="event-name" name="event-name" required />
          </div>

          <div class="form-group">
            <label for="event-date">Event Date:</label>
            <input type="date" id="event-date" name="event-date" required />
          </div>

          <div class="form-group">
            <label for="event-details">Event Details:</label>
            <textarea id="event-details" name="event-details" required></textarea>
          </div>

          <button class="btn btn-submit" type="submit">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  methods: {
    handleSubmit() {
      // For next project, handle the contact form submission logic here
    },
    handleEventSubmission() {
      // For next project, handle the event form submission logic here
    }
  }
}
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

.contact-us {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.contact-us h1 {
  color: #133178;
  margin-bottom: 30px;
}

.contact-section {
  background-color: #a2d5e3;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-style: outset;
}

.contact-us h2 {
  color: #126596;
  margin-bottom: 10px;
}

.contact-us p,
.contact-us li {
  text-align: left;
  color: #333;
}

.contact-us form {
  display: grid;
  grid-gap: 10px;
  margin-top: 10px;
}

.form-group {
  margin-bottom: 10px;
}

.contact-us label {
  display: block;
  margin-bottom: 5px;
}

.contact-us input[type='text'],
.contact-us input[type='email'],
.contact-us input[type='date'],
.contact-us textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* .contact-us button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact-us button:hover {
  background-color: #45a049;
} */

.contact-us a {
  color: #275fda;
  text-decoration: none;
  font-size: 16px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  box-shadow: 0 4px #999;
}

.btn-submit:hover {
  background-color: #0056b3;
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.btn-submit:active {
  background-color: #003f7f;
  box-shadow: 0 2px #666;
  transform: translateY(6px);
}
</style>
