export const NowPlaying = () => {
	const execute = message => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) {
			return message.channel.send('There is nothing playing.');
		}
		message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
		let i = 0;
		let string = '';

		serverQueue.songs.forEach(element => {
			if (i < 5) {
				string += `:musical_note: ${element.title}\n`;
			}
			i++;
		});
		return message.channel.send('En la lista:\n' + string);
	};

	return {
		prefix: 'nowplaying',
		exec: execute,
	};
};
