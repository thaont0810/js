$(document).ready(function () {

  const getListUser = () => {
    return $('.list-user .item').map(function () {
      return $(this).attr("data-user-id");
    }).get();
  };

  $('#sortable').sortable();

  var aryData = [
    {
      id: 1,
      name: 'User-1',
      image: 'img/user-1.png'
    },
    {
      id: 2,
      name: 'User-2',
      image: 'img/user-2.png'
    },
    {
      id: 3,
      name: 'User-3',
      image: 'img/user-3.png'
    },
    {
      id: 4,
      name: 'User-4',
      image: 'img/user-4.png'
    },
    {
      id: 5,
      name: 'User-5',
      image: 'img/user-5.png'
    },
    {
      id: 6,
      name: 'User-6',
      image: 'img/user-6.png'
    },
  ];
  const getHTML = (arrId) => {
    var render = '';

    arrId.forEach(item => {
      var i = aryData.findIndex(function (obj) {
          return obj.id == item;
      });

      render +=
        `<div class="col-md-4 item" data-user-id="${aryData[i].id}" id="user-${aryData[i].id}" draggable="true">
          <div class="row">
            <div class="col-md-4">
              <img src="${aryData[i].image}" alt="">
            </div>
            <div class="col-md-6">
              <p class="name">${aryData[i].name} </p>
              <div class="item-action d-flex">
                <button class="btn btn-outline-dark btn-bottom">Bottom</button>
                <button class="btn btn-outline-primary btn-top">Top</button>
                <button class="btn btn-outline-danger btn-del">Del</button>
              </div>
            </div>
          </div>
        </div>`;
    });

    $('.list-user').html(render);
  };

  var newOrder = [];

  $(document).on('click', '.btn-bottom', function () {
    $(this).parents('.item').appendTo('.list-user');
  });

  $(document).on('click', '.btn-top', function () {
    $(this).parents('.item').prependTo('.list-user');
  });

  $(document).on('click', '.btn-del', function () {
    $(this).parents('.item').remove();
  });

  $('#btn-save').click(() => {
    newOrder = getListUser();
    localStorage.setItem('lists', JSON.stringify(newOrder));
  });

  var listUserDefault = [1, 2, 3, 4, 5, 6];
  const load = () => {
    var data = localStorage.getItem('lists');

    if (!data) {
      getHTML(listUserDefault);
    } else {
      newOrder = JSON.parse(data);
      getHTML(newOrder);
    }

    // $('.list-user').html('');
    // data.forEach((item) => {
    // var i = aryData.findIndex((x) => x.id == item);
    // var render = '<div class="col-md-4 item" data-user-id="' + aryData[i].id + '" id="user-' + aryData[i].id + '" draggable="true">' +
    //   '      <div class="row">' +
    //   '        <div class="col-md-4">' +
    //   '          <img src="' + aryData[i].image + '" alt="">' +
    //   '        </div>' +
    //   '        <div class="col-md-6">' +
    //   '          <p class="name">' + aryData[i].name + '</p>' +
    //   '          <div class="item-action d-flex">' +
    //   '            <button class="btn btn-outline-dark btn-bottom">Bottom</button>' +
    //   '            <button class="btn btn-outline-primary btn-top">Top</button>' +
    //   '            <button class="btn btn-outline-danger btn-del">Del</button>' +
    //   '          </div>' +
    //   '        </div>' +
    //   '      </div>' +
    //   '    </div>';
    //
    // $('.list-user').append(render);
    // });
  };
  load();
});