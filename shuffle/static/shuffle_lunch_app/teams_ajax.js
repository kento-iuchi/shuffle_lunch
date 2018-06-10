// aaa
// import CommentBox from './comment_box.js.jsx';
$(function(){
    'use strict';
    $('.can_go_switch').click(function(){
        var id = $(this).attr('id');
        var current_url = 'http://192.168.33.12/';
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

});
