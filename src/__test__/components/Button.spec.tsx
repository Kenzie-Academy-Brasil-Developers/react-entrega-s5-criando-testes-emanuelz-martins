import { render, screen } from '@testing-library/react';
import Search from '../../components/Search';

describe('Search Button', () => {
	it('should be able to render an input', () => {
		render(<Search />);

		expect(screen.getByText('Buscar pelo CEP')).toBeTruthy();
	});
});
