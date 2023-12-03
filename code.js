 window.addEventListener('resize', function () {
  if (window.innerWidth >= 600) {
      
      document.body.style.backgroundColor = /assets/another_screen.png;
  } else {
    document.body.style.backgroundColor = /assets/back_ground_desktop.png;
  }
});