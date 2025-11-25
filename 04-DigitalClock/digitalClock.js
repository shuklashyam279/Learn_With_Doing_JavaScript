const clock = document.getElementById('clock');
const dateDisplay = document.getElementById('date');

function updateClock() {
  const date = new Date();
  
  // Different ways to format time
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  // Format date
  const fullDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  clock.innerHTML = time;
  if (dateDisplay) dateDisplay.innerHTML = fullDate;
}

updateClock(); // Show immediately
setInterval(updateClock, 1000);

