function bound(a, b) {
  return a > b || a < -b ? -b : a;
}

export { bound };
