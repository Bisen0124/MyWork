import './CSS/Home.css';



function Home() {
    return (
        <>
            <div className="tokyo_tm_home">
                <div className="home_content">
                    <div className="avatar" data-type="wave">
                        <div className="image"></div>
                    </div>
                    <div className="details">
                        <h3 className="name">Sandeep <span>Bisen</span></h3>
                        <p className="job">I am a WordPress Developer at heart and create features that are best suited for the job at hand.</p>
                        <div className="social">
                            <ul>

                                <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"> <i class="fa fa-rss-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"> <i class="fa fa-pinterest-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>



                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home