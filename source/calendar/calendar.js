// calendar.js
// calculate dates
const calendarGrid = document.getElementById('calendar-grid');
const calendarDayLabel = document.getElementById('calendar-day-label');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentView = 'month';

function renderCalendar(date) {
  calendarGrid.innerHTML = '';
  calendarGrid.classList.remove('day-view', 'week-view', 'month-view');
  calendarGrid.classList.add(`${currentView}-view`);
  
  calendarDayLabel.textContent = '';
  calendarDayLabel.classList.remove('day-view', 'week-view', 'month-view');
  calendarDayLabel.classList.add(`${currentView}-view`);

  const calendarDays = document.querySelector('.calendar-days');
  calendarDays.classList.remove('day-view', 'week-view', 'month-view');
  calendarDays.classList.add(`${currentView}-view`);

  
  const year = date.getFullYear();
  const month = date.getMonth();

  // Update month/year heading
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

  // Get the first day of the month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Fill in days
  if (currentView === 'month') {
    calendarGrid.style.gridTemplateColumns = 'repeat(7, 1fr)'; // styling for month
    monthYear.textContent = `${monthNames[month]} ${year}`; // header
    
    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = `${year}-${month + 1}-${i}`;
      const recipe = localStorage.getItem(dateKey) || '';
      calendarGrid.innerHTML += `<div class="day" data-date="${dateKey}">
        ${i}${recipe ? `<div class="note">${recipe}</div>` : ''}
      </div>`;
    }

  } else if (currentView === 'week') {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay()); // start of the week
    calendarGrid.style.gridTemplateColumns = 'repeat(7, 1fr)'; // styling for week

    // header 
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    monthYear.textContent = `Week of ${monthNames[start.getMonth()]} ${start.getDate()} – ${monthNames[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      const key = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
      const recipe = localStorage.getItem(key) || '';
      calendarGrid.innerHTML += `<div class="day" data-date="${key}">
        ${day.getDate()}${recipe ? `<div class="note">${recipe}</div>` : ''}
      </div>`;
    }

  } else if (currentView === 'day') {
    calendarGrid.style.gridTemplateColumns = '1fr'; // styling for day
    monthYear.textContent = `${monthNames[month]} ${date.getDate()}, ${year}`; // header
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    calendarDayLabel.textContent = weekdayNames[date.getDay()];  // show day name
    const key = `${year}-${month + 1}-${date.getDate()}`;
    const recipe = localStorage.getItem(key) || '';
    calendarGrid.innerHTML = `<div class="day" data-date="${key}">
      ${date.getDate()}${recipe ? `<div class="note">${recipe}</div>` : ''}
    </div>`;
  }
}


renderCalendar(currentDate);

prevBtn.addEventListener('click', () => {
  if (currentView === 'month') {
    currentDate.setMonth(currentDate.getMonth() - 1);
  } else if (currentView === 'week') {
    currentDate.setDate(currentDate.getDate() - 7);
  } else if (currentView === 'day') {
    currentDate.setDate(currentDate.getDate() - 1);
  }
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  if (currentView === 'month') {
    currentDate.setMonth(currentDate.getMonth() + 1);
  } else if (currentView === 'week') {
    currentDate.setDate(currentDate.getDate() + 7);
  } else if (currentView === 'day') {
    currentDate.setDate(currentDate.getDate() + 1);
  }
  renderCalendar(currentDate);
});


document.querySelectorAll('.calendar-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentView = btn.dataset.view;

    // update button styling
    document.querySelectorAll('.calendar-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderCalendar(currentDate); // re-render based on selected view
  });
});

