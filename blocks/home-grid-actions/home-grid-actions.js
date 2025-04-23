export default function decorate(block) {

  const cols = [...block.firstElementChild.children];
  block.classList.add('home-grid-actions');

  /* change to ul, li */
  const ul = block.createElement('ul');
  ul.className("type-actions");
  [...block.children].forEach((row) => {
    const li = block.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}
