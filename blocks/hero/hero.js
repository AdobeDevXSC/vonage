export default function decorate(block) {
  console.log(block);
  const title = block.querySelector('.hero > div:nth-child(2)');
  title.classList.add('hero-title');

  const description = block.querySelector('.hero > div:nth-child(3)');
  description.classList.add('hero-description');

  const content = document.createElement('div');
  content.classList.add('hero-content');
  content.appendChild(title);
  content.appendChild(description);

  const div = block.querySelector('div');
  div.append(content);
}
