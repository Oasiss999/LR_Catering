import Form from 'next/form'

export default function Contact(){

    return(
        <div>
            <Form className ="Form" action = 'string'>
                <div className ="FormTitle">
                    <p> Contact Form</p>
                </div>
            </Form>
        </div>
    )
}