import React, { Fragment } from 'react';
import spinnerIco from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinnerIco}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading'
      />
    </Fragment>
  );
};

export default Spinner;
