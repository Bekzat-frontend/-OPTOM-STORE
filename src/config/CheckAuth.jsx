import { useSelector } from 'react-redux'

function CheckAuth({component}) {
    const auth = useSelector(i=>i.login.is_auth);
    if (auth) {
        return component;
    }
    return 'Please, do to registration or login';
}
export default CheckAuth
