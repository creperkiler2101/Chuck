let getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

document.getElementsByClassName("get-jokes")[0].onclick = function() {
    const count = document.getElementById("count").value;
    let url = `http://api.icndb.com/jokes/random/${count}`;

    getJSON(url, function(err, data) {
        if (err !== null)
            alert('Something went wrong: ' + err);
        else {
            let result = "";
            data.value.forEach(function(value) {
                result += value.joke + "<br><hr>";
            });

            document.getElementsByClassName("jokes")[0].innerHTML = result;
        }
    });

    return false;
};