import plotDevices from '../../../../json/plot_devices.json';
import { selectRandomItem } from '../helpers';

export default () => {
  return selectRandomItem(plotDevices);
};
