App = {
	inquirer : null,
	prompt   : null,
	init : () => {
		App.inquirer = require('inquirer')
		App.prompt   = App.inquirer.createPromptModule()
		App.prompt([
			{
				type: 'input',
				name: 'name',
				default : 'Diogo',
				message : 'Qual o seu nome?'
			},
			{
				type: 'list',
				name: 'band',
				message: 'Qual sua banda preferida?',
				choices : [
					{
						name : 'metallica',
						value : 'Metallica'
					},
					{
						name : 'pink-floyd',
						value : 'Pink Floyd'
					}
				]
			}
		]).then(answers => {
			console.log(answers);
		});
	}
}

App.init();