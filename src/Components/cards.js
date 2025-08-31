export default function Card ({ id, title, description, img, icon}) {
        return (
                <div className='card' key={id}>
                    <div className='card-img'>
                        <img src={img} alt={title} />
                    </div>
                    <div className='card-content'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button className="btn">
                            <a href = '#contacts'>Get in touch</a> {icon}
                        </button>
                    </div>
                </div>
          )
}