import preact from 'preact';
import '../scss/Tag.scss';

export default props => (
  <li className="Tag">
    <button onClick={() => props.onClick(props.value)}>{props.value}</button>
  </li>
);
