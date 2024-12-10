function showContent(contentId) {
    // Get all content divs inside the viewport
    const contents = document.querySelectorAll('.middle div');

    // Hide all content divs
    contents.forEach(content => {
      content.classList.remove('active');
    });

    // Show the selected content
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.classList.add('active');
    }
  }
  // Show Dashboard by default on page load
  document.getElementById('dashboardPage-1011').classList.add('active');

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