function countTime(leds) {
  let timer = 0;

  while (leds.some((led) => led === 0)) {
    leds = leds.map((led, index) => {
      return led === 0 &&
        ((index != 0 && leds[index - 1] == 1) ||
          (index == 0 && leds.slice(-1) == 1))
        ? 1
        : led;
    });

    timer += 7;
  }

  return timer;
}

