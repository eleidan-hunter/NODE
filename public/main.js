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
        document.querySelector('body').innerText = data;
    });
}
getTime();