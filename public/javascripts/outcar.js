var openButton = document.querySelector('#open');

var modal = document.querySelector(".modal");

var closeBtn = modal.querySelector("#exit");

var result = document.querySelector('#result');

let cars = document.querySelector('#outcar');

let text = document.querySelector('#outcartext')

let carNumber = /^[0-9]{2}[가-힣]{1}[0-9]{4}$/;

var openModal = () => {

    if (!outcar(cars.value)) {

        return true;

    } else {

        return false;
    }

}

var closeModal = () => {

    modal.classList.add("hidden");

    text.innerText = ('출차완료 안녕히가세요!!');

    text.style.color = 'dodgerblue';

}

function outcar(Val) {

    if (cars.value == "") {

        text.innerText = ('자동차 번호를 입력해주세요!!');

        text.style.color = 'red';

        return false;
    }

    if (carNumber.test(Val) === false) {
        
        text.innerText = ('자동차 넘버가 틀렸습니다!!');

        text.style.color = 'red';

        return false;

    } else {

        text.innerText = ('');

        outcar1();

        return true;

    }

    function outcar1() {

        let data = {
            carNum: cars.value
        };

        $.ajax({
            type: "POST",
            url: "/outcar",
            data: data,
            success: function (res) {

                if (res == false) {

                    text.innerText = ('주차된 차량이 아닙니다.');

                    text.style.color = 'red';

                } else {

                    modal.classList.remove("hidden");

                    var enterTime = new Date((`${res[0].time}`));

                    var currentTime = new Date(new Date().getTime());

                    var lastTime = currentTime - enterTime;
                    console.log(lastTime)
                    var price = 1;

                    var moneyResult = Math.round(lastTime / 1000) * price;

                    result.innerText = moneyResult;

                }
            },

            error: function (err) {

                console.log("error!");

            }
        });
    };
};

closeBtn.addEventListener("click", closeModal);

openButton.addEventListener('click', openModal);