import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else {
        const h4 = div.querySelector('h4');
        const style = div.querySelector('p');
        if (h4) {
          const vltIcon = document.createElement('span');
          vltIcon.classList.add('Vlt-icon-card');
          vltIcon.classList.add('Vlt-icon-card--');

          const divIcon = document.createElement('div');
          divIcon.classList.add('hero-cards__card-icon');

          const titleLine = document.createElement('div');
          titleLine.classList.add('hero-card__card-title-row');

          divIcon.appendChild(vltIcon);
          titleLine.appendChild(h4);
          titleLine.appendChild(divIcon);
          div.prepend(titleLine);
        } else if(style) {
          console.log(style)
          const pSib = div.previousElementSibling;
          const icon = pSib.querySelector('.Vlt-icon-card--');
          icon.classList.remove('Vlt-icon-card--'); 
          icon.classList.add(`Vlt-icon-card--${style.textContent}`);
          div.remove();
        }
        div.className = 'cards-card-body';
      }
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
