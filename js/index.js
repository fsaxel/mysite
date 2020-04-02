$( document ).ready(function() {
  $( ".github" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to be redirected to: https://github.com/fsaxel",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33cc33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://github.com/fsaxel";
      }
    })
  });
  $( ".keybase" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to be redirected to: https://keybase.io/fsaxel",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33cc33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://keybase.io/fsaxel";
      }
    })
  });
  $( ".twitter" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to be redirected to: https://twitter.com/fsaxel",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33cc33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://twitter.com/fsaxei";
      }
    })
  });
  $( ".aion" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to be redirected to: https://aionesports.gg",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33cc33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://aionesports,gg";
      }
    })
  });
  $( ".oxey" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to be redirected to: https://oxeyteam.com",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33cc33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://oxeyteam.com";
      }
    })
  });
  $( ".furious" ).click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are going to be redirected to: https://furiousgaming.gg",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#33cc33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        window.location.href = "https://furiousgaming.gg";
      }
    })
  });
});
