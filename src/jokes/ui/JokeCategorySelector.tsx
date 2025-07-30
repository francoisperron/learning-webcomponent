import React from "react";
import {Category} from "../core/Category.ts";

interface JokeCategorySelectorProps {
    setCategory: React.Dispatch<React.SetStateAction<Category>>
}

export const JokeCategorySelector = ({setCategory}: JokeCategorySelectorProps) => {
    return (
        <select onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Select a category</option>
            <option value='animal'>Animal</option>
            <option value='career'>Career</option>
            <option value='celebrity'>Celebrity</option>
            <option value='dev'>Dev</option>
            <option value='explicit'>Explicit</option>
            <option value='fashion'>Fashion</option>
            <option value='food'>Food</option>
            <option value='history'>History</option>
            <option value='money'>Money</option>
            <option value='movie'>Movie</option>
            <option value='music'>Music</option>
            <option value='political'>Political</option>
            <option value='religion'>Religion</option>
            <option value='science'>Science</option>
            <option value='sport'>Sport</option>
            <option value='travel'>Travel</option>
        </select>
    )
}
