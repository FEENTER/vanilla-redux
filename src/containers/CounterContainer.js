import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as ActionTypes from "../store";
import { getPosts } from "../reducers/CounterReducer"

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    number: state.CounterReducer.number
    , color: state.CounterReducer.color
});

/* 
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(ActionTypes.increment()),
    onDecrement: () => dispatch(ActionTypes.decrement()),
    onSetColor: () => {
        const colors = [
            '#495057',
            '#f03e3e',
            '#d6336c',
            '#ae3ec9',
            '#7048e8',
            '#4263eb',
            '#1c7cd6',
            '#1098ad',
            '#0ca678',
            '#37b24d',
            '#74b816',
            '#f59f00',
            '#f76707'
        ];
    
        // 0 부터 12까지 랜덤 숫자
        const random = Math.floor(Math.random() * 13);
        const color = colors[random];

        // 비동기 호출
        dispatch(getPosts());
        dispatch(ActionTypes.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterContainer;