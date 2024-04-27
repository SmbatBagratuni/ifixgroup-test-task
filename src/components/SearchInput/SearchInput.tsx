import React from "react";
import styled from "styled-components";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputContainer = styled.div`
  position: relative;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px 30px;
  border: 1px solid #333;
  outline: none;
  border-radius: 25px;
  background: #333;
  color: whitesmoke;
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;
`;

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <InputContainer>
      <SearchIcon>🔍</SearchIcon>
      <InputField
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default SearchInput;
