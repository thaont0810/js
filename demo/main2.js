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
var data = JSON.parse(localStorage.getItem('lists'));
if (!data) localStorage.setItem('lists', JSON.stringify(newOrder));
else data = [1, 2, 3, 4, 5, 6];

data.forEach((item) => {
                       var i = aryData.findIndex((x) => x.id == item);
                       var render = '<div class="col-md-4 item" data-user-id="' + aryData[i].id + '" id="user-' + aryData[i].id + '" draggable="true">' +
                       '      <div class="row">' +
                       '        <div class="col-md-4">' +
                       '          <img src="' + aryData[i].image + '" alt="">' +
                       '        </div>' +
                       '        <div class="col-md-6">' +
                       '          <p class="name">' + aryData[i].name + '</p>' +
                       '          <div class="item-action d-flex">' +
                       '            <button class="btn btn-outline-dark btn-bottom">Bottom</button>' +
                       '            <button class="btn btn-outline-primary btn-top">Top</button>' +
                       '            <button class="btn btn-outline-danger btn-del">Del</button>' +
                       '          </div>' +
                       '        </div>' +
                       '      </div>' +
                       '    </div>';

                       $('.list-user').append(render);
                     });

// newOrder = JSON.parse(data);
// let listUserTemplate = $('#user_template').text();
//
// let html = '';
// for (let i in newOrder) {
//   let text = listUserTemplate.replace(/{user_id}/gi, newOrder[i]);
//   html += text;
// }
//
// $('#sortable').html(html)
};
load();
});