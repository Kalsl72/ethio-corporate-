// Authentication
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password);
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password);
}

// Blog Posts
function savePost() {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    
    db.collection("posts").add({
        title: document.getElementById('post-title').value,
        content: document.getElementById('post-content').value,
        author: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Load Posts
function loadPosts() {
    const db = firebase.firestore();
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        let postsHTML = "";
        snapshot.forEach((doc) => {
            postsHTML += `
                <div class="post">
                    <h3>${doc.data().title}</h3>
                    <p>${doc.data().content}</p>
                    <small>By ${doc.data().author}</small>
                </div>
            `;
        });
        document.getElementById('posts-container').innerHTML = postsHTML;
    });
}

// Newsletter
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    const db = firebase.firestore();
    db.collection("newsletters").add({ email: email });
}
