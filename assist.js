function testValue(id, value, property) {
  var dummy = document.createElement('p')
  dummy.style[property] = value

  if (dummy.style[property]) {
    root.classList.add(id)
    return true
  }

  root.classList.add('no-' + id)
  return false
}
