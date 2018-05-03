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
                        var current_url = location.href;
                        console.log(current_url);
                        fetch(current_url + 'organize/', {
                            method: 'POST',
                            body: 'test'
                        })
                        .then(response => {
                            console.log(response);
                        })
                        alert('clicked');
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
