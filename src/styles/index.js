import { createUseStyles } from "react-jss";

import globalStyles from '../styles/global.js';

const rootStyles = {
  '@global': {
    ...globalStyles,
  }
};

export default createUseStyles(rootStyles, {name: 'root', index: 10});
