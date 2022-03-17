var firebaseConfig = {
      apiKey: "AIzaSyDFha9G35bPxVtXA_fhHMLCNCjOyUCx0bA",
      authDomain: "kwitterqwerty.firebaseapp.com",
      databaseURL: "https://kwitterqwerty-default-rtdb.firebaseio.com",
      projectId: "kwitterqwerty",
      storageBucket: "kwitterqwerty.appspot.com",
      messagingSenderId: "552329122316",
      appId: "1:552329122316:web:d668f515c338cae0839429"
    };
    
      firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}