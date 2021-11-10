context('Search', () => {
	it('should be able to cypress search cep', () => {
		cy.visit('http://localhost:3000');
		cy.get('input').type('85560000');
		cy.contains('Buscar pelo CEP').click();
		cy.intercept('GET', '85560000', {
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
		}).as('new-cep');
		cy.contains('Logradouro');
		cy.contains('Número');
		cy.contains('Complemento');
		cy.contains('Bairro');
		cy.contains('Cidade');
		cy.contains('Estado');
	});
});
