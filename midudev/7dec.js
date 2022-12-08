function getGiftsToRefill(a1, a2, a3) {
  const a1Set = new Set(a1);
  const a2Set = new Set(a2);
  const a3Set = new Set(a3);

  const almacen = [...a1Set, ...a2Set, ...a3Set];

  const refill = [];

  almacen.some((element) => {
    if (almacen.indexOf(element) === almacen.lastIndexOf(element)) {
      refill.push(element);
    }
  });

  return refill;
}