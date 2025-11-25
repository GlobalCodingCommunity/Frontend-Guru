export default function throttle(func, wait) {
  let counterId = null;

  return function () {
    const context = this;
    const args = arguments;

    if (counterId) {
      return;
    }

    func.apply(context, args);

    counterId = setTimeout(() => {
      counterId = null;
    }, wait);
  };
}
