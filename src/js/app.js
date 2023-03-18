
import { createLoader } from './loader';

import getApiData from './api';

document.addEventListener('DOMContentLoaded', () => {
  createLoader();
  getApiData();
});
