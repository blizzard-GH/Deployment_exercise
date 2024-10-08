<template>
  <div class="container">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook" class="col-12 form">
      <div class="form-group">
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required class="input-field" />
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required class="input-field" />
      </div>
      <button type="submit" class="submit-btn">Add Book</button>
    </form>
    <BookList />
  </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../init.js'
import { collection, addDoc } from 'firebase/firestore'

import BookList from '../components/BookList.vue'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a number')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })
        isbn.value = ''
        name.value = ''
        alert('Book added successfully')
      } catch (error) {
        console.error('Error adding book: ', error)
      }
    }

    return {
      isbn,
      name,
      addBook
    }
  },

  components: {
    BookList
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-btn {
  background-color: #2f84b5;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #56ccd2;
}

.submit-btn:active {
  background-color: #3baec5;
  box-shadow: 0 2px #666;
  transform: translateY(6px);
}
</style>
