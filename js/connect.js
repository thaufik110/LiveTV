document.addEventListener("DOMContentLoaded", function() {
    if (!navigator.onLine) {
        document.body.innerHTML = '<div class="no-connection"><h1>No Internet Connection</h1><p>Please check your internet connection and try again.</p></div>';
    }
});