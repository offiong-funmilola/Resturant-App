
const bookingBtn = document.getElementById('booking-btn');

function bookBtnHandler(e) {
    const div = document.createElement("div");
    div.innerHTML = ` 
        <form id="form">
            <input type="text" placeholder="Name" id='name' class="input" />
            <input type="tel" placeholder="Phone" id='phone' class="input" />
            <input type="date" min="01/01/2023"  id='date' max="12/31/2023" placeholder="M/D/YYYY" class="input" />
            <input type="time" min="7:00" max="20:00" placeholder="Time" id='time' class="input" />
            <select id='booking' class="input">
                <option value="person" selected>person</option>
                <option value="family">Family</option>
                <option value="organization">Organization</option>
            </select>
            <button type="submit" class="btn">Book</button>
        </form>
    `
    div.classList.add("form-container");
    const containerWrapper = document.getElementById("container-wrapper");
    containerWrapper.appendChild(div);
    containerWrapper.toggleAttribute("hidden");
}
bookingBtn.addEventListener("click", bookBtnHandler)

/*const form = document.getElementById("form");
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time')
const bookingSelect = document.getElementById('booking');
const nameInputValue = nameInput.value;
const phoneInputValue = phoneInput.value;
const dateInputValue = dateInput.value;
const timeInputValue = timeInput.value;
const bookingSelectValue = bookingSelect.value;

function submitHandler(e) {
    e.preventDefault();
    validateForm();
    clearForm();
}

function validateForm() {
    if (nameInputValue.length === 0 && phoneInputValue.length === 0 && dateInputValue.length === 0 && timeInputValue.length === 0 && bookingSelectValue.length === 0) {
        alert("This field is required")
    }
}

function clearForm() {
    nameInput = '';
    phoneInput = '';
    dateInput = '';
    timeInput = '';
    bookingSelect = '';
}
form.addEventListener("submit", submitHandler);*/sta