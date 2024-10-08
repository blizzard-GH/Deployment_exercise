<template>
  <div class="container">
    <h2>Charity Events</h2>
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Total Donation</th>
          <th>Total Donors</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" :key="index">
          <td>{{ event['EventName'] }}</td>
          <td>{{ event['EventLocation'] }}</td>
          <td>{{ formatDate(event['EventTime']) }}</td>
          <td>{{ event['TotalDonation'].toLocaleString() }}</td>
          <td>{{ event['TotalDonors'] }}</td>
          <td>{{ event['EventRating'] }}</td>
          <td>
            <button @click="rateEvent(index)">Rate</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import events from '../assets/JSON/CharityEvents.json'

export default {
  setup() {
    const eventsData = ref(events)

    const formatData = (data, type) => {
      if (type === 'date') {
        const date = new Date(data)
        return date.toLocaleDateString()
      } else if (type === 'rating') {
        return parseFloat(data).toFixed(2)
      }
    }

    const rateEvent = (index) => {
      const inputRating = parseFloat(prompt('Please enter your rating (1-5):', '5'))
      if (inputRating && inputRating >= 1 && inputRating <= 5) {
        const event = { ...eventsData.value[index] }
        const currentRating = event.EventRating || 0
        const currentDonors = event.TotalDonors || 0

        // Calculating the new average rating
        event.TotalDonors = currentDonors + 1
        event.EventRating = (currentRating * currentDonors + inputRating) / event.TotalDonors

        eventsData.value.splice(index, 1, event)

        // Writing to local data
        localStorage.setItem('eventsData', JSON.stringify(eventsData.value))

        alert(
          `Thank you for rating. New average rating: ${formatData(event.EventRating, 'rating')}`
        )
      } else {
        alert('Invalid rating, must be between 1 and 5.')
      }
    }

    onMounted(() => {
      const storedEvents = localStorage.getItem('eventsData')
      if (storedEvents) {
        eventsData.value = JSON.parse(storedEvents).map((event) => ({
          ...event,
          EventRating: formatData(event.EventRating, 'rating')
        }))
      }
    })

    return {
      events: eventsData,
      formatDate: (dateString) => formatData(dateString, 'date'),
      formatRating: (rating) => formatData(rating, 'rating'),
      rateEvent
    }
  }
}
</script>

<style scoped>
.container {
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

h2 {
  color: #15ac9a;
  margin-bottom: 20px;
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #137844;
  color: white;
}

button {
  background-color: #137844;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #15ac9a;
}

.refresh-button {
  background-color: #0f6741;
  color: white;
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

.refresh-button:hover {
  background-color: #4b9118;
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.refresh-button:active {
  background-color: #1f788a;
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}
</style>
