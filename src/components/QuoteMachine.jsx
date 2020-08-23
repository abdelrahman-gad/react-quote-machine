import React from 'react';

class QuoteMachine extends React.Component{
      

    constructor(props){
       super(props);

       this.state={
           quotes:[],
           currentQuote:{},
           counter:0
       }
       this.getQuotes=this.getQuotes.bind(this);
       this.getNewQuote=this.getNewQuote.bind(this);
       this.getQuotes=this.getQuotes.bind(this);
      
    }

  
  
    getQuotes(){
         fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
         .then(resp=>resp.json())
         .then(data=>{
         //    console.log(data.quotes);
            this.setState({
              quotes:data.quotes,
              currentQuote:data.quotes[this.state.counter]            
            });
         });             
    }
    getNewQuote(e){
        e.preventDefault();
        if(this.state.counter < this.state.quotes.length-1){
            this.setState({
                counter:this.state.counter+1,
                currentQuote:this.state.quotes[this.state.counter+1]
            });
        }else{
            this.setState({
                counter:0,
                currentQuote:this.state.quotes[0]
            });
        }

       
        console.log(this.state.counter);
        console.log(this.state.currentQuote);

    }

    render(){
          this.getQuotes();
          let {quote,author} = this.state.currentQuote;
            
         return (
            <section className="quote" id="quote-box">
                    <p className="quote-paragraph"  id="text">
                        <i className="fas fa-quote-right"></i>  
                        {quote}
                    </p>
                   
                   <p className="quote-author" id="author">- {author} </p>
                
                
                    <a className="btn" href="twitter.com/intent/tweet" id="tweet-quote"> <i className="fab fa-twitter"></i> </a>
                
                
                    <a href="#" id="new-quote" onClick={this.getNewQuote} > New Quote</a>
              
            
        </section>
        );
    }
}
export default QuoteMachine;