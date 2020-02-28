// Section One - Cougar

let cougarPhoto = document.querySelector ('.cougarphoto');
let awakeCougar = "images/cougar.jpg";
let sleepingCougar = "images/sleepingcougar.jpg";

cougarPhoto.onmouseenter = (e) => {
   e.target.setAttribute('src', sleepingCougar);
};

cougarPhoto.onmouseleave = (e) => {
   e.target.setAttribute('src', awakeCougar);
};

// Section Two - Lion

let lionButton = document.querySelector ('.lionbutton');
let lionText = document.querySelector ('.liontext');

lionButton.onclick = () => {
  lionButton.style.display = 'none';
  lionText.style.display = 'block';
}

lionText.onclick = () => {
  lionButton.style.display = 'block';
  lionText.style.display = 'none';
}

// Section Three - Tiger

let tigerTextTwo = document.querySelector ('.tigertexttwo');
let tigerTextThree = document.querySelector ('.tigertextthree');
let tigerButtonOne = document.querySelector ('.tigerbuttonone');
let tigerButtonTwo = document.querySelector ('.tigerbuttontwo');
let returnButton = document.querySelector ('.returnbutton');

tigerButtonOne.onclick = () => {
  tigerTextTwo.style.display = 'block';
  tigerButtonTwo.style.display = 'block';
  tigerButtonOne.style.display = 'none';
}

tigerButtonTwo.onclick = () => {
  tigerTextThree.style.display = 'block';
  returnButton.style.display = 'block';
  tigerButtonTwo.style.display = 'none';
}
