const images = [
  {src:'images/', cat:'nature', title:'Forest'},
  {src:'images/', cat:'nature', title:'Lake'},
  {src:'images/dog.png', cat:'animals', title:'Dog'},
  {src:'images/beach.png', cat:'travel', title:'Beach'}
];

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('.filters button');

function render(filter='all'){
  gallery.innerHTML = '';
  const list = images.filter(i => filter === 'all' ? true : i.cat === filter);
  list.forEach(i => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${i.src}" alt="${i.title}"><div class="caption">${i.title}</div>`;
    gallery.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.cat);
  });
});

render();
