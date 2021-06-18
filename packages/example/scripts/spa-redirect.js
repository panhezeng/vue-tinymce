(function () {
  if (location.search) {
    var paramName = "?spa_redirect=";
    if (location.search.indexOf(paramName) !== -1) {
      var url =
        "/vue-tinymce" +
        decodeURIComponent(location.search.replace(paramName, ""));
      // console.log(url);
      history.replaceState(null, null, url);
    }
  }
})();
