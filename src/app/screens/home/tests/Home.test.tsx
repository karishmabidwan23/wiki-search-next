import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react';
import { Home } from '../Home';
import { searchData } from './fixture';
import { renderWithTheme } from '@/app/test-utils/renderUtils';

const handleClear = jest.fn();

jest.mock('../useHome', () => ({
  useHome: () => ({
    searchData,
    isSearchLoading: false,
    searchTerm: '',
    handleClear,
    onSelectPage: jest.fn(),
    searchDetailDataSanitized: null,
    isSearchDetailFetching: false,
    isErrorDetail: false,
    isSearchError: false,
    showSearchResult: true,
    searchHistory: [],
    searchListRef: null,
    theme: { size: { contentWrapper: 100, listHeight: 100 }, spacing: { xl: 10 } },
    handleSubmit: jest.fn(),
  }),
}));


describe('test HomeComponent', () => {
  it('should show search input', () => {
    renderWithTheme(<Home />);
    expect(screen.getByPlaceholderText('Type to search here...')).toBeInTheDocument();
  });

  it('should display search result when we have data', () => {
    renderWithTheme(<Home />);
    expect(screen.getByText(searchData[0].title)).toBeInTheDocument();
    expect(screen.getByText(searchData[1].title)).toBeInTheDocument();
  });

  it('should call handle clear function', () => {
    renderWithTheme(<Home />);
    fireEvent.click(screen.getByAltText('cross-icon'));
    expect(handleClear).toHaveBeenCalled();
  });

});
