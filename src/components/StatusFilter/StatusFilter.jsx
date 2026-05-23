import Button from "../Button/Button";
import { selectStatusFilter } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import statusFilters from "../../redux/constans";
import { setStatusFilters } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setStatusFilters(value));
  };

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
