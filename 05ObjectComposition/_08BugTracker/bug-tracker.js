function bugTracker() {

    let bugs = [];
    let currentId = 0;
    let outputElement = undefined;

    let report = function (author, description,
                           reproducible, severity) {
        let bug = {
            ID: currentId,
            author,
            description,
            reproducible,
            severity,
            status: "Open"
        };

        bugs[currentId] = bug;
        currentId++;

        redraw();
    };
    let setStatus = function (id, newStatus) {
        bugs[id].status = newStatus;

        redraw();
    };
    let remove = function (id) {
        bugs[id] = undefined;

        redraw();
    };
    let sort = function (method) {
        switch (method) {
            case"author":
                bugs = bugs.sort((a, b) => a.author.localeCompare(b.author));
                break;
            case "severity":
                bugs = bugs.sort((a, b) => a.severity - b.severity);
                break;
            case "ID":
                bugs = bugs.sort((a, b) => a.ID - b.ID);
                break;
        }
        redraw();
    };
    let output = function (selector) {
        outputElement = $(selector);

        redraw();
    };

    function redraw() {
        if (outputElement === undefined) {
            return;
        }

        let filteredBugs = bugs.filter(e => e !== undefined);
        let bugsHtml = [];
        for (let bug of filteredBugs) {
            let bugHtml = $(`<div id="report_${bug.ID}" class="report">\n` +
                '  <div class="body">\n' +
                `    <p>${bug.description}</p>\n` +
                '  </div>\n' +
                '  <div class="title">\n' +
                `    <span class="author">Submitted by: ${bug.author}</span>\n` +
                `    <span class="status">${bug.status} | ${bug.severity}</span>\n` +
                '  </div>\n' +
                '</div>\n');

            bugsHtml.push(bugHtml);
        }

        outputElement.html(bugsHtml);
    }

    return {report, setStatus, remove, sort, output};
}