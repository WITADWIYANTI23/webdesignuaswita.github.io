function addBookmark(e) {
    e.preventDefault();
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;

    if (window.sidebar && window.sidebar.addPanel) {
        // Firefox <=22
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else if (window.opera && window.print) {
        // Opera Hotlist
        this.title = bookmarkTitle;
        return true;
    } else {
        // Other browsers (mainly WebKit - Chrome/Safari)
        alert('Tekan ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D untuk menambahkan halaman ini ke bookmark.');
    }
}
