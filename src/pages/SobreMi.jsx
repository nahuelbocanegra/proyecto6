import img from "../assets/img/img"


function SobreMi(params) {
    return(
        <article>
            <section>
                <h2>sobre mi</h2>
                <img src={img.persona} alt="" />
            </section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit fugiat consequuntur quod incidunt aperiam quo accusamus error quasi obcaecati, 
                    libero ipsa quae voluptate.
                     Repudiandae consectetur alias blanditiis debitis repellendus nulla!
                </p>

        </article>
    )
}
export default SobreMi;