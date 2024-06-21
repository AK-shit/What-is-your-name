

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log(data.ip);
        document.getElementById('ipADD').innerHTML = data.ip
    })
    .catch(error => {
        console.log('Error:', error);
    });

document.addEventListener('DOMContentLoaded', function() {
        const submitButton = document.getElementById('submit');
        const downloadLink = document.getElementById('downloadLink');
        const backgroundSound = document.getElementById('backgroundSound');

        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Button clicked, initiating delay");

            // Play the sound
            backgroundSound.play();

            setTimeout(function() {
                console.log("3 seconds elapsed, triggering download");
                downloadLink.click();
            }, 3000);
        });
    });

let name;
function change(){
    name = document.getElementById("Name").value;
    console.log(name)
    document.getElementById("details").style.display = "none"
    document.getElementById("omg").style.display = "block"
    document.getElementById("mh").innerHTML = `I know where you live ${name}, <br> this is your ip:`
    const progressBar = document.getElementsByClassName('progress-bar')[0]
    setInterval(()=>{
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width',width+ .1)
}, 5)
}

