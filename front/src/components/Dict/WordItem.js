import React, {Component} from 'react';
import styles from './WordItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class WordItem extends Component {
  render() {
    const {done, children, onToggle, onRemove} = this.props;

    return (
      <div className={cx('word-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
        <div className={cx('text', {done})}>{children}</div>
        <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
      </div>
    );
  }
}

export default WordItem;