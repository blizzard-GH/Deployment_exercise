<template>
  <div class="header-row"></div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <div class="donation">
      <h1>Donation Page</h1>
      <p>
        This is the donation page. Here you can support our efforts to preserve and maintain old
        literatures. Every contribution makes a significant impact for human knowledge.
      </p>
      <form @submit.prevent="handleLogout">
        <div class="text-center">
          <button type="submit" class="donate-button">Donate Now</button>
        </div>
      </form>
    </div>
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

.donation {
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

.donation h1 {
  color: #133178;
  margin-bottom: 20px;
}

.donation p {
  text-align: left;
  color: #333;
  margin-bottom: 20px;
}

.donate-button {
  background-color: #ec5f08;
  color: white;
  border: rgb(123, 123, 123);
  border-style: double;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px #999;
  transition: all 0.3s;
}

.donate-button:hover {
  background-color: #f86307;
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.donate-button:active {
  background-color: #e25b07;
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}
</style>
