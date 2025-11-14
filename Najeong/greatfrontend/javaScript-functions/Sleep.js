/**
 * @param {number} duration
 * @return {Promise<void>}
 */
export default async function sleep(duration) {
  return new Promise(res => setTimeout(() => res(), duration))
}
