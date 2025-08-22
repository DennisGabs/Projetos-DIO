interface ICard {
  id: number,
  title: string,
  description: string
}

export const Card = ({id, title, description}: ICard) => {
  return (
    <>
      <p>Card ID: {id}</p>
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  )
}