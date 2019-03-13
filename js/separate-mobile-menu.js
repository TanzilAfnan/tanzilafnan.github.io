pathArray = location.href.split('/');
protocol = pathArray[0];
host = pathArray[2];
url = protocol + '//' + host;
console.log(url);
if (screen.width > 768) {
    window.location.href = url + "/blog.html";
}