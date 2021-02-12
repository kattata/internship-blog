const Severus = ({hideSeverus}) => {

    const handleClick = () => {
        hideSeverus();
    }

    return ( 
        <div className="secret-video">
        <h2>SURPRISE!!!!111!!!11!!!!!1</h2>
        <iframe  className="severus" src="https://www.youtube.com/embed/Tx1XIm6q4r4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <button onClick={handleClick}>Alright, let me read now</button>
        </div>
     );
}
 
export default Severus;