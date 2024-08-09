import img from "../assets/img/img"

function Blog(){
    return(
        <article className="contentBlog">
            <ul className="list-blog">
                <li className="post-blog">
                    <img src={img.piramides} alt="" />
                    <section>
                        <div>

                        </div>
                        <div>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Obcaecati iusto consectetur rem exercitationem illum dolore.
                            </p>
                        </div>
                        <div>
                            <span><i class='bx bxs-heart'></i></span>
                            <span><i class='bx bx-comment'></i></span>
                        </div>
                    </section>
                </li>
                <li className="post-blog">
                    <img src={img.montaña} alt="" />
                    <section>
                        <div>

                        </div>
                        <div>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Obcaecati iusto consectetur rem exercitationem illum dolore.
                            </p>
                        </div>
                        <div>
                            <span><i class='bx bxs-heart'></i></span>
                            <span><i class='bx bx-comment'></i></span>
                        </div>
                    </section>
                </li>
               
                <li className="post-blog">
                    <img src={img.comida} alt="" />
                    <section>
                        <div>

                        </div>
                        <div>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Obcaecati iusto consectetur rem exercitationem illum dolore.
                            </p>
                        </div>
                        <div>
                            <span><i class='bx bxs-heart'></i></span>
                            <span><i class='bx bx-comment'></i></span>
                        </div>
                    </section>
                </li> 
            </ul>
        </article>
    )
}

export default Blog;