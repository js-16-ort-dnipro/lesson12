
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

    import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
   
    // const firebaseConfig = {
    //     ...Insert Keys Here...
    // };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
