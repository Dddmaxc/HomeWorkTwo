import s from './Message.module.css'
import img from '../Saske.jpg'
import type { MessageType } from '../HW1'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
	message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
	return (
		<div id={'hw1-message-' + props.message.id} className={s.message}>
			<div className={s.imageAndText}>
				<img
					id={'hw1-avatar-' + props.message.id}
					src={img}

					//
				/>
				<div className={s.text}>
					<div id={'hw1-name-' + props.message.id} className={s.name}>
						{/*создаёт студент*/}
						Saske
						{/**/}
					</div>
					<pre id={'hw1-text-' + props.message.id} className={s.messageText}>
						{/*создаёт студент*/}
						some new text
						{/**/}
					</pre>
				</div>
			</div>
			<div id={'hw1-time-' + props.message.id} className={s.time}>
				{/*создаёт студент*/}
				04:55
				{/**/}
			</div>
		</div>
	)
}

export default Message
