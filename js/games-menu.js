(function () {
  function openGameLinksInNewTab() {
    document.querySelectorAll('.menus_item_child').forEach(function (list) {
      var group = list.parentElement.querySelector('.site-page.group');
      if (!group || group.textContent.trim() !== '游戏') return;
      list.querySelectorAll('a.site-page.child').forEach(function (link) {
        link.target = '_blank';
        link.rel = 'noopener';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openGameLinksInNewTab);
  } else {
    openGameLinksInNewTab();
  }

  document.addEventListener('pjax:complete', openGameLinksInNewTab);
})();
