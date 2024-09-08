import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react"

export const SortInput = () => {

    const [value, setValue] = useState<string>('');

    return (
        <div className="mb-6 mt-6">
            <FormControl fullWidth>
                <InputLabel id="select-sort-label">Сортировать</InputLabel>
                <Select
                  labelId = "select-sort-label"
                  id = "select-sort"
                  label = "Сортировать"
                  value = {value}
                  onChange = {
                    (e) => {
                      setValue(e.target.value)
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