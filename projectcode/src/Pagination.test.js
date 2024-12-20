
import React from 'react';
import {screen} from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';
import '@testing-library/jest-dom';

describe('Pagination', () => {
    test('should render pagination', () => {
        render(<Pagination totalPages={10} currentPage={1} />);
        const pagination = screen.getByLabelText('Pagination');
        expect(pagination).toBeInTheDocument();
    });
    test('should click next and previour button button', () => {
        const mockOnPageChange = jest.fn();
        render(<Pagination totalPages={10} currentPage={5} onPageChange={mockOnPageChange} />);
        userEvent.click(screen.getByText('Next'));
        expect(mockOnPageChange).toHaveBeenCalledTimes(1);
        userEvent.click(screen.getByText('Previous'));
        expect(mockOnPageChange).toHaveBeenCalledTimes(2);
    });
    test('should show previour button as disabled when first page record is shown', () => {
        const mockOnPageChange = jest.fn();
        render(<Pagination totalPages={10} currentPage={1} onPageChange={mockOnPageChange} />);
       const previousButton = screen.getByText('Previous');
       expect(previousButton).toBeDisabled();
    });
});