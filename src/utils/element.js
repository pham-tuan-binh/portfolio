function getCenter(element) {
  const position = element.getBoundingClientRect();
  const center = {
    x: position.x + position.width / 2,
    y: position.y + position.height / 2,
  };

  return center;
}

export { getCenter };
