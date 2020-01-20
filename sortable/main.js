$(document).ready(function () {

  const getListUser = () => {
    return $('.list-user .item').map(function () {
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
    newOrder = getListUser();
    localStorage.setItem('lists', JSON.stringify(newOrder));
  });

  $(document).on('click', '.btn-bottom', function () {
    $(this).parents('.item').appendTo('.list-user');
  });

  $(document).on('click', '.btn-top', function () {
    $(this).parents('.item').prependTo('.list-user');
  });

  $(document).on('click', '.btn-del', function () {
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