// components/CategoryDropdown.js
import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import categoryService from '../services/categoryService'; // Adjust the import path as necessary

const CategoryDropdown = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await categoryService.getAllCategories();
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);

    return (
        <NavDropdown title="Categories" id="basic-nav-dropdown">
            {categories.map(category => (
                <NavDropdown.Item href={`#category/${category.CategoryID}`} key={category.CategoryID}>
                    {category.Name}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
};

export default CategoryDropdown;
