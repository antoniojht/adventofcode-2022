function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let possibleValues = [];

  for (let i = 0; i < giftsCities.length; i++) {
    let actualBag = [];

    for (let j = i; j < giftsCities.length; j++) {
      let actualBagValue = actualBag.reduce((acc, value) => {
        return acc + value;
      }, 0);

      if (i === j && giftsCities[i] <= maxGifts) {
        actualBag.push(giftsCities[i]);
      } else if (
        giftsCities[j] <= maxGifts &&
        actualBag.length + 1 <= maxCities &&
        actualBagValue + giftsCities[j] <= maxGifts
      ) {
        actualBag.push(giftsCities[j]);
      }
    }

    possibleValues.push(actualBag);
    actualBag = [];
  }

  let maxValues = possibleValues.map((value) => {
    value = value.reduce((acc, value) => {
      return acc + value;
    }, 0);

    return value;
  });

  maxValues.sort((a, b) => {
    return b - a;
  });

  return maxValues[0];
}

// const giftsCities = [12, 3, 11, 5, 7]; // [12, 3, 5] (20)
// const maxGifts = 20;
// const maxCities = 3;

// getMaxGifts(giftsCities, maxGifts, maxCities); // 20

// getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
// getMaxGifts([50], 15, 1); // 0
// getMaxGifts([50], 100, 1) // 50
// getMaxGifts([50, 70], 100, 1) // 70
// getMaxGifts([50, 70, 30], 100, 2) // 100
// getMaxGifts([50, 70, 30], 100, 3) // 100
// getMaxGifts([50, 70, 30], 100, 4) // 100

getMaxGifts([0], 20, 3); // 20
