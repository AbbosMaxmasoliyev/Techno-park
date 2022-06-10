fetch("./form.jsx")
    .then(data=>data.json())
    .then(res => {
        return console.log(res);
    })