/**
 * @param {Function} func - Fungsi yang ingin ditunda pengeksekusiannya.
 * @param {number} delay - Waktu tunda dalam milidetik (ms).
 * @returns {Function} - Fungsi baru yang ter-debounce.
 */
export function debounce(func, delay = 500) {
  let timer;

  return function (...args) {
    const context = this;
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
