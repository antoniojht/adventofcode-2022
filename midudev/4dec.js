function fitsInOneBox(boxes) {
  const boxesWithArea = boxes.map((box) => {
    const area = box.l * box.w * box.h;
    box.area = area;

    return box;
  });

  boxesWithArea.sort((a, b) => a.area - b.area);

  let fits = true;

  boxesWithArea.forEach((box, i) => {
    if (
      i < boxesWithArea.length - 1 &&
      (box.l >= boxesWithArea[i + 1].l ||
        box.w >= boxesWithArea[i + 1].w ||
        box.h >= boxesWithArea[i + 1].h)
    ) {
      fits = false;
    }
  });

  return fits;
}