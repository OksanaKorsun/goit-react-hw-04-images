import { useState } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';
import toast from 'react-hot-toast';


export const Searchbar = ({ onSubmit }) => {
  const [searchImage, setSearchImage] = useState('');
  const searchValueChange = event =>
    setSearchImage(event.target.value.toLowerCase());
  const handleSubmit = event => {
    event.preventDefault();
    if (searchImage.trim() === '') {
      toast.error('Please enter a query in the search field.');
      return;
    }
    onSubmit(searchImage);
    setSearchImage('');
  };
  return (
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <IoIosSearch size="25" />
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={searchValueChange}
          name="searchImage"
          value={searchImage}
        />
      </SearchForm>
    </SearchHeader>
  );
};
