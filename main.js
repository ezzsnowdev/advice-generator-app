async function getQuote() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error("HTTP " + response.status);
    let data = await response.json();

    let advIdEle = document.querySelector("#adv-id");
    advIdEle.innerHTML = data.slip.id;

    let adviceEle = document.querySelector("#advice");
    adviceEle.innerHTML = '"' + data.slip.advice + '"';

    return data;
  } catch (error) {
    console.log("Could not fetch:", error.message);
    return null;
  }
}

let genBtn = document.querySelector("#generate-btn");

genBtn.addEventListener("click", getQuote);
