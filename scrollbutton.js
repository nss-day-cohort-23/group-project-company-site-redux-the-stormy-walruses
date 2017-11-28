window.onscroll = function() {jump()};

function jump() {
    if (document.documentElement.scrollTop > 500) {
        document.getElementById("jump-button").style.display = "block";
    } else {
        document.getElementById("jump-button").style.display = "none";
    }
}

// Click to scroll to top
function toTop() {
    document.documentElement.scrollTop = 0;
}