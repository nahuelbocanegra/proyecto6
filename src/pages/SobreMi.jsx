import img from "../assets/img/img"


function SobreMi(params) {
    return(
        <article className="sobreMi">
            <section className="cont-sobreMi">
                <h2>sobre mi</h2>
                <img className="img-sobreMi" src={img.persona} alt="" />
            </section>
                <p className="text-sobreMi">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit fugiat consequuntur quod incidunt aperiam quo accusamus error quasi obcaecati, 
                    libero ipsa quae voluptate.
                     Repudiandae consectetur alias blanditiis debitis repellendus nulla!
                </p>

        </article>
    )
}
export default SobreMi;