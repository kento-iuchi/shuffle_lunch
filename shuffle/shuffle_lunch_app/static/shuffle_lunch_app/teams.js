// aaa
// import CommentBox from './comment_box.js.jsx';
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
