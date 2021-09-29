import { addCommentThunk } from "../../store/modules/user/thunks";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


const NewComment = () => {

	const [input, setInput] = useState("")

	const dispatch = useDispatch()

	const newComments = useSelector((state) => state.user)

	return (

		<section>


			<div>
				{newComments.comments.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>

			<form action="">

				<input
					type="text"
					value={input}
					placeholder="New comment..."
					onChange={(e) => setInput(e.target.value)} />

				<button
					style={{cursor:"pointer"}}
					type="button"
					onClick={() => dispatch(addCommentThunk(input))}>
					new comment
				</button>
			</form>
		</section>
	)

}

export default NewComment