/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const logger = require("firebase-functions/logger");
const cors = require("cors")({origin: true});

admin.initializeApp();

// Function to count books in the collection
exports.countbooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      console.log("Fetching books collection...");
      const bookCollection = admin.firestore().collection("books");
      const snapshot = await bookCollection.get();
      console.log("Collection fetched");
      const count = snapshot.size;
      res.status(200).send({count});
      console.log("Document count:", count);
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books.");
    }
  });
});

// Function to get all books in the collection
exports.getallbooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      console.log("Fetching books collection...");
      const bookCollection = admin.firestore().collection("books");
      const snapshot = await bookCollection.get();
      console.log("Collection fetched");
      const books = [];
      snapshot.forEach((doc) => {
        books.push({id: doc.id, ...doc.data()});
      });
      res.status(200).json(books);
      console.log("Document count:", books.length);
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books.");
    }
  });
});

// Function to capitalise all letters in book titles before saving to Firestore
exports.capitaliseBookTitles = functions.firestore.document("books/{bookId}")
    .onCreate(async (snap, context) => {
      const originalName = snap.data().name;
      const fullyCapitalisedTitle = originalName.toUpperCase();

      return snap.ref.update({
        name: fullyCapitalisedTitle,
      });
    });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
