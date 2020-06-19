const button = document.getElementsByClassName('button')
const HTML = document.getElementById('html')
HTML.style.setProperty('--colorPrincipal', '')

const random = (max, min) => {
  return Math.floor(Math.random() * (max, min + 1)) + 1;
}

const changeColor = (e) => {
  const number = random(0, 4);
  console.log(number)
  let event = e.target.className
  if (event === 'button') {
    switch (number) {
      case 1:
        HTML.style.setProperty('--colorPrincipal', '#5F87B0');
        break
      case 2:
        HTML.style.setProperty('--colorPrincipal', '#85ADA8');
        break
      case 3:
        HTML.style.setProperty('--colorPrincipal', '#4B4950');
        break
      case 4:
        HTML.style.setProperty('--colorPrincipal', '#9b50d4');
        break
      case 5:
        HTML.style.setProperty('--colorPrincipal', '');
        break
    }
  }
  if (event === 'button-article') {
    switch (number) {
      case 1:
        HTML.style.setProperty('--colorPrincipal', '#5F87B0');
        break
      case 2:
        HTML.style.setProperty('--colorPrincipal', '#85ADA8');
        break
      case 3:
        HTML.style.setProperty('--colorPrincipal', '#4B4950');
        break
      case 4:
        HTML.style.setProperty('--colorPrincipal', '#9b50d4');
        break
      case 5:
        HTML.style.setProperty('--colorPrincipal', '');
        break
    }
  }
}

document.addEventListener('click', changeColor)
