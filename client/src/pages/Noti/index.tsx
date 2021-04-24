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
            <div>
                    <div>
                        <h2>お知らせ</h2>
                        <p className="h2sub">NEWS</p>
                    </div>
                    <div className="ikubox">
                        <p className="ikuyoRequest">{this.state.notiList.length}件の「いくよ」リクエストが来ています</p>
                        <div className="iku">
                            <span id="date">2021/06/05</span>
                            <span id="userName">田中</span>
                            <button id="submit" onClick={() => this.acceptRequest()}>承認</button>
                        </div>
                    </div>

                    <div className="kitebox">
                        <p className="kiteRequest">n件の「いくよ」リクエストが来ています</p>
                        <div className="iku">
                            <span id="date">2021/06/05</span>
                            <span id="userName">田中</span>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Noti;