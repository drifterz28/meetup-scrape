'use strict';
(async () => {
  const data = await fetch('/find').then(res => res.json());
  const jsonElm = document.getElementById('json-data');
  const displayElm = document.getElementById('display-data');
  jsonElm.innerText = JSON.stringify(data, undefined, 2);
  data.map(group => {
    displayElm.insertAdjacentHTML('beforeend', `
      <div class='listing'><a href='${group.groupLink}'>${group.groupName}</a> - <a href='/${group.next}'>View Group api</a></div>`);
  });
})();
