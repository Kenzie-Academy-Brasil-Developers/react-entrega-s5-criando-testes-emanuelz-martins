import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import requests from '../../../services/index';
import MockAdapter from 'axios-mock-adapter';
import { LocateCepProvider } from '../../../providers/CepProvider';
import App from '../../../App';

const mock = new MockAdapter(requests);

describe('Search page, flux test', () => {
	it('should be not search with a inputed data', async () => {
		mock.onGet('85560000').replyOnce(200, {
			bairro: '',
			cidade: 'Chopinzinho',
			logradouro: '',
			estado_info: {
				area_km2: '199.307,985',
				codigo_ibge: '41',
				nome: 'Paraná',
			},
			cep: '85560000',
			cidade_info: {
				area_km2: '959,692',
				codigo_ibge: '4105409',
			},
			estado: 'PR',
		});

		render(
			<LocateCepProvider>
				<App />
			</LocateCepProvider>
		);

		const input = screen.getByPlaceholderText('Insira o CEP');
		const button = screen.getByText('Buscar pelo CEP');

		fireEvent.change(input, { target: { value: '8556000' } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(
				screen.getByText('CEP inválido! São necessários 8 números')
			).toBeInTheDocument();
		});
	});
});
