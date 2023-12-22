//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (letter) => {
  var number,
    ispan = false;

  if (letter.length < 26 || letter == "") {
    return ispan;
  }

  for (var i = 97; i <= 122; i++) {
    ispan = false;

    for (var j = 0; j < letter.length; j++) {
      if (letter[j].toLowerCase().charCodeAt(0) == i) {
        ispan = true;
        break;
      }
    }
    if (ispan == false) {
      return ispan;
    }

    if (i == 122) {
      return ispan;
    }
  }
};
