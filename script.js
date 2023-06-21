function changeBackgroundColor() {
    var body = document.getElementsByTagName("body")[0];
    var colors = ["blue", "light-blue", "dark-blue"];
    var currentColor = body.className;

    var index = (colors.indexOf(currentColor) + 1) % colors.length;
    body.className = colors[index];
}

setInterval(changeBackgroundColor, 5000);
