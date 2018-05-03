// aaa
// import CommentBox from './comment_box.js.jsx';
(() => {

    // import { Component } from 'react';

    class ShuffleButton extends React.Component{
        render(){
            return (
                <form id="organize_team" action="organize/" onSubmit={function(){ alert('clicked'); }}>
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
