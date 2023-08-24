import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';




class UserFinder extends Component {
  static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filterUsers : [],
            searchTerm:''
        }
    }
    componentDidMount(){
        this.setState({filterUsers:this.context.users});
    }

componentDidUpdate(prevProps, prevState) {
if (prevState.searchTerm !== this.state.searchTerm){
 this.setState({
      filterUsers: this.context.users.filter((user) => 
      user.name.includes(this.state.searchTerm)
      ),
    });
}
}


    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }
    render() {
        return (
            <Fragment>
              <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              </div>
              <Users users={this.state.filterUsers} />
            </Fragment>
          );
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;