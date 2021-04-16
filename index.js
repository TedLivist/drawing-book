function countPage(n, p) {
  let x = p
  let y = n - p
  if (n % 2 == 0) {
    y += 1
  }

  return Math.min(Math.floor(x/2), Math.floor(y/2))

}
