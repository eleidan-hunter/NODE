// let BtnTime = document.querySelector('button');

// BtnTime.addEventListener('click', getTime);

function getTime(){
    fetch(
        `/api/v1/date`,
        {
            method: 'get',
            headers: {},
        }
    ).then(( result ) => {
        return result.text(); //json(), blob()
    }).then((data) => {
        // document.querySelector('body').innerText = data;
    });
}
getTime();

let Form = document.querySelector('form');
let Input = document.querySelector('input');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    let number = Input.value;
    fetch(
        `/api/v1/try?number=${number}`,
        {
            method: 'get',
            headers: {},
        }
    ).then(( result ) => {
        return result.text(); //json(), blob()
    }).then((data) => {
        console.log(data);
    });
})

