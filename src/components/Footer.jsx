import img from "../assets/img/img";


function Footer() {
    return(
        <footer>
            <section>
                <div className="menciones">
                    <h4>Mencionado en</h4>
                    <div>
                        <p>planetaTour</p>
                        <p>blog de viajes</p>
                        <p>skycloud</p>
                        <p>mundo viajes</p>
                    </div>
                </div>
                <div className="Social-footer">
                    <span>
                        <i className='bx bxl-facebook'></i>
                        <p>Facebook</p>
                    </span><span>
                        <i className='bx bxl-instagram'></i>
                        <p>Instagram</p>
                    </span><span>
                        <i className='bx bxl-twitter'></i>
                        <p>Twitter</p>
                    </span><span>
                        <i className='bx bxl-pinterest-alt'></i>
                        <p>Pinterest</p>
                    </span>
                </div>
                <div className="imagen-footer">
                    <img src={img.bosque} alt="" />
                    <img src={img.lago} alt="" />
                    <img src={img.piramides} alt="" />
                    <img src={img.comida} alt="" />
                </div>
            </section>
            <ul className="footer-abouteMe">
                <li className="aboutMe">
                    <img src={img.persona} alt=""/>
                    <div>
                        <h3>Sobre Mí</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed officia voluptatem itaque fugiat accusamus, 
                            sit sunt aut inventore quisquam?
                        </p>
                        <a href="">Leer más</a>
                    </div>
                </li>
                <li className="contact">
                    <h2>Unete a mi lista de correo</h2>
                    <form>
                        
                        <label htmlFor="EmailInput">Email</label>
                        <input id="EmailInput" type="text"  placeholder="Ingresa tu email aqui"/>
                    
                        <button>Unirse</button>
                    </form>
                   
                </li>
                <li className="footer-social">
                    <div>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-pinterest-alt'></i>
                        <i className='bx bxl-twitter'></i>
                    </div>
                    <p>©2024 Creado por NB</p>
                    <p>Trotamundos con Wix.com</p>
                </li>
                
                <button className="button-footer"><i className='bx bx-chevron-up'></i></button>
            </ul>
        </footer>
    )
}
export default Footer;