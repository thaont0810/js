$(document).ready(function () {

  var listUser = [];
  const getListUser = () => {
    listUser = $('.list-user .item').map(function () {
      return $(this).attr("data-user-id");
    }).get();
  };

  // var listUser = [];
  // function getListUser() {
  //   $('.list-user .item').each(function (i, val) {
  //     var userId = $(val).attr("data-user-id");
  //     if (userId.length) {
  //       listUser.push(userId);
  //     }
  //   });
  //   return listUser
  // }
  // getListUser();
  // console.log(listUser)

  $('#sortable').sortable();

  var newOrder = [];
  $('#btn-save').click(() => {
    getListUser();
    newOrder = listUser;
    localStorage.setItem('lists', JSON.stringify(newOrder));
    load();
  });

  var btnBottom = $('.btn-bottom'),
    btnTop = $('.btn-top'),
    btnDel = $('.btn-del');

  btnBottom.click(function () {
    $(this).parents('.item').appendTo('.list-user');
    localStorage.setItem('lists', JSON.stringify(newOrder));
    load();
  });
  btnTop.click(function () {
    $(this).parents('.item').prependTo('.list-user');
  });
  btnDel.click(function () {
    $(this).parents('.item').remove();
  });

  const load = () => {

    var data = localStorage.getItem('lists');
    if (!data) localStorage.setItem('lists', JSON.stringify(newOrder));

    newOrder = JSON.parse(data);
    let listUserTemplate = $('#user_template').text();

    let html = '';
    for (let i in newOrder) {
      let text = listUserTemplate.replace(/{user_id}/gi, newOrder[i]);
      html += text;
    }

    $('#sortable').html(html)
  };
  load();
});