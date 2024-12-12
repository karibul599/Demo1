
  function showModal() {
    document.getElementById('logoutModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('logoutModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function confirmLogout() {
    window.location.href ='../loginPage/b.html'// Redirect to login page
}
    //button link
    // function navigateToDashboard() {
    //   window.location.href = "dashboard.html";
    // }
    // function navigateToProfile() {
    //   window.location.href = "profile.html";
    // }
    function navigateToDashboard() {
      fetch('dashboard.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('middle1').innerHTML = data;
          })
          .catch(error => console.error('Error loading the dashboard:', error));
  }
  
  function navigateToProfile() {
      fetch('profile.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('middle1').innerHTML = data;
          })
          .catch(error => console.error('Error loading the profile:', error));
  } 
  window.onload = function() {
    navigateToDashboard(); // ডিফল্টভাবে Dashboard পেজ লোড হবে
};