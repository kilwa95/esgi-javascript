const ucfirst = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
};

const capitalize = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.split(" ").map((word) => ucfirst(word.toLowerCase())).join(" ");
};

const camelCase = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  chaine = chaine.replace("_", " ");
  return capitalize(chaine).replace(/\W/g, "");
};

const snake_case = (chaine) => {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.toLowerCase().split(' ').join('_');
};

const leet = (chaine) => {
  const correspondance = {a: '4', e: '3', i: '1', o: '0', u: '(_)', y: '7'};
  if (typeof chaine !== 'string' || chaine === '') return '';
  for (const key in correspondance) { chaine = chaine.split(key).join(correspondance[key]);}
  return chaine;
};

const prop_access = (object, chemin) => {
  if (typeof object !== 'object' || object === null) return console.log(chemin + " not exist");;
  if (typeof chemin !== 'string' || chemin === '') return object;
  chemin.split('.').forEach(child => {
    if (typeof object[child] === 'undefined') {
      console.log(chemin.split(child)[0] + child + ' not exist');
      return;
    }
    object = object[child];
  });
  return object;
};

function verlan(chaine) {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

function yoda(chaine) {
  if (typeof chaine !== 'string' || chaine === '') return '';
  return chaine.split(' ').reverse().join(' ');
}

const chaine = 'bonjour le portugal';
//
// console.log('ucfirst : ', ucfirst(chaine));
//
// console.log('capitalize : ', capitalize(chaine));
//
console.log('camelCase : ', camelCase('ToggleCase is_the coolest'));
//
// console.log('snake_case : ', snake_case(chaine));
//
// console.log('leet : ', leet(chaine));
//
// const prairie = {animal:{type: {name: 'chien'}}};
// console.log('prop_access : ', prop_access(prairie, 'animal.type'));
//
// console.log('verlan : ', verlan(chaine));
//
// console.log('yoda : ', yoda(chaine));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
