import React from 'react'
import s from './FriendMessage.module.css'
import img from '../Naruto.jpg'
import type { MessageType } from '../HW1'

type FriendMessageType = {
	message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
	return (
		<div
			id={'hw1-friend-message-' + props.message.id}
			className={s.friendMessage}
		>
			<div className={s.friendImageAndText}>
				<img
					id={'hw1-friend-avatar-' + props.message.id}
					// создаёт студент
					src={img}
					alt='img'
					//
				/>
				<div className={s.friendText}>
					<div
						id={'hw1-friend-name-' + props.message.id}
						className={s.friendName}
					>
						{/*создаёт студент*/}
						Naruto
						{/**/}
					</div>
					<pre
						id={'hw1-friend-text-' + props.message.id}
						className={s.friendMessageText}
					>
						{/*создаёт студент*/}
						I've been Hokage for 10 years
						{/**/}
					</pre>
				</div>
			</div>
			<div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
				{/*создаёт студент*/}04:44{/**/}
			</div>
		</div>
	)
}

export default FriendMessage
