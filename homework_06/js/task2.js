const renderLocationIp = () => {
  let ip = document.getElementById("ip-input").value;
  let output = document.getElementById("output")
  let url = `https://ipapi.co/${ip}/json`;

  http.get(url)
    .then(resp => {
      response = resp;
      output.innerHTML = resp;
    });
}

const validateIp = () => {
  let output = document.getElementById("output");
  let url = 'https://shrouded-garden-94580.herokuapp.com/';
  
  response ? http.post(response, url)
    .then(resp => output.innerHTML = resp) : null
}
