import { Component } from 'react';

import Loader from 'react-loader-spinner';

import styles from './Loader.module.scss';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        className={styles.Loader}
      />
    );
  }
}
