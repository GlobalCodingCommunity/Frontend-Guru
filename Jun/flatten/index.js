function helper (value, res) {
  for(let num of value) {
    if (Array.isArray(num)) {
      helper(num, res)
    } else {
      res.push(num)
    }
  }
}

export default function flatten(value) {
  const res = []
  helper(value, res)
  return res
}
