import * as React from 'react';
import axios from 'axios';
import './main.css';

interface Props {}

interface State {
    notiList: Noti[]
}

interface Noti {
    userId: number,
    name: string,
    place: string
}

class Noti extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            notiList: []
        }
    }

    getNoti(){
        axios.get('http://localhost:8000/memberships', {params: {user_id: 2}}).then((result)=>{
            console.log(result.data);
            this.setState({notiList: result.data});
        })
    }

    acceptRequest(){
        axios.post('http://localhost:8000/memberships', {status_id: 3,to_user_id: 2,from_user_id: 1}).then(()=>{
            alert('リクエストを承認しました！');
        })
    }

    render(){
        return (
            <div>Noti</div>
        );
    }
}