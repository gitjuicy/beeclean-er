(function () {
  // Only run on search results page
  if (!document.querySelector('.template-search')) return;

  // Remove non-product results (articles, pages) to match collection layout
  var gridItems = document.querySelectorAll('.template-search__results .grid__item');
  gridItems.forEach(function (item) {
    if (!item.querySelector('.product-card-wrapper')) {
      item.remove();
    }
  });
})();
