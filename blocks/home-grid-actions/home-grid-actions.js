/*EDS.registerComponent('home-grid-actions', {
  init: function (element) {
    const table = element.querySelector('table');
    if (!table) return;

    const ul = document.createElement('ul');
    ul.classList.add('type-links');

    // Ogni riga della tabella si trasforma in un <li>
    [...table.rows].forEach((row) => {
      const cell = row.cells[0];
      if (!cell) return;

      const link = document.createElement('a');
      const strong = document.createElement('strong');
      const em = document.createElement('em');

      // Estrai testo e URL dal contenuto della cella (es. "Tumor Type|/tumour-type")
      const [text, href] = cell.textContent.split('|').map(s => s.trim());
      strong.textContent = text;
      link.href = href || '#';
      em.classList.add('az-icon', 'icon-nav-arrow');

      const span = document.createElement('span');
      span.appendChild(strong);
      span.appendChild(em);
      link.appendChild(span);

      const li = document.createElement('li');
      li.appendChild(link);
      ul.appendChild(li);
    });

    // Sostituisci la tabella con la nuova struttura
    const container = document.createElement('div');
    container.classList.add('home-grid-actions');
    container.appendChild(ul);
    table.replaceWith(container);
  }
});
*/

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add('home-grid-actions');


  // setup image columns
  [...block.children].forEach((row) => {
    console.log("Test" + row[i]);
    const item = document.createElement('li');
    const text = document.createTextNode('list item content');
    item.appendChild(text);

  });

  const ul = document.createElement('ul');
  ul.classList.add('type-links');
  ul.appendChild(item);
  block.appendChild(ul);
}