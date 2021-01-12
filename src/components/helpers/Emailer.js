import emailjs from 'emailjs-com';

const start_template = `
<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  color: #ffffff;
  background-color: #13b8e0;
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<table>
  <tr>
    <th>&nbsp;</th>
    <th>&nbsp;</th>
  </tr>
    `

const end_template = `
</table>

</body>
</html>
`

const ServiceEmail = {
  service_id: "school_gmail",
  template_id: "bbb_auto_school",
  user: 'user_YMFMqxEjBDsnnfW6RbVgb'
}

const ServiceEmailBackup = {
  service_id: "school_gmail",
  template_id: "bbb_auto_school_clone",
  user: 'user_YMFMqxEjBDsnnfW6RbVgb'
}

const ParentClassEmail = {
  service_id: "school_gmail",
  template_id: "template_parent",
  user: 'user_YMFMqxEjBDsnnfW6RbVgb'
}

const generateHtmlFromDictionary = (dictionary) => {
  var result = start_template
  Object.keys(dictionary).forEach(function (key) {
    result += "<tr><td>" + key + "</td><td>" + dictionary[key] + "</td></tr>"
  })
  result += end_template
  return result
}

export async function SendDrivingServiceEmail(dictionary){
  var message = {
    "first_name": dictionary["First Name"],
    "last_name": dictionary["Last Name"],
    "student_email": dictionary["Student Email"],
    "parent_email": dictionary["Parent Email"],
    "message": generateHtmlFromDictionary(dictionary)
  }

  var sendAction = "";
  try {
    sendAction = await emailjs.send(ServiceEmail['service_id'], ServiceEmail['template_id'], message, ServiceEmail['user'])
  } catch (exception) {
    console.log(exception)
  } console.log(sendAction)

  return [sendAction.status, sendAction.text]
}

export async function SendDrivingServiceBackupEmail(dictionary, [previousStatus, reason]) {
  var message = {
    "message": generateHtmlFromDictionary(dictionary),
    "previousStatus": previousStatus,
    "reason": reason
  }
  var sendAction = "";
  try {
    sendAction = await emailjs.send(ServiceEmailBackup['service_id'], ServiceEmailBackup['template_id'], message, ServiceEmailBackup['user'])
  } catch (exception) {
    console.log(exception)
  } console.log(sendAction)

  return [sendAction.status, sendAction.text]
}

export async function SendParentClassEmail(dictionary) {
  var message = {
    "first_name": dictionary["First Name"],
    "last_name": dictionary["Last Name"],
    "message": generateHtmlFromDictionary(dictionary)
  }

  var sendAction = "";
  sendAction = await emailjs.send(ParentClassEmail['service_id'], ParentClassEmail['template_id'], message, ParentClassEmail['user'])
  console.log(sendAction)
  return [sendAction.status, sendAction.text]
}

export default [SendDrivingServiceEmail, SendDrivingServiceBackupEmail, SendParentClassEmail];