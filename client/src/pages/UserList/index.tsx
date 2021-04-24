import * as React from 'react';
import axios from 'axios';
import './main.css';
import student from '../../student.png';

interface Props {}

interface State {
    userList: User[],
    firstView: boolean
}

interface User {
    name: string,
    place: string
}

class UserList extends React.Component<Props,State> {

    constructor(props: Props){
        super(props);
        this.state = {
            userList: [],
            firstView: true
        }
    }

    componentDidMount(): void{
        this.getUsers();
        setTimeout(()=>{
            this.setState({firstView: false})
        },1000)
    }

    getUsers(){
        /* axios.get('').then((result)=>{
            console.log(result);
            if(result.status !== 200) return;
            //this.setState({userList: result.data}); 
            this.setState({userList: userMockData});
        }).catch((error) => {
            throw new Error('getUsers error:' + error);
        }) */
        const userList: User[] = [
            {name: '田辺賢太', place: '名古屋城入り口'},
            {name: '幸田幸生', place: '本陣セブンイレブン'}
        ];
        this.setState({userList},()=>{
            console.log(this.state.userList);
        });
    }

    membershipCreate(status_id: number){
        axios.post('http://localhost:8000/memberships', {status_id,to_user_id: 2,from_user_id: 1}).then((result)=>{
            alert('リクエストを送信しました！');
        })
    }

    render(){
        return(
            <React.Fragment>

                
                <div className="pageHeader">
                    <div>
                        <div>ホーム</div>
                        <div style={{fontSize: '12px', color: '#009688'}}>HOME</div>
                    </div>
                </div>
                <div className="cardList">
                    {this.state.userList.map((val: User)=>{
                        return (
                            <div className="card">
                                <div className="username">{val.name}</div>
                                <div className="usericon"><img src={student} width="70px" height="70px" alt="icon"/></div>
                                <div className="place">{val.place}</div>
                                <div className="actions">
                                    <button onClick={() => this.membershipCreate(1)}>いくよ</button>
                                    <button onClick={() => this.membershipCreate(2)}>きて</button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="card">
                        <div className="username">小太郎</div>
                        <div className="usericon"><img src={student} width="70px" height="70px" alt="icon"/></div>
                        <div className="place">ローソン</div>
                        <div className="actions">
                            <button>いくよ</button>
                            <button>きて</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="username">小太郎</div>
                        <div className="usericon"><img src={student} width="70px" height="70px" alt="icon"/></div>
                        <div className="place">ローソン</div>
                        <div className="actions">
                            <button>いくよ</button>
                            <button>きて</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="username">小太郎</div>
                        <div className="usericon"><img src={student} width="70px" height="70px" alt="icon"/></div>
                        <div className="place">ローソン</div>
                        <div className="actions">
                            <button>いくよ</button>
                            <button>きて</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="username">小太郎</div>
                        <div className="usericon"><img src={student} width="70px" height="70px" alt="icon"/></div>
                        <div className="place">ローソン</div>
                        <div className="actions">
                            <button>いくよ</button>
                            <button>きて</button>
                        </div>
                    </div>
                </div>
                <div className="modal" style={{display: this.state.firstView ? 'flex':'none'}}>
                    位置情報からユーザを検索中...
                </div>
            </React.Fragment>
        );
    }
}

export default UserList;


const userMockData = [
    {name: '桑畑天', place: 'ローソン'},
    {name: '桑畑天', place: 'ローソン'},
    {name: '桑畑天', place: 'ローソン'},
    {name: '桑畑天', place: 'ローソン'},
    {name: '桑畑天', place: 'ローソン'}
]