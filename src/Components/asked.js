export default function Asked ({ id, title, description, icon}) {
        return (
                <div className='ask-card' key={id}>
                    <div className='ask-icon'>
                        {icon}
                    </div>
                    <div className='ask-content'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
          )
}