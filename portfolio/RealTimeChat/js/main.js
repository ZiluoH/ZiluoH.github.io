// Initialize Firebase
  var config = {
    apiKey: "AIzaSyByGFAZ-Xv3vnN45bWJel4Ta9Hz9yNsTnU",
    authDomain: "realtimechat-84598.firebaseapp.com",
    databaseURL: "https://realtimechat-84598.firebaseio.com",
    projectId: "realtimechat-84598",
    storageBucket: "realtimechat-84598.appspot.com",
    messagingSenderId: "534860242480"
  };
  firebase.initializeApp(config);

// Get a reference to the root of the Database
var rootRef = firebase.database().ref();

var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn')
var loginDiv = document.getElementById('login');
var chatDiv = document.getElementById('chat');
var usenameInput = document.getElementById('username');
var textInput = document.getElementById('text');
var postButton = document.getElementById('post');
var chatHistory = document.getElementById('result')


// click login event
// loginBtn.addEventListener('click', e => {
// 	firebase.auth().signInAnonymously();
// });
	function login() {
		var loginUserName = document.getElementById('username').value
		if (loginUserName != "") {
			firebase.auth().signInAnonymously();
		} else {
			alert("Enter your name please.")
		}
	}

// click logout event
logoutBtn.addEventListener('click', e => {
	firebase.auth().signOut();
});

// auth listener
firebase.auth().onAuthStateChanged(chatUser => {
	console.log(chatUser);
	if (chatUser) {
		// if login
		loginDiv.classList.add('hide');
		chatDiv.classList.remove('hide');


		startListening();

	} else {
		// if logout
		loginDiv.classList.remove('hide');
		chatDiv.classList.add('hide');
		usenameInput.value = "";
		chatHistory.innerHTML = "";
	}
}) 



postButton.addEventListener("click", function () {
	var msgUser = usenameInput.value;
	var msgText = textInput.value;
	rootRef.push({username:msgUser, text:msgText});
	textInput.value = "";
});

function startListening() {
	rootRef.on('child_added', function (snapshot) {
		var msg = snapshot.val();

		var msgUsernameElement = document.createElement("b");
		msgUsernameElement.textContent = msg.username;

		var msgTextElement = document.createElement("p");
		msgTextElement.textContent = msg.text;

		var msgElement = document.createElement("div");
		msgElement.appendChild(msgUsernameElement);
		msgElement.appendChild(msgTextElement);
		msgElement.classList.add("msg")

		document.getElementById("result").appendChild(msgElement);
	})
}

	//start listening for data
