const isNews = (news) => {
    return(
        news.map((data, i)=>{
            return(
                    <div key={i} className="card w-full lg:w-1/4 bg-base-100 shadow-xl glass">
                        <figure className="px-10 pt-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.title}</h2>
                            <p>{data.description}</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">{data.author}</button>
                            <button className="btn btn-primary">{data.author}</button>
                            </div>
                        </div>
                    </div>
            )
        })
        
    )
}

const noNews = () => {
    return(
        <div>
            <p>Data Tidak Tersedia</p>
        </div>
    )
}

const NewsList = ({news}) => {
    if (!news) {
        return noNews()
    } else {
        return isNews(news)
    }
}

export default NewsList