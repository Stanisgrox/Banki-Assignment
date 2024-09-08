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
                onChange={e => {
                    if (/^0/.test(e.target.value)) e.target.value = e.target.value.replace(/^0/, "");
                    setSearchTerm(e.target.value);
                }}
                onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
            />
        </div>
    )
}