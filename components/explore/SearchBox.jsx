import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading2, Dropdown, Checkbox } from '../~common';

const Wrapper = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

const Box = styled.div`
    position: absolute;
    box-sizing: border-box;
    top: -45px;
    width: 650px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;
    padding: 1rem 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const DropWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Selector = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    small {
      margin: 0 10px;
    }
`;

function SearchBox({ jobTitles }) {
  return (
    <Wrapper>
      <Box>
        <Heading2>Search</Heading2>
        <DropWrapper>
          <Dropdown width="300px" icon="arrow-down" title="Job Title" list={jobTitles} />
        </DropWrapper>
        <Selector>
          <Checkbox /><small>Mentors</small>
          <Checkbox /><small>Mentees</small>
        </Selector>
      </Box>
    </Wrapper>
  );
}

SearchBox.propTypes = {
  jobTitles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SearchBox;
