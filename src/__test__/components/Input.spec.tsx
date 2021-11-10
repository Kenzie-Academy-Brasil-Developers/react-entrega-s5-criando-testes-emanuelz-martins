import { render, screen } from '@testing-library/react';
import Search from '../../components/Search';

describe('Search Input', () => {
	it('should be able to render an input', () => {
		render(<Search />);

		expect(screen.getAllByPlaceholderText('Insira o CEP')).toBeTruthy();
	});
});
