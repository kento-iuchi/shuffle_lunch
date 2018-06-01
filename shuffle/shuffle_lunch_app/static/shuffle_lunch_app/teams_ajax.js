// aaa
// import CommentBox from './comment_box.js.jsx';
$(function(){
    'use strict';
    $('.can_go_switch').click(function(){
        var id = $(this).attr('id');
        var current_url = 'http://192.168.33.11/';
        console.log($(this).attr('data-id'));
        var data_id = $(this).attr('data-id');
        $.ajax({
            url : current_url + 'change/',
            type : 'POST',
            dataType: 'json',
            headers: {"X-CSRFToken": getCookie("csrftoken")},
            data:{'id':data_id},
        }).done(function(data){
            console.log(data);
            if(data['can_go']){
                $('#' + id).addClass('can_go');
            } else {
                $('#' + id).removeClass('can_go');
            }
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

    // var can_go_switches = document.getElementsByClassName("can_go_switch");
    // for (var i=0; i<can_go_switches.length; i++){
    //     can_go_switches[i].onclick = function (clicked_switch) {
    //         console.log(clicked_switch.target.getAttribute('data-id'));
    //         var target_id = clicked_switch.target.getAttribute('data-id');
    //         fetch('http://192.168.33.11/organize/', {
    //             method: 'POST',
    //             // dataType: 'json',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRFToken": getCookie("csrftoken")
    //             },
    //             body:JSON.stringify({'id': target_id}),
    //             credentials: "same-origin"
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                // 失敗時の処理
    //                console.log('failed');
    //             }
    //             console.log(response);
    //         })
    //     }
    // }

});
