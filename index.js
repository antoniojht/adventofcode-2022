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

