if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/kobo-book-exporter/sw.js', { scope: '/kobo-book-exporter/' })})}