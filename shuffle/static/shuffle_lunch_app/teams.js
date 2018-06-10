(() => {

    class ShuffleButton extends React.Component{
        constructor(props) {
            super(props)
            this.handleSubmit=this.handleSubmit.bind(this);
            const teams = [];
            this.state = {
                teams: teams,
            }
        }

        handleSubmit(e){
            e.preventDefault();

            var current_url = 'http://192.168.33.12/';
            var teams_count = $('#teams-count').val();
            this.state.teams = [];
            const teams = this.state.teams.slice();
            $.ajax({
                url : current_url + 'organize/',
                type : 'POST',
                dataType: 'json',
                headers: {
                    "X-CSRFToken": getCookie("csrftoken"),
                },
                data:{
                    teams_count:teams_count,
                },
            }).done(function(response){

                var team_id = 0
                response.teams.some(function(team){
                    teams.push({
                        id : team_id,
                        members :team,
                    })
                    team_id+=1;
                }.bind(this));

                this.setState({ teams });
                return response
            }.bind(this));
        }

        render(){
            return (
                <div>
                <form id="organize_team" onSubmit={this.handleSubmit}>
                <div>
                <input type="number" id="teams-count" defaultValue='5' min='1'>
                </input>
                </div>
                <button type="submit">
                    shuffle!
                </button>
                </form>
                <TeamList
                    teams={this.state.teams}
                />
                </div>
            )
        }
    }

    class TeamList extends React.Component {

        render() {
            const teams = this.props.teams.map( team =>
                <Team
                    key = {team.id}
                    {...team}
                />
            )

            return(
                <div>
                    {teams}
                </div>
            )
        }
    }

    class Team extends React.Component {
        render(){
            var member_list = [];

            for(var m_i in this.props.members){
                member_list.push(<li key={m_i}>{this.props.members[m_i]}</li>)
            }
            return(
                <div>
                    <span>チーム{this.props.id}</span>
                    <ul>
                        {member_list}
                    </ul>
                </div>
            )
        }
    }

    ReactDOM.render(
        <ShuffleButton />,
        document.getElementById('shuffle-button')
    );
})();
