var loader = document.getElementById("loaderchik");
var xhttp = new XMLHttpRequest();
loader.addEventListener("click", load_photo);

function load_photo() {
    xhttp.open("GET", "https://randomuser.me/api/?results=25", true);
    $.ajax({
        beforeSend: function() {
            $('.loader').show();
        },
        complete: function() {
            $(".loader").fadeOut("slow");
        }
    });
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var data = JSON.parse(xhttp.responseText); //парсим об'єкт в рядок
                console.log(data); //вивід в консоль
                for (let i = 0; i < data.results.length; i++) {
                    var img = document.createElement("img");
                    document.body.appendChild(img);
                    img.setAttribute("src", data.results[i].picture.large);
                    img.style.width = "15vw"; //стилі для картинки
                    img.style.height = "15vw";
                    img.style.marginLeft = "4vw";
                    img.style.marginBottom = "3vw";
                }
            } catch (err) {
                document.write(err.message + " in " + xhttp.responseText); //вивід помилки
            }
        }

    };
    xhttp.send(null);  //відправлення на сервер, але ми тільки отримуємо
}

window.addEventListener('load', preloader);

function preloader() {
    $(".loader").fadeOut("slow");
}

window.onscroll = function () {
    // висота вікна + прокрутка >= висота body
    if (document.documentElement.clientHeight + pageYOffset >= document.body.offsetHeight) {
        load_photo();
    }
}
