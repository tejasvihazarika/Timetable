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


function showTimetable() {
    const sapID = document.getElementById('sapID').value.trim();
    const selectedDay = document.getElementById("daySelect").value;

    const timetableContainer = document.getElementById("timetableContainer");
    const timetableContent = document.getElementById("timetableContent");

    timetableContent.innerHTML = "";

    if (!sapID || !selectedDay) {
        alert("Please enter a numeric SAP ID and select a day.");
        return;
    }

    const studentData = timetableData[sapID];

    if (!studentData) {
        alert("No data found for this SAP ID!");
        return;
    }

    const daySchedule = studentData.timeTable[selectedDay];

    if (!daySchedule || daySchedule.length === 0) {
        timetableContent.innerHTML = `<p>No classes scheduled for ${selectedDay}.</p>`;
    } else {
        const table = document.createElement("table");
        const headerRow = `<tr><th>Class</th><th>Time</th><th>Location</th></tr>`;
        table.innerHTML = headerRow;

        daySchedule.forEach(item => {
            const row = `<tr><td>${item.class}</td><td>${item.time}</td><td>${item.location}</td></tr>`;
            table.innerHTML += row;
        });

        timetableContent.appendChild(table);
    }

    timetableContainer.style.display = "block";
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