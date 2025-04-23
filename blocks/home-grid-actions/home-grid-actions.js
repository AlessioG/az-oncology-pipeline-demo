export default function decorate(block) {

  const cols = [...block.firstElementChild.children];
  block.classList.add('home-grid-actions');

  const ul = block.createElement('ul');
  ul.className("type-actions");
  const li = block.createElement('li');
  li.textContent = 'Actions';
  const li2 = block.createElement('li')
  li2.textContent = 'Actions2';
  ul.append(li);
  ul.append(li2);

  block.textContent = '';
  block.append(ul);
}
