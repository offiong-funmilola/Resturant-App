
const bookingBtn = document.getElementById('booking-btn');
const form = document.getElementById("form");
const paragraph = document.getElementById("valid-para")

bookingBtn.addEventListener("click", bookBtnHandler)
form.addEventListener("submit", submitHandler);

function showMessage(input, message, type) {
    const msg = input.parentElement.querySelector('small');
    msg.innerText = message;
    msg.classList.add = type ? 'success' : 'error';
    return type;
}

function showSuccess(input) {
    return showMessage(input, "", true)
}

function showError(input, message) {
    return showMessage(input, "Required", false);
}

function hasValue(input){
    if(input.value.length === 0) {
        return showError(input);
    }
    return showSuccess(input);
}

const dataCollection = async (user) => {
    const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    console.log(data)
    user = data;
}

function submitHandler(e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let date = document.getElementById('date');
    let time = document.getElementById('time');
    let booking = document.getElementById('booking');

    const validName = hasValue(name);
    const validPhone = hasValue(phone);
    const validDate = hasValue(date);
    const validTime = hasValue(time);
    const validBooking = hasValue(booking);
    
    if(validName && validPhone && validDate && validTime && validBooking) {
        let formData = {
            name: name.value, 
            phone: phone.value,
            date: date.value,
            time: time.value,
            booking: booking.value
        }
        dataCollection(formData)
        //form.submit();
    }

    name = '';
    phone = '';
    date = '';
    time = '';
    booking = '';
  
}

function bookBtnHandler(e) {
    let div = document.createElement('div')
    div.innerHTML = `
        <div>
            <input type="text" placeholder="Name" id='name' name='name' class="input" />
            <small></small>
        </div>
        <div>
            <input type="tel" placeholder="Phone" id='phone' name='phone' class="input" />
            <small></small>
        </div>
        <div>
            <input type="date" id='date' value="" placeholder="M/D/YYYY" name='date' class="input" />
            <small></small>
        </div>
        <div>
            <input type="time" placeholder="HH:MM" id='time' value="" name='time' class="input" />
            <small></small>
        </div>
        <div>
            <select id='booking' name='value' class="input">
                <option value="person" selected>person</option>
                <option value="family">Family</option>
                <option value="organization">Organization</option>
            </select>
            <small></small>
        </div>
        <button type="submit" class="btn">Book</button>
    `
    div.classList.add('form-container')
    if (!form.hasChildNodes()) {
        form.appendChild(div)
    } 
    //form.className = "hidden" === 'active' ? 'inactivate' : 'activate';
    form.toggleAttribute("hidden");
}

