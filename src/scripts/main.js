export function initSiteScripts() {
  initPageBackground();
}

function initPageBackground() {
  const pageBg = document.querySelector('.l-page__bg');
  const aboutSection = document.getElementById('about');
  const timeSceneSection = document.getElementById('time-scene');

  if (!(pageBg instanceof HTMLElement) || !aboutSection || !timeSceneSection) {
    return;
  }

  const setBackgroundState = (state) => {
    pageBg.dataset.bgState = state;
  };

  const getStateFromViewportCenter = () => {
    const centerY = window.scrollY + window.innerHeight / 2;
    const aboutTop = aboutSection.offsetTop;
    const aboutBottom = aboutTop + aboutSection.offsetHeight;
    const timeSceneTop = timeSceneSection.offsetTop;
    const timeSceneBottom = timeSceneTop + timeSceneSection.offsetHeight;

    if (centerY >= timeSceneTop && centerY < timeSceneBottom) {
      return 'time-scene';
    }

    if (centerY >= aboutTop && centerY < aboutBottom) {
      return 'about';
    }

    return 'default';
  };

  const syncTimeSceneGradient = () => {
    const viewportHeight = window.innerHeight;
    const scrollableDistance = Math.max(timeSceneSection.offsetHeight - viewportHeight, 1);
    const scrolledWithinSection = Math.min(
      Math.max(window.scrollY - timeSceneSection.offsetTop, 0),
      scrollableDistance
    );
    const progress = scrolledWithinSection / scrollableDistance;

    pageBg.style.setProperty('--time-scene-height', `${Math.max(timeSceneSection.offsetHeight, viewportHeight)}px`);
    pageBg.style.setProperty('--time-scene-progress', progress.toFixed(4));
  };

  let ticking = false;
  const syncBackground = () => {
    ticking = false;
    syncTimeSceneGradient();
    setBackgroundState(getStateFromViewportCenter());
  };

  const requestSync = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(syncBackground);
  };

  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync);
  window.addEventListener('load', requestSync);
  requestSync();
}

initSiteScripts();
