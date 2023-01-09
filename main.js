
const bookingBtn = document.getElementById('booking-btn');
const form = document.getElementById("form");
const paragraph = document.getElementById("valid-para")

bookingBtn.addEventListener("click", bookBtnHandler)
form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();
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

    if (nameInputValue.length === 0 || phoneInputValue.length === 0 || dateInputValue.length === 0 || timeInputValue.length === 0 || bookingSelectValue.length === 0) {
        paragraph.classList.remove('hidden')
        setTimeout(() => {paragraph.classList.add('hidden')},"2000")
        return
    };
    
    clearForm();
}

function bookBtnHandler(e) {
    let div = document.createElement('div')
    div.innerHTML = `
        <input type="text" placeholder="Name" id='name' class="input" />
        <input type="tel" placeholder="Phone" id='phone' class="input" />
        <input type="date" min="01/01/2023"  id='date' max="12/31/2023" placeholder="M/D/YYYY" class="input" />
        <input type="time" min="7:00" max="20:00" placeholder="Time" id='time' class="input" />
        <select id='booking' class="input">
            <option value="person" selected>person</option>
            <option value="family">Family</option>
            <option value="organization">Organization</option>
        </select>
        <button type="submit" class="btn" >Book</button>
    `
    div.classList.add('form-container')
    if (!form.hasChildNodes()) {
        form.appendChild(div)
    } 
    form.toggleAttribute("hidden");
}



function clearForm() {
    nameInput = '';
    phoneInput = '';
    dateInput = '';
    timeInput = '';
    bookingSelect = '';
}
