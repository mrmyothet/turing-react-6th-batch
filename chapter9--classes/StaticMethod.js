console.log('Math ', Math.min(9, 3));

class OurMath {
  static min(a, b) {
    return a > b ? b : a;
  }
}

console.log('OurMath ', OurMath.min(9, 3));
