<template>
  <div>
    <h1>Books list</h1>
    <h2>Filtered Result:</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.name }}</td>
          <td>{{ book.isbn }}</td>
          <td class="btn-action">
            <button class="btn update-btn" @click="updateBook(book.id)">Update</button>
            <button class="btn delete-btn" @click="deleteBook(book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="btn">
      <button class="btn refresh-btn" @click="refreshAllBooks">Show all books</button>
      <button class="btn filter-btn" @click="filterBooks">Filter Books</button>
      <button class="btn filter-btn" @click="orderBooks">Order Books</button>
      <button class="btn filter-btn" @click="limitBooks">Limit Books</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db } from '../init.js'
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  limit,
  orderBy
} from 'firebase/firestore'

export default {
  setup() {
    const books = ref([])
    const filterBooks = async () => {
      try {
        const filterVariable = prompt('Please enter the variable you want to filter:')
        const operator = prompt('Please enter an operator (> , < , ==):')
        const condition = prompt('Please enter a condition:')

        const conditionValue = isNaN(condition) ? condition : Number(condition)

        const validOperators = ['<', '>', '==']
        if (!validOperators.includes(operator)) {
          alert('Invalid operator. Please use <, >, or ==')
          return
        }

        const q = query(collection(db, 'books'), where(filterVariable, operator, conditionValue))

        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
          alert(`No results found for ${filterVariable} ${operator} ${conditionValue}`)
          return
        }

        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books:', error)
        alert(`Error: Failed to filter books.`)
      }
    }

    const orderBooks = async () => {
      try {
        const orderByField = prompt('Enter the field to order by:')
        const q = query(collection(db, 'books'), orderBy(orderByField, 'asc'))
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books:', error)
        alert(`Error: Failed to order books.`)
      }
    }

    const limitBooks = async () => {
      try {
        const limitValue = prompt('Enter the maximum number of results:')
        if (isNaN(limitValue)) {
          alert('You must input a number.')
          return
        }
        const q = query(collection(db, 'books'), limit(limitValue))
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books:', error)
        alert(`Error: Failed to limit books.`)
      }
    }

    const updateBook = async (bookId) => {
      const newBookName = prompt('Please enter a new book name:')
      const newBookISBN = prompt('Please enter a new book ISBN:')
      if (isNaN(newBookISBN)) {
        alert('ISBN must be a numeric value.')
        return
      }
      try {
        const bookRef = doc(db, 'books', bookId)
        await updateDoc(bookRef, { name: newBookName, isbn: newBookISBN })
        alert('Book updated successfully.')
      } catch (error) {
        console.error('Error updating book:', error)
        alert('There is some errors in updating the book.')
      }
    }

    const deleteBook = async (bookId) => {
      const confirmDeletion = confirm('Are you sure you want to delete this book?')
      if (confirmDeletion) {
        try {
          await deleteDoc(doc(db, 'books', bookId))
          refreshAllBooks()
        } catch (error) {
          console.error('Error deleting book:', error)
          alert('Failed to delete the book.')
        }
      }
    }

    const refreshAllBooks = async () => {
      try {
        const q = collection(db, 'books')
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    onMounted(() => {
      refreshAllBooks()
    })

    return {
      books,
      refreshAllBooks,
      updateBook,
      deleteBook,
      filterBooks,
      orderBooks,
      limitBooks
    }
  }
}
</script>

<style>
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  margin-right: 10px;
}

.update-btn {
  background-color: #007bff;
  color: white;
}

.update-btn:hover {
  background-color: #0056b3;
  color: white;
  transform: scale(1.05);
}

.delete-btn {
  background-color: #35d9dc;
  color: rgb(0, 0, 0);
}

.delete-btn:hover {
  background-color: #23c8b5;
  transform: scale(1.05);
}

.refresh-btn {
  background-color: #35d9dc;
  color: rgb(0, 0, 0);
}

.refresh-btn:hover {
  background-color: #23c8b5;
  transform: scale(1.05);
}

.filter-btn {
  background-color: #35d9dc;
  color: rgb(0, 0, 0);
}

.filter-btn:hover {
  background-color: #23c8b5;
  transform: scale(1.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

tr:hover {
  background-color: #f9f9f9;
}
</style>
