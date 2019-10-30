const container = document.getElementById('m-listContainer');
const lis = document.querySelectorAll('#m-listContainer li');

// const dbData = Array.from(new Array(20)).map((item, idx) => idx);

const renderPage = (firstIndex) => {
    lis.forEach((item, idx) => {
        const li = item;
        li.innerHTML = firstIndex + idx;
    });
};

// const updateDb = (offset, limit = 10) => {
//     for (let i = 0; i < limit; i++) {
//         dbData.push(offset + i);
//     }
// };

renderPage(0);

const renderFunction = (firstIndex) => {
    renderPage(firstIndex);
};

const listScrollIns = new ListScroll({
    firstItemId: 'item-first',
    lastItemId: 'item-last',
    container,
    listSize: 21,
    itemHeight: 150,
    renderFunction
});

listScrollIns.startObserver();
