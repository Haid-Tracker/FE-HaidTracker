const dateRangeDisplay = document.getElementById("date-range");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");

// Set nilai default
const today = new Date();
const oneMonthLater = new Date();
oneMonthLater.setMonth(today.getMonth() + 1);

startDateInput.value = today.toISOString().split("T")[0];
endDateInput.value = oneMonthLater.toISOString().split("T")[0];

// Fungsi format tanggal
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Perbarui tampilan rentang tanggal
function updateDateRangeDisplay() {
  const startFormatted = formatDate(startDateInput.value);
  const endFormatted = formatDate(endDateInput.value);
  dateRangeDisplay.textContent = `${startFormatted} - ${endFormatted}`;
}

// Periksa apakah kedua input telah diperbarui
let startDateChanged = false;
let endDateChanged = false;

function checkIfBothChanged() {
  if (startDateChanged && endDateChanged) {
    updateDateRangeDisplay();
    startDateInput.classList.add("hidden");
    endDateInput.classList.add("hidden");
    // Reset flag
    startDateChanged = false;
    endDateChanged = false;
  }
}

// Tampilkan input tanggal saat dialog diklik
dateRangeDisplay.addEventListener("click", () => {
  startDateInput.classList.remove("hidden");
  endDateInput.classList.remove("hidden");

  // Fokus pada input tanggal pertama
  startDateInput.focus();
});

// Event listener untuk perubahan pada input tanggal
startDateInput.addEventListener("change", () => {
  startDateChanged = true; // Tandai bahwa start-date telah diubah
  checkIfBothChanged();
});

endDateInput.addEventListener("change", () => {
  endDateChanged = true; // Tandai bahwa end-date telah diubah
  checkIfBothChanged();
});

// Inisialisasi tampilan saat halaman dimuat
updateDateRangeDisplay();
