(() => {
  const desktopBreakpoint = 750;

  const openProductAccordionsOnDesktop = () => {
    if (window.innerWidth < desktopBreakpoint) return;

    document.querySelectorAll('.product__accordion details').forEach((details) => {
      details.open = true;
      details.querySelector('summary')?.setAttribute('aria-expanded', 'true');
    });
  };

  document.addEventListener('DOMContentLoaded', openProductAccordionsOnDesktop);
})();
