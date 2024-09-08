import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import useDebounce from "../hooks/debouncer";

export const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedTerm = useDebounce(searchTerm, 250);

    useEffect(() => {
        if (debouncedTerm) {
            console.log(debouncedTerm)
        }
    }, [debouncedTerm]);

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mt-8">
            <TextField 
                id="searchField" 
                label="Сумма кредита" 
                variant="outlined"
                fullWidth
                type="number"
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}