import emailjs from 'emailjs-com';

export default async function Email(dictionary) {
    console.log(dictionary)
    
    generateHtml = (dictionary) => {
        return '<html><body>dummy</body></html>'
    }
    //let sendAction = await emailjs.sendForm('default_service', 'bbb_auto_school', generateHtml(dictionary), 'user_YMFMqxEjBDsnnfW6RbVgb')
    //console.log(sendAction)
    //return [sendAction.status, sendAction.text]
}

