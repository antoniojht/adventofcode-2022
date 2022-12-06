function wrapping(gifts) {
  return gifts.map((gift) => {
    const topBottom = '*'.repeat(gift.length + 2);

    return `${topBottom}\n*${gift}*\n${topBottom}`
  })
}
