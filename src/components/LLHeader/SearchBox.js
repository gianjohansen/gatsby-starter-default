import React from 'react';
import styled from 'styled-components';
import { useHeaderContext } from './HeaderContext';
import useHookWithRefCallback from '../utils/useHookWithRefCallback';
import get from 'lodash-es/get';
import sortBy from 'lodash-es/sortBy';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import { size } from '../Breakpoints/Breakpoints';
import 'whatwg-fetch';
import loadable from '@loadable/component';

const Downshift = loadable(() => import('downshift'));
const ErrorBoundary = loadable(() => import('../ErrorBoundary/ErrorBoundary'));

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 42px;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  .relative {
    position: relative;
    width: 100%;
  }

  input {
    width: 100%;
    background: none;
    color: #191919;
    font-size: 16px;
    border: 0;
    box-sizing: border-box;
    padding: 10px;
    font-family: MarkPro;
    height: inherit;
    margin: 0;

    @media (min-width: ${size.largeAndUp}px) {
      font-size: 24px;
    }
  }

  button {
    border: 0;
    background: none;
    height: inherit;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    z-index: 1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .downshift-searchbox {
    width: 100%;
  }
`;

const DropdownItem = styled.li`
  padding: 10px;
  color: #999;
  font-family: MarkPro;
  background-color: ${prop =>
    prop.isActive || prop.isHighlighted ? '#f5f5f5' : '#fff'};

  &:hover {
    background-color: #f5f5f5;
  }
`;

const selectResult = (selectedResult, searchResultsPage) => {
  window.sessionStorage.setItem('searchValue', selectedResult.title);
  window.sessionStorage.setItem('LatestSearchValue', selectedResult.title);
  window.location.href = searchResultsPage;
};

const fetchResults = (inputValue, setResults, hpSearch) => {
  if (!inputValue) {
    return;
  }

  if (inputValue.length < 3) {
    return;
  }

  fetch(`${hpSearch}?text=${inputValue}`)
    .then(response => response.json())
    .then(data => {
      const results = get(
        data,
        'ImplGlobalSearchRestOutput.searchResults',
        []
      ).reduce((acc, item, index) => {
        if (index > 10) {
          return acc;
        }

        acc.push({ title: item.title, weight: item.weight });

        return acc;
      }, []);

      const sortedResults = sortBy(results, item => item.weight);

      setResults(sortedResults);
    });
};

const autoFocusInput = input => {
  if (input) {
    input.focus();
  }
};

const SearchBox = ({ inputPlaceHolder, hpSearch, searchResultsPage }) => {
  const [inputRef] = useHookWithRefCallback(autoFocusInput);
  const [{ searchOpen }, headerContextDispatcher] = useHeaderContext();
  const [results, setResults] = React.useState([]);

  if (!searchOpen) return null;

  return (
    <React.Fragment>
      <ErrorBoundary>
        <Wrapper>
          <div className="relative">
            <Downshift
              environment={window}
              onChange={selectedResult =>
                selectResult(selectedResult, searchResultsPage)
              }
              onInputValueChange={inputValue =>
                fetchResults(inputValue, setResults, hpSearch)
              }
              itemToString={results => (results ? results.title : '')}
            >
              {({
                getInputProps,
                getItemProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                highlightedItem
              }) => (
                <div className="downshift-searchbox">
                  <input
                    {...getInputProps({
                      placeholder: inputPlaceHolder,
                      ref: inputRef
                    })}
                  />
                  {isOpen ? (
                    <ul className="downshift-dropdown">
                      {results
                        .filter(
                          item =>
                            !inputValue ||
                            item.title
                              .toLowerCase()
                              .includes(inputValue.toLowerCase())
                        )
                        .map((item, index) => (
                          <DropdownItem
                            {...getItemProps({ key: item.title, index, item })}
                            isActive={selectedItem === item}
                            isHighlighted={highlightedIndex === index}
                          >
                            {item.title}
                          </DropdownItem>
                        ))}
                    </ul>
                  ) : null}
                </div>
              )}
            </Downshift>
            <button
              aria-label="Close Search"
              onClick={() =>
                headerContextDispatcher({ payload: { searchOpen: false } })
              }
            >
              <Icon name="close" color="#191919" />
            </button>
          </div>
        </Wrapper>
      </ErrorBoundary>
    </React.Fragment>
  );
};

SearchBox.propTypes = {
  inputPlaceHolder: PropTypes.string,
  hpSearch: PropTypes.string,
  searchResultsPage: PropTypes.string
};

export default SearchBox;
