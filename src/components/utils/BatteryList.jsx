import Battery from './Battery';
import { useStores, mobxObserver } from '../../store';
function BatteryList() {
  const { runningStore } = useStores();
  return new Array(runningStore.battery).fill(0).map((e, index) => <Battery key={index} />);
}

export default mobxObserver(BatteryList);
