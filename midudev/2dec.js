function countHours(year, holidays) {
  let hours = 0;

  holidays.forEach((day) => {
    const date = new Date(`${day}/${year}`)
    
    if (date.getDay() != 0 && date.getDay() != 6) hours += 2;
  })

  return hours;
}
