/* eslint-disable curly */
export const Stop = () => {
	const execute = message => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel)
			return message.channel.send(
				'tenes que estar en un canal de voz para parar la musica!'
			);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	};
	return {
		prefix: 'stop',
		exec: execute,
	};
};
