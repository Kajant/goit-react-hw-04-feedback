import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
      <p className={css.title}>{message}</p>      
  );
};

export default Notification;