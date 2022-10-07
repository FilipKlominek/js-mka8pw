// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let getProgress = function (percentage) {
  if (percentage > 75) {
    console.log('Už jen chvilku! ' + percentage + '%');
    return;
  }
  if (percentage > 50) {
    console.log('Aplikace vykresluje vaše data. ' + percentage + '%');
    return;
  }
  if (percentage > 25) {
    console.log('Přihlašujeme vás. ' + percentage + '%');
    return;
  }
  console.log('Hledáme váš účet ' + percentage + '%');
};
getProgress(21);
getProgress(50);
getProgress(73);
getProgress(89);

let compact = function (array) {
  let out = [];
  for (let i of array) {
    if (i) out.push(i);
  }
  return out;
};

console.log(compact([1, 0, 2, 5, true]));
console.log(compact(['React']));

let distruibuteGold = function (array) {
  let petrsTrun = true;
  let petr = 0;
  let pavel = 0;

  while (array) {
    if (petrsTrun) {
      if (array[0] >= array[array.length - 1]) {
        petr += array[0];
        array.shift;
      } else {
        petr += array[array.length - 1];
        array.pop;
      }
    } else {
      if (array[0] >= array[array.length - 1]) {
        pavel += array[0];
        array.shift;
      } else {
        pavel += array[array.length - 1];
        array.pop;
      }
    }
  }
  console.log([petr, pavel]);
};

distruibuteGold([2, 3, 8, 9]);
