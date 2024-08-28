import Blog from "../components/Blog";

function Relax(){
    console.log(Blog)
    return(
        <section className="relax">
        
            <h2 className="title-relax">Relax</h2>
            <p className="text-relax">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quis minima ab quo, 
                incidunt placeat blanditiis praesentium 
                dolore? Sunt, facere eos?
            </p>
            <Blog></Blog>
        </section>
    )
}
export default Relax;