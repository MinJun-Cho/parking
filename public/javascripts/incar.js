let car = document.querySelector('#car');

let center = document.querySelector(".center");

let text = document.querySelector('.result')

let carNumber = /^[0-9]{2}[가-힣]{1}[0-9]{4}$/;

function incar(Val) {

    if (car.value == "") {

        text.innerText = ('자동차 번호를 입력해주세요!!');
        text.style.color = "red";

        return false;

    } else {

        if (carNumber.test(Val) === false) {

            text.innerText = ('자동차 번호형식이 틀렸습니다!!');
            text.style.color = "red";

            return false;

        } else {

            let data = {
                carNum: car.value
            };

            $.ajax({
                type: "POST",
                url: "/incar",
                data: data,
                success: function (res) {

                    if (res !== '어서오세요~ 환영합니다 ~') {

                        text.innerText = (`이미 입차한 차량, 입차시간: ${res[0].time}`);

                        text.style.color = "red";

                    } else {

                        text.innerText = (res);

                        text.style.color = "dodgerblue";
                    }
                },

                error: function (err) {

                    console.log("error!");

                }
            });
        }
    }
}

center.addEventListener('click', function () {
    incar(car.value);
})