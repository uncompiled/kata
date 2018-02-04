function isLeapYear (inputDate) {
  // Source: https://www.mathsisfun.com/leap-years.html
  const year = inputDate.getFullYear()
  return year % 4 === 0 ? year % 100 !== 0 || year % 400 === 0 : false
}

function dayOfYear (inputDate) {
  // Days that have passed since the first day of the month
  const DAYS = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]

  const month = inputDate.getMonth()
  const date = inputDate.getDate()
  const dayOfYear = DAYS[month] + date

  // If it's after February on a leap year, add one to the day
  return month > 1 && isLeapYear(inputDate) ? dayOfYear + 1 : dayOfYear
}

module.exports = dayOfYear

if (require.main === module) {
  console.log(`Day of year: ${dayOfYear(new Date())}`)
}
