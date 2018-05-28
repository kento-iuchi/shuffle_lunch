// aaa
// import CommentBox from './comment_box.js.jsx';
$(function(){
    'use strict';
    $('.can_go_switch').click(function(){
        var current_url = 'http://192.168.33.12/';
        console.log($(this).attr('data-id'));
        var id = $(this).attr('data-id');
        $.ajax({
            url : current_url + 'organize/',
            type : 'POST',
            dataType: 'json',
            headers: {"X-CSRFToken": getCookie("csrftoken")},
            data:{'id':id},
        }).done(function(data){
            alert('success!!');
        })
    })

    function getCookie(c_name) {
        if(document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if(c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if(c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return "";
   }
});


// $.ajax({
//     type : 'POST',
//     dataType: 'json',
//     headers: {"X-CSRFToken": getCookie("csrftoken")},
//     data:{'id':id},
// }).done(function(data){
//     alert('success!!');
// })

// (() => {
//
//     // import { Component } from 'react';
//
//     class ShuffleButton extends React.Component{
//         render(){
//             return (
//                 // action="organize/"
//                 <form id="organize_team" onSubmit={
//                     function(){
//                         // var current_url = location.href;
//                         var current_url = 'http://192.168.33.12/';
//                         console.log(current_url + 'organize/');
//                         // fetch(current_url + 'organize/', {
//                         var testdata = 'test';
//                         fetch(current_url + 'organize/', {
//                             method: 'POST',
//                             cache: 'no-cache',
//                             body: JSON.stringify({test : testdata}),
//                             headers: {
//                                 "Content-Type": "application/json"
//                             },
//                         })
//                         .then(response => {
//                             if (!response.ok) {
//                                 // 失敗時の処理
//                                 alert(1);
//                             } else {
//                                 console.log(response.json());
//                                 alert('clicked');
//                             }
//                         })
//                     }}
//                 >
//                 <button type="submit">
//                     shuffle!
//                 </button>
//                 </form>
//             )
//         }
//     }
//
//     ReactDOM.render(
//         <ShuffleButton />,
//         document.getElementById('shuffle-button')
//     );
// })();
