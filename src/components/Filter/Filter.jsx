import { Label, Input, FilterContainer } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setValue } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setValue(e.currentTarget.value));
  };

  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" onChange={onChange} />
    </FilterContainer>
  );
};
