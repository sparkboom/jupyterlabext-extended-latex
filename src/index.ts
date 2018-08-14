import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the extended-latex extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'extended-latex',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension extended-latex is activated!');
  }
};

export default extension;
