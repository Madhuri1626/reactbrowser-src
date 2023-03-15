import './style.css';
function Features()
{
    return(
        <div className='row'>
            <div className='column'>
            <div className="div">Declarative</div>
                    <p>React makes it painless to create interactive UIs.
                        Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        <br/><br/>
                        Declarative viewss make your code more predictable and easier to debug.

                    </p>
                </div>
                <div className="column" >
                    <div className="div">Component-Based</div>
                    <p>Build encapsulated components that manage their own state, then compose them  tomake complex UIs.<br></br><br></br>
                        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                    </p>
                </div>
                <div className="column">
                    <div className="div">Learn Once, Write Anywhere</div>
                    <p>We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                        <br></br><br></br>   React can also render on the serrverr using Node and power mobile apps using React Native.
                    </p>

                </div>
            </div>          
    )
}
export default Features;