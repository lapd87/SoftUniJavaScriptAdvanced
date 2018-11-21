function calendar([day, month, year]) {

    let input = [+day, +month, +year];

    let days = [];

    let prevMonthLastDay = new Date(input[2], input[1] - 1, 0);

    if (month - 1 < 0) {
        prevMonthLastDay = new Date(input[2] - 1, 12, 31);
    }

    if (prevMonthLastDay.getDay() !== 0) {
        for (let i = prevMonthLastDay.getDay(); i >= 1; i--) {
            days.push("");
        }
    }

    let currentMonthDays = new Date(input[2], input[1], 0).getDate();

    for (let i = 1; i <= currentMonthDays; i++) {
        if (i === input[0]) {
            days.push(100 + i);
        } else {
            days.push(i);
        }
    }

    let nextMonthFirstDay = new Date(input[2], input[1], 1);
    if (nextMonthFirstDay.getDay() !== 0) {
        for (let i = nextMonthFirstDay.getDate(); i <= 6; i++) {
            days.push("");
        }
    }

    let today = new Date(year, month - 1, day);
    let locale = "en-us";
    let monthName = today.toLocaleString(locale, {month: "long"});

    let result = "<table>";
    result += "\r\n";
    result += `<caption>${monthName + " " + year}</caption>`;
    result += "\r\n";
    result += "<tbody>";
    result += "\r\n";
    result += "  <tr><th>Mon</th><th>Tue</th><th>Wed</th>" +
        "<th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>";
    result += "\r\n";

    let isPrevMonth = true;
    let isNextMonth = true;

    let weekCount = days.length / 7;

    for (let week = 1; week <= weekCount; week++) {
        result += "  <tr>";
        for (let day = 1; day <= 7; day++) {

            let currentDay = days[0];
            days.shift();

            if (currentDay === 1 || currentDay === 101) {
                isPrevMonth = false;
                isNextMonth = !isNextMonth;
            }

            if (currentDay > 100) {
                currentDay -= 100;
                result += `<td class="today">${currentDay}</td>`;
            } else {
                result += `<td>${currentDay}</td>`;
            }
        }
        result += "</tr>";
        result += "\r\n";
    }

    result += "</tbody>";
    result += "\r\n";
    result += "</table>";

    let element = $("#content");

    let calendarHTML = $(result);

    element.append(calendarHTML);
}