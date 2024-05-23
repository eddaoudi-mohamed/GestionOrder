export function formatDateTime(dateTimeString: string): string {
  const dateTime = new Date(dateTimeString);

  // Get the day, month, and year
  const day = dateTime.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[dateTime.getMonth()];
  const year = dateTime.getFullYear();

  // Get the time
  const hours = dateTime.getHours();
  const minutes = ("0" + dateTime.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  // Format the date and time
  const formattedDateTime = `${day}th ${monthName} ${year} at ${formattedHours}:${minutes} ${ampm}`;

  return formattedDateTime;
}
