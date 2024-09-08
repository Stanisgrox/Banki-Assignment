import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { productsSlice } from "../store/reducers/ProductSlice";
import { useEffect } from "react";

export const SortInput = () => {

    const {setInteracted, setSorting} = productsSlice.actions;
    const {interacted, sorting} = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
      const url = new URL(window.location.href);

      if (sorting) url.searchParams.set('sort', sorting)
      else url.searchParams.delete('sort');

      if (interacted) window.history.pushState({}, '', url);

    }, [sorting, interacted])

    return (
        <div className="mb-6 mt-6">
            <FormControl fullWidth>
                <InputLabel id="select-sort-label">Сортировать</InputLabel>
                <Select
                  labelId = "select-sort-label"
                  id = "select-sort"
                  label = "Сортировать"
                  value = {sorting? sorting : ''}
                  onChange = {
                    (e) => {
                      dispatch(setSorting(e.target.value))
                      dispatch(setInteracted());
                    }
                  }
                >
                  <MenuItem value={'desc'}>По максимальной сумме</MenuItem>
                  <MenuItem value={'asc'}>По минимальной сумме</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}