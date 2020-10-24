// este socotroco combina todos los middlewares que le pases

export const Middlewares = fun => message => {
	// por ahora no hay que hacer nada mas que mapear los comandos actuales, y si coincide, ejecutarlo
	return fun
		.map(e => message.content.startsWith(e.prefix) && e.exec(message))
		.filter(Boolean).length;
};
// logea memoria usada
export const logMemUsg = () => {
	console.log(
		`The script uses approximately ${Math.round(
			(process.memoryUsage().heapUsed / 1024 / 1024 + Number.EPSILON) *
				100
		) / 100} MB`
	);
};
