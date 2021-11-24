

const Home = () => {
    return (
        <div>
            <div className="d-flex flex-column ">
                <section className="d-flex justify-content-around flex-wrap align-items-center flex-row py-5 px-5" > 
                    <div>
                        <h2 >Plan, Organise and Track <br/> Group Projects With Colleagues  </h2>
                    </div>
                    <div>
                        <img className="col img-fluid" src="/images/homapage_monitor.png" alt=""/>
                    </div>
                </section>
                <section className="d-flex justify-content-around flex-wrap align-items-center flex-row-reverse  py-5 px-5" style={{backgroundColor: "#fff"}}> 
                    <div>
                        <h2>Task Comments </h2>
                        <p>Create comments on task so you dont forget where you left off.</p>
                    </div>
                    <div>
                        <img className="col img-fluid" src="/images/comment.png" alt=""/>
                    </div>
                </section>
                <section className="d-flex justify-content-around flex-wrap align-items-center flex-row py-5 px-5 ">
                    <div>
                        <h2 >Instant Notification </h2>
                        <p>Get notified instant when you being assigned a task.<br/> 
                        Always upto date with your team.</p>
                    </div>
                    <div>
                        <img className="col img-fluid" src="/images/notifications.png" alt=""/>
                    </div>
                </section>
                <section className="d-flex justify-content-around flex-wrap align-items-center flex-row-reverse py-5 px-5 " style={{backgroundColor: '#fff'}}>
                    <div>
                        <h2 >Custom Status </h2>
                        <p>Create Project Specific Status with our Custom Status.</p>
                    </div>
                    <div>
                        <img className="col img-fluid" src="/images/custom_status.png" alt=""/>
                    </div>
                </section>
                <section className="d-flex justify-content-around flex-wrap align-items-center flex-row py-5 px-5 ">
                    <div>
                        <h2 >Feature Rich Editor  </h2>
                        <p>Using a Feature Rich Text Editor on your task. <br/>You can be as precise as you want</p>
                    </div>
                    <div>
                        <img className="col img-fluid" src="/images/texteditor.gif" alt=""/>
                    </div>
                </section>

    </div>
        </div>
    )
}

Home.nav='nav1'


export default Home
