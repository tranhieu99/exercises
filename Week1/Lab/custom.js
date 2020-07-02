window.addEventListener("DOMContentLoaded", function(){
    let radioValue = document.querySelectorAll(`input[name="currency"]`) 
    function callApi(currency) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://free.currconv.com/api/v7/convert?q=${currency}_VND&compact=ultra&apiKey=e6ec1fa5958c24632a60`);
      xhr.onload = function() {
          if (xhr.status === 200) {
            const currencyString = `${currency}_VND`
            let inputValue = document.querySelector('.inputValue').value
            const result = JSON.parse(xhr.responseText) 
            document.querySelector('.result').innerHTML = `${inputValue} ${currency} -> ${inputValue } VND : ${parseInt(result[currencyString]) * parseInt(inputValue)}`
     }
          else {
              alert('Request failed.  Returned status of ' + xhr.status);
          }
      };
      xhr.send();
    }
    function updateResults(response) {
      return response
    }
    document.querySelector('.submit').addEventListener('click', function(){
    radioValue.forEach(item =>{
    if(item.checked){
callApi(item.value)
    }
    })
    })
    })