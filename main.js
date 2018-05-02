const itemArr = [];

function sendMsg() {
    let msg = $('.input_msg').val();
    let date = new Date();
    let randId = Math.floor(Math.random() * (100 - 1)) + 1;
    let arrId = itemArr.length;
    return `
        <div class="item" data-id="${randId}">
            <div class="item__text">${msg}</div>
            <div class="button-red">
                <div class="data">${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</div>
                <div class="delete" data-id="${arrId}">delete</div>
            </div>
        </div>`
};

function renderList (itemsArr) {
    $('.item').remove();
    itemsArr.forEach(function(element) {
        $('.container__item').append(element);
    });
    console.log(itemArr);    
};

function deleteItem (index) {
    // itemArr.splice(index, 1);
    delete itemArr[index];
    console.log(itemArr);
};


$(document).on('click', '.item', (e)=>{
    let itemId = $(e.currentTarget).data('id');
    $(document).on('click', '.delete', function(e) {
        let itemIndex = $(e.currentTarget).data('id');        
        console.log(itemArr);    
        deleteItem(itemIndex);
        renderList(itemArr);        
    });
});

$(document).on('click', '.btn_add', () => {
    let msg = sendMsg();
    itemArr.push(msg);
    renderList(itemArr);
    console.log(itemArr);
});


