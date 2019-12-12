import React, {Component} from 'react';

class Post extends Component {
    state = {
        id : null
    }
    componentDidMount(){
        let post_id = this.props.match.params.post_id;
        console.log(post_id);
        this.setState({
            id : post_id
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.id}</h1>
            </div>
        )
    }
}

export default Post