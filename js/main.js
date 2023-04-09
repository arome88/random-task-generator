function getThingToDo() {
    //let thing = document.getElementById('thing').value

    const url = `https://www.boredapi.com/api/activity/`
    fetch (url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.activity

        })
}

document.querySelector('button').addEventListener('click', getThingToDo);