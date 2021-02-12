let select1 = document.getElementById("selectOption1");
let select2 = document.getElementById("selectOption2");
let convertResult = document.getElementById("convertResult");
let input = document.getElementById("summaForConvert");
let result = document.getElementById("result");

convertResult.addEventListener("click", () => convert());

const check = () => {
  if (select1.value === select2.value || select2.value === select1.value) {
    convertResult.setAttribute("disabled", "disabled");
  } else {
    convertResult.removeAttribute("disabled", "disabled");
  }
};

select2.addEventListener("change", () => {
  check();
});

let massiv;

// var btns = document.querySelectorAll("select");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//    a = e.target.value;
//     // console.log(e.target.value);
//   });
// });

const convert = () => {
  let inputValue = input.value;
  let a1 = select1.value;
  let a2 = select2.value;
  let razniza
  console.log(a1, a2);
  massiv.map((el) => {
    if (el[2] == a1) {
      if (el[3] == 1) {
        result.innerText = `${inputValue} ${a1} = ${el[5]}рублей`;
      } else if (el[3] > 1) {
        result.innerText = `${inputValue} ${a1} = ${el[5] / el[3]}рублей`;
      }
    }
  })
}  
   
  // result.innerText = `${inputValue} ${a1} = 1 ${a2}`;

const postdata = async () => {
  const data = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const result = await data.json();
  let valuteResult = Object.values(result.Valute).map((el) =>
    Object.values(el)
  );
  console.log(valuteResult);
  massiv = valuteResult;
  valuteResult.forEach((el, index) => {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    // console.log(el);
    option1.innerText = el[2];
    option2.innerText = el[2];
    select1.appendChild(option1);
    select2.appendChild(option2);
  });
};

postdata();
check();
