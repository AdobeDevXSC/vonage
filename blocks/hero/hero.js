export default function decorate(block) {
  const nextSib = block.parentElement.nextSibling;
  const button = nextSib.querySelector('a');
  const title = block.querySelector('.hero > div:nth-child(2)');
  title.classList.add('hero-title');

  const description = block.querySelector('.hero > div:nth-child(3)');
  description.classList.add('hero-description');

  const nikhiltest = block.querySelector('.hero > div:nth-child(3)');
  nikhiltest.classList.add('nikhil-description');

  const content = document.createElement('div');
  content.classList.add('hero-content');
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(button);
  content.appendChild(nikhiltest);

  nextSib.remove();

  const div = block.querySelector('div');
  div.append(content);
}
