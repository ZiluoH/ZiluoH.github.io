$(document).ready(function() {
  $('#signuptab').click(function(){
    $('#signup').show();
    $('#signuptab').addClass('active')
    $('#login').hide();
    $('#logintab').removeClass('active')
  });
  $('#logintab').click(function(){
    $('#signup').hide();
    $('#signuptab').removeClass('active')
    $('#login').show();
    $('#logintab').addClass('active')
  })
})



$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});


var userlist = [
  {
    fname:"Michael",
    lname:"Jordan",
    email:"jordan@gmail.com",
    pw:"jordan"
  },
  {
    fname:"FirstName",
    lname:"LastName",
    email:"test@gmail.com",
    pw:"test"
  },
  {
    fname:"1",
    lname:"1",
    email:"1@gmail.com",
    pw:"1"
  }
  // {
  //   fname:"",
  //   lname:"",
  //   email:"",
  //   pw:""
  // }
]


function login() {
  var userEmail = document.getElementById('loginEmail').value
  var pw = document.getElementById('loginPW').value

  for (var i = 0; i < userlist.length; i++) {
    if ( (userEmail == userlist[i].email) && (pw == userlist[i].pw)) 
    {
      console.log("login")
      break
    }
    else{
      console.log("fail")
      break
    }
  }
}

function signup() {
  var newfname = document.getElementById('newfname').value
  var newlname = document.getElementById('newlname').value
  var newemail = document.getElementById('newemail').value
  var newpw = document.getElementById('newpw').value
  var newuser = {
      fname:newfname,
      lname:newlname,
      email:newemail,
      pw:newpw
                }

  for (var i = 0; i < userlist.length; i++) {
    if (newemail == userlist[i].email) {
      console.log('sameemail')
      break
    } else if (newpw.length < 6){
      alert('your pw is too short, must be longer than 6 characters')
      break
    } 
      userlist.push(newuser)
    
  }

}