<template>
  <div class="header-row"></div>
  <div class="donation">
    <h1>Welcome, administrator!</h1>
    <p>You can manage users here:</p>
    <div class="row mt-5">
      <h4>Users list:</h4>
      <DataTable :value="users" dataKey="id" responsiveLayout="scroll">
        <TableColumn field="username" header="Username"></TableColumn>
        <TableColumn field="firstname" header="First Name"></TableColumn>
        <TableColumn field="lastname" header="Last Name"></TableColumn>
        <TableColumn field="role" header="Role"></TableColumn>
        <TableColumn field="address" header="Address"></TableColumn>
        <TableColumn field="gender" header="Gender"></TableColumn>
        <TableColumn field="motivation" header="Motivation"></TableColumn>
        <TableColumn field="isaustralian" header="Is Australian">
          <template #body="slotProps">{{ slotProps.data.isaustralian ? 'Yes' : 'No' }}</template>
        </TableColumn>
        <TableColumn field="password" header="Password"></TableColumn>
        <TableColumn header="Action">
          <template #body="slotProps">
            <button @click="deleteUser(slotProps.data.id)">Delete</button>
          </template>
        </TableColumn>
      </DataTable>
    </div>
    <div class="row mt-2 mb-2">
      <div class="col-3">
        <button class="btn refresh-button" @click="refreshData">Refresh Data</button>
      </div>
    </div>
    <form @submit.prevent="handleLogout">
      <div class="text-center"></div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db } from '../init.js'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

export default {
  setup() {
    const users = ref([])

    const refreshData = async () => {
      const tempUsers = []
      const querySnapshot = await getDocs(collection(db, 'SAHusers'))
      querySnapshot.forEach((doc) => {
        let userData = doc.data()
        userData.id = doc.id // Appending ID for use as a key in lists
        tempUsers.push(userData)
      })
      users.value = [...tempUsers] // Updating the users reactive data
    }

    const deleteUser = async (userId) => {
      await deleteDoc(doc(db, 'SAHusers', userId))
      refreshData()
    }

    onMounted(() => {
      refreshData()
    })

    return { users, refreshData, deleteUser }
  }
}
</script>

<style scoped>
.header-row {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
}

.header-row-text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: large;
  text-align: right;
  padding-right: 20px;
}

.donation {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.refresh-button {
  background-color: #0f6741;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  box-shadow: 0 4px #999;
}

.refresh-button:hover {
  background-color: #4b9118;
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.refresh-button:active {
  background-color: #1f788a;
  box-shadow: 0 2px #666;
  transform: translateY(6px);
}
</style>
