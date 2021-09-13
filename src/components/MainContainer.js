const MainContainer = ({quote, onClick}) => {
    return (
        <div className="container jumbotron main-container">
            {/* <center> */}
            <div id="quote-box">
                <span className="quote-marks"></span>
                <p id="text" className="">
                    {quote.text} </p>
                <p id="author" className="font-weight-bold">
                    &#8212;{quote.author}</p>
                <button 
                    id="new-quote" 
                    className="form-control btn btn-primary"
                    onClick={onClick}>
                    <i className="fa fa-paper-plane"></i>
                    Generate New!</button>
                <a id="tweet-quote" className="form-control text-center" rel="noreferrer" href="http://twitter.com/intent/tweet" target="_blank">
                    <i className="fa fa-twitter"></i>   
                    Make a Tweet!</a>
            </div>
            {/* </center> */} </div>
    )
}
MainContainer.defaultProps = {
    quote:{
        "text":"Some text here...which can go really really long and annoying sometimes.",
        "author":"Some author"
    },
    onClick:() => {}
}
export default MainContainer
