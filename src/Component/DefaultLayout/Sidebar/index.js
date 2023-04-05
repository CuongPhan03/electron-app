import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
  const actions = [
    { title: 'Trang chủ', to: '/' },
    { title: 'Xem tình trạng', to: '/status' },
    { title: 'Thêm', to: '/add' },
  ];
  return (
    <aside className={cx('wrapper')}>
      <ul className={cx('wrapper-ul')}>
        {actions.map((action, index) => (
          <li key={index}>
            <Link to={action.to} className={cx('btn')}>
              {action.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default Sidebar;
