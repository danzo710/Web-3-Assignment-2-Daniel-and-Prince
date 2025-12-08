import {Filter} from "../components/browse/filter";
import {Sort} from "../components/browse/sort";
const browseView = () => {
  return (
     <div className="flex gap-4">
      <div className="w-1/4">
        <Filter />
      </div>

      <div className="w-3/4">
        <Sort />
      </div>
    </div>
  );
};

export default browseView;