function goToContentPage() {
    const name = document.getElementById('username').value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    // Save the name in localStorage for access on the next page
    localStorage.setItem('username', name);
    // Redirect to the content page
    window.location.href = 'content.html';
}
