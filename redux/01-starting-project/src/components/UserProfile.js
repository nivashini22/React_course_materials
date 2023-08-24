import classes from './UserProfile.module.css';
import image from '../assests/recent.png'
const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>Nivashini C</h2>
      <img style={{height:'150px'}} src={image}  />
    </main>
  );
};

export default UserProfile;
