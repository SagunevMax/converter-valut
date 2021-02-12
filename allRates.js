const rateTable = document.getElementById('rateTable')

const postdata = async () => {
  const data = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const result = await data.json();
  console.log(result);
  let valuteResult = Object.values(result.Valute).map((el) =>
    Object.values(el)
  );
  console.log(valuteResult);
  valuteResult.forEach((el, index) => {
    let aBlock = document.createElement("div");
    let button = document.createElement("button");
    console.log(el);
    aBlock.innerText = `${index + 1} ${el[4]} ${el[3]} = ${el[5]} рублей`;
    rateTable.appendChild(aBlock);
    rateTable.appendChild(button);
    button.innerText = 'Добавить в избранное'
  });
};

postdata();
