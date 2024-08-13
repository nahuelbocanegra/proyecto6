import img from "../assets/img/img"

function Blog(){
    return(
        <article className="contentBlog">
            <ul className="list-blog">
                <li className="post-blog">
                    <img src={img.piramides} alt="" />
                    <section>
                        <div className="data-blog-user">
                           <span className="user">
                                <i className='bx bxs-user'></i>
                           </span>
                            <span>
                                <h5>Lorem, ipsum.</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </span>
                        </div>
                        <div>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="content-comment">
                            <span><i className='bx bxs-heart'></i></span>
                            <span><i className='bx bx-comment'></i></span>
                        </div>
                    </section>
                </li>
                <li className="post-blog">
                    <img src={img.montaña} alt="" />
                    <section>
                        <div className="data-blog-user">
                            <span className="user">
                                    <i className='bx bxs-user'></i>
                            </span>
                                <span>
                                    <h5>Lorem, ipsum.</h5>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </span>
                            </div>
                        <div>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="content-comment">
                            <span><i className='bx bxs-heart'></i></span>
                            <span><i className='bx bx-comment'></i></span>
                        </div>
                    </section>
                </li>
               
                <li className="post-blog">
                    <img src={img.comida} alt="" />
                    <section>
                        <div className="data-blog-user">
                           <span className="user">
                                <i className='bx bxs-user'></i>
                           </span>
                            <span>
                                <h5>Lorem, ipsum.</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </span>
                        </div>
                        <div>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elite.
                            </p>
                        </div>
                        <div className="content-comment">
                            <span><i className='bx bxs-heart'></i></span>
                            <span><i className='bx bx-comment'></i></span>
                        </div>
                    </section>
                </li> 
            </ul>
        </article>
    )
}

export default Blog;