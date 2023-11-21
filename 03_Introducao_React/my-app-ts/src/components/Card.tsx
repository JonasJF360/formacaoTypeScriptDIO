interface ICard {
	id: number
	paragraph: string
	details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
	return (
		<div style={{ border: "1px solid black", margin: "10px", padding: "5px" }}>
			<h1>Card {id}</h1>
			<p><strong>{paragraph}</strong></p>
			<p> {details} </p>
		</div>
	);
}