export default async function sleep(duration: number): Promise<void> {
  // // first approach
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
