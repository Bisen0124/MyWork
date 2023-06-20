import './CSS/Contact.css'

function Contact() {
    return (
        <>
            <div className='contact_wrapper '>
                <div class="tokyo_tm_title">
                    <div class="title_flex">
                        <div class="left">
                            <span>Contact</span>
                            <h3>Get in Touch</h3>
                        </div>
                    </div>
                </div>
                <div class="fields">
                    <form>
                        {/* <div class="returnmessage"></div> */}
                        {/* <div class="empty_notice"><span>Please Fill Required Fields</span></div> */}
                        <div class="first">
                            <ul>
                                <li>
                                    <input id="name" type="text" placeholder="Name"/>
                                </li>
                                <li>
                                    <input id="email" type="text" placeholder="Email"/>
                                </li>
                            </ul>
                        </div>
                        <div class="last">
                            <textarea id="message" placeholder="Message"></textarea>
                        </div>
                        <div class="tokyo_tm_button" data-position="left">
                            <a id="send_message" href="#">
                                <span>Send Message</span>
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact