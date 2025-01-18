let timetableData = {}; 
        
async function loadTimetableData() {
    try {
        const response = await fetch('schedule.json');
        if (!response.ok) {
            throw new Error('Failed to load timetable data.');
        }

        timetableData = await response.json(); 

        console.log('Timetable data loaded successfully:', timetableData); 
    } catch (error) {
        alert(error.message);
    }
}
window.onload = loadTimetableData;

function fetchTimetable() {
    const sapID = document.getElementById('sapID').value.trim();
    if (!sapID || isNaN(sapID)) {
        alert('Please enter a valid numeric SAP ID.');
        return;
    }

    const studentData = timetableData[sapID];

    if (!studentData) {
        alert('No data found for this SAP ID.');
        return;
    }

    displayTimetable(studentData.timeTable);
}

function displayTimetable(timeTable) {
    const tableContainer = document.getElementById('timetableContainer');
    tableContainer.innerHTML = ''; 

    Object.keys(timeTable).forEach(day => {
        const dayHeading = document.createElement('h3');
        dayHeading.textContent = day;
        tableContainer.appendChild(dayHeading);

        const table = document.createElement('table');
        table.border = '1';
        table.className = 'schedule-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        if (timeTable[day].length > 0) {
            for (const key of Object.keys(timeTable[day][0])) {
                const th = document.createElement('th');
                th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                headerRow.appendChild(th);
            }
        } else {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = "No classes scheduled for this day.";
            tableContainer.appendChild(emptyMessage);
            return;
        }

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        timeTable[day].forEach(entry => {
            const row = document.createElement('tr');
            for (const value of Object.values(entry)) {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            }
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        tableContainer.appendChild(table);
    });
}
function instaIcon(){
    const instagramIcon = document.getElementById('instagram-icon');
    
    instagramIcon.addEventListener('click', function () {
    const username = 'upescsa'; 
    window.open(`https://www.instagram.com/${username}/`, '_blank');
    });
    }
    
function fbIcon(){
    const facebookIcon = document.getElementById('fb-icon');
        
    facebookIcon.addEventListener('click', function () {
    
    const username = 'upescsa'; 
    window.open(`https://www.facebook.com/${username}/`, '_blank');
    });
    }
    
function xIcon(){
    const xIcon = document.getElementById('x-icon');
            
    xIcon.addEventListener('click', function () {
    const username = 'upescsa'; 
    window.open(`https://www.x.com/${username}/`, '_blank');
    });
    }
    
function ytIcon(){
    const ytIcon = document.getElementById('yt-icon');
                
    ytIcon.addEventListener('click', function () {
    const username = '@upes-cloudsecurityalliance1087'; 
    window.open(`https://www.youtube.com/${username}/`, '_blank');
    });
    }
function linkedinIcon(){
    const linkedinIcon = document.getElementById('linkedin-icon');
                    
    linkedinIcon.addEventListener('click', function () {
    const username = 'upescsa'; 
    window.open(`https://www.linkedin.com/company/${username}/`, '_blank');
    });
    }
function webIcon(){
    const webIcon = document.getElementById('web-icon');
                        
    webIcon.addEventListener('click', function () {
    const websiteUrl = 'https://upescsa.in/'; 
    window.open(websiteUrl, '_blank');
    });
    } 
    function mailIcon(){
    const mailIcon = document.getElementById('mail-icon');

    mailIcon.addEventListener('click', function () {
      
      const emailAddress = 'support@upescsa.in'; 
      window.location.href = `mailto:${emailAddress}`;
    });
    }