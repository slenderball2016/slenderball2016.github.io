function openForm(destination) {
    document.getElementById('formModal').style.display = 'flex';
}

function closeForm() {
    document.getElementById('formModal').style.display = 'none';
}

function submitForm() {
    const form = document.getElementById('requestForm');
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    const phonePattern = /^\+?\d{10,13}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        alert("Будь ласка, введіть ім'я.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert('Введіть коректний номер телефону у форматі +380XXXXXXXXX.');
        return;
    }
    if (!emailPattern.test(email)) {
        alert('Введіть коректну адресу електронної пошти.');
        return;
    }

    saveFormData(name, phone, email);
    alert('Дані відправлено, очікуйте наш менеджер зв`яжеться з вами!');
    closeForm();
}



