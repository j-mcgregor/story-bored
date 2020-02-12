import plotDevices from '../../../data/literature/plot_devices.json';
import { selectRandomItem } from '../helpers';

export default () => {
  return selectRandomItem(plotDevices);
};
