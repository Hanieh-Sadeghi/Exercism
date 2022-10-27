//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (numb) => {
  if (numb % 4 == 0 && numb % 100 != 0) {
    return true;
  } else {
    if (numb % 400 == 0) return true;
    else return false;
  }
};
