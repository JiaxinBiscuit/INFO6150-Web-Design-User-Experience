import { MESSAGES } from './constants';
import './Status.css';

function Status({ className, error }) {
  const message = MESSAGES[error] || MESSAGES.default;
  return (
    <div className={className}>
       {error && <span>{message}</span>} 
    </div>
  );
}

export default Status;