// calendar.js
// calculate dates
const calendarGrid = document.getElementById('calendar-grid');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
  calendarGrid.innerHTML = '';
  const year = date.getFullYear();
  const month = date.getMonth();

  // Update month/year heading
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Get the first day of the month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Fill in blank days
  for (let i = 0; i < firstDay; i++) {
    calendarGrid.innerHTML += `<div></div>`;
  }

  // Fill in actual days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarGrid.innerHTML += `<div class="day">${i}</div>`;
  }
}

renderCalendar(currentDate);

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});
