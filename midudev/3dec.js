function distributeGifts(packOfGifts, reindeers) {
  let totalWeight = 0
  let canTake = 0

  packOfGifts.forEach((gift) => totalWeight += gift.length)
  reindeers.forEach((reindeer) => canTake += reindeer.length*2)

  return Math.floor(canTake/totalWeight)
}