// // aaa
// // import CommentBox from './comment_box.js.jsx';
// $(function(){
//     'use strict';
//     $('.can_go_switch').click(function(){
//         var id = $(this).attr('id');
//         var current_url = 'http://192.168.33.11/';
//         console.log($(this).attr('data-id'));
//         var data_id = $(this).attr('data-id');
//         $.ajax({
//             url : current_url + 'organize/',
//             type : 'POST',
//             dataType: 'json',
//             headers: {"X-CSRFToken": getCookie("csrftoken")},
//             data:{'id':data_id},
//         }).done(function(data){
//             console.log(data);
//             if(data['can_go']){
//                 $('#' + id).addClass('can_go');
//             } else {
//                 $('#' + id).removeClass('can_go');
//             }
//         })
//     })
//
//     function getCookie(c_name) {
//         if(document.cookie.length > 0) {
//             var c_start = document.cookie.indexOf(c_name + "=");
//             if(c_start != -1) {
//                 c_start = c_start + c_name.length + 1;
//                 var c_end = document.cookie.indexOf(";", c_start);
//                 if(c_end == -1) c_end = document.cookie.length;
//                 return unescape(document.cookie.substring(c_start,c_end));
//             }
//         }
//         return "";
//    }
//
//     // var can_go_switches = document.getElementsByClassName("can_go_switch");
//     // for (var i=0; i<can_go_switches.length; i++){
//     //     can_go_switches[i].onclick = function (clicked_switch) {
//     //         console.log(clicked_switch.target.getAttribute('data-id'));
//     //         var target_id = clicked_switch.target.getAttribute('data-id');
//     //         fetch('http://192.168.33.11/organize/', {
//     //             method: 'POST',
//     //             // dataType: 'json',
//     //             headers: {
//     //                 "Content-Type": "application/json",
//     //                 "X-CSRFToken": getCookie("csrftoken")
//     //             },
//     //             body:JSON.stringify({'id': target_id}),
//     //             credentials: "same-origin"
//     //         })
//     //         .then(response => {
//     //             if (!response.ok) {
//     //                // 失敗時の処理
//     //                console.log('failed');
//     //             }
//     //             console.log(response);
//     //         })
//     //     }
//     // }
//
// });


// $.ajax({
//     type : 'POST',
//     dataType: 'json',
//     headers: {"X-CSRFToken": getCookie("csrftoken")},
//     data:{'id':id},
// }).done(function(data){
//     alert('success!!');
// })

(() => {

    // import { Component } from 'react';

    class ShuffleButton extends React.Component{
        render(){
            return (
                // action="organize/"
                <form id="organize_team" onSubmit={
                    function(){
                        // var current_url = location.href;
                        var current_url = 'http://192.168.33.12/';
                        console.log(current_url + 'organize/');
                        // fetch(current_url + 'organize/', {
                        var testdata = 'test';
                        fetch(current_url + 'organize/', {
                            method: 'POST',
                            cache: 'no-cache',
                            body: JSON.stringify({test : testdata}),
                            headers: {
                                "Content-Type": "application/json"
                            },
                        })
                        .then(response => {
                            if (!response.ok) {
                                // 失敗時の処理
                                alert(1);
                            } else {
                                console.log(response.json());
                                alert('clicked');
                            }
                        })
                    }}
                >
                <button type="submit">
                    shuffle!
                </button>
                </form>
            )
        }
    }

    ReactDOM.render(
        <ShuffleButton />,
        document.getElementById('shuffle-button')
    );
})();
