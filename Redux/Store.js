import {createStore} from 'redux'
import reducer from './Todo/Reducer'
const store = createStore(reducer);
export default store