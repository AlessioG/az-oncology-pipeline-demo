export default function decorate(block) {

  const cols = [...block.firstElementChild.children];
  block.classList.add('home-grid-actions');

  const ul = block.createElement('ul');
  ul.classList.add('type-links');
  const l1= block.createElement('li');
  li1.textContent = 'Element 1';
  const l2= block.createElement('li');
  l2.textContent = 'Element 2';
  ul.appendChild(l1);
  il.appendChild(l2);
  block.appendChild(ul);
}
