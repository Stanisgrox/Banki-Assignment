import { TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import useDebounce from "../hooks/debouncer";
import { productsSlice } from "../store/reducers/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedTerm = useDebounce(searchTerm, 300);
    const {setFilter, setInteracted} = productsSlice.actions;
    const {interacted} = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();
    const field = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const args = new URLSearchParams(url.search);

        if (debouncedTerm) {
            url.searchParams.set('filter',  debouncedTerm);
            dispatch(setFilter(debouncedTerm));
        }
        else {
            url.searchParams.delete('filter');
            dispatch(setFilter(''));
        }

        if (interacted) window.history.pushState({}, '', url)
        else {
            if (args.get('filter')) {
                const input = field.current as HTMLInputElement;
                input.value = args.get('filter') as string;
            }
        }

    }, [debouncedTerm, dispatch, setFilter, interacted]);

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mt-8">
            <TextField 
                id = "searchField" 
                label = "Сумма кредита" 
                variant = "outlined"
                fullWidth
                type = "number"
                onChange = {e => {
                    dispatch(setInteracted());
                    if (/^0/.test(e.target.value)) e.target.value = e.target.value.replace(/^0/, "");
                    setSearchTerm(e.target.value);
                }}
                onKeyDown = {(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                inputRef = {field}
            />
        </div>
    )
}