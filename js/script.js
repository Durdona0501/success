var intro = "Assalomu alaykum. Iltimos quyidagi so'rovnomani to'ldiring";
    firstName = "Ismingizni kiriting."
    lastName = "Familiyangizni kiriting";
    email = "Email manzilingizni kiriting";
    telNumber = "Telefon raqamingizni kiriting";
    age = "Yoshingizni kiriting";
    birthDate = "Tug'ilgan sanangizni kiriting";
    accomadation = "Yashash manzilingizni kiriting";
    position = "Ma'lumotingizni kiriting";
    activity = "Ayni paytda faoliyatingiz nima?";
    foreignLanguage = "Qaysi chet tillarini bilasiz?";
    end = "Ma'lumotlar uchun tashakkur. Salomat bo'ling!";

var introAnswer = alert(intro);
    firstNameAnswer = prompt(firstName) .trim();
    lastNameAnswer = prompt(lastName) .trim();
    emailAnswer = prompt(email) .trim();
    telNumberAnswer = prompt(telNumber) .trim();
    ageAnswer = prompt(age) .trim();
    birthDateAnswer = prompt(birthDate) .trim();
    accomadationAnswer =prompt(accomadation) .trim();
    positionAnswer = prompt(position) .trim();
    activityAnswer = prompt(activity) .trim();
    foreignLanguageAnswer = prompt(foreignLanguage) .trim();
    endAnswer = confirm(end) .trim();

var heading= document.createElement("h1");
heading.textContent= `So'rovnoma natijalari bilan tanishing`;
heading.style.textAlign="center";
document.body.appendChild(heading);

var paragraph1 = document.createElement("p");
paragraph1.textContent = `Foydalanuvchining ismi- ${firstNameAnswer};`;
document.body.appendChild(paragraph1);

var paragraph2 = document.createElement("p");
paragraph2.textContent = `Foydalanuvchining familiyasi - ${lastNameAnswer};`;
document.body.appendChild(paragraph2);

var paragraph3 = document.createElement("p");
paragraph3.textContent = `Foydalanuvchining email manzili - ${emailAnswer};`;
document.body.appendChild(paragraph3);

var paragraph4 = document.createElement("p");
paragraph4.textContent = `Foydalanuvchining telefon raqami - ${telNumberAnswer};`;
document.body.appendChild(paragraph4);

var paragraph5 = document.createElement("p");
paragraph5.textContent = `Foydalanuvchining yoshi- ${ageAnswer};`;
document.body.appendChild(paragraph5);

var paragraph6 = document.createElement("p");
paragraph6.textContent = `Foydalanuvchining yashash manzili ${accomadationAnswer};`;
document.body.appendChild(paragraph6);

var paragraph7 = document.createElement("p");
paragraph7.textContent = `Foydalanuvchining ma'lumoti - ${positionAnswer};`;
document.body.appendChild(paragraph7);

var paragraph8 = document.createElement("p");
paragraph8.textContent = `Foydalanuvchining ish-faoliyati ${activityAnswer};`;
document.body.appendChild(paragraph8);

var paragraph9 = document.createElement("p");
paragraph9.textContent = `Foydalanuvchi biladigan chet tili - ${foreignLanguageAnswer};`;
document.body.appendChild(paragraph9);
