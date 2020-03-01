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

export async function Email(dictionary) {
  const generateHtml = (dictionary) => {
    var result = start_template
    Object.keys(dictionary).forEach(function (key) {
      result += "<tr><td>" + key + "</td><td>" + dictionary[key] + "</td></tr>"
    })
    result += end_template
    return result
  }

  var message = {
    "first_name": dictionary["First Name"],
    "last_name": dictionary["Last Name"],
    "student_email": dictionary["Student Email"],
    "parent_email": dictionary["Parent Email"],
    "message": generateHtml(dictionary)
  }

  console.log(message)
  var service_id = "school_gmail";

  var template_id = "bbb_auto_school";

  var userId = 'user_YMFMqxEjBDsnnfW6RbVgb';

  var sendAction = "";
  try {
    sendAction = await emailjs.send(service_id, template_id, message, userId)
  } catch (exception) {
    console.log(exception);
  } console.log(sendAction)
  return [sendAction.status, sendAction.text]
}

export async function BackupEmail(dictionary, [previousStatus, reason]) {
  const generateHtml = (dictionary) => {
    var result = start_template
    Object.keys(dictionary).forEach(function (key) {
      result += "<tr><td>" + key + "</td><td>" + dictionary[key] + "</td></tr>"
    })
    result += end_template
    return result
  }
  var message = {
    "message": generateHtml(dictionary),
    "previousStatus": previousStatus,
    "reason": reason
  }
  var service_id = "school_gmail";

  var template_id = "bbb_auto_school_clone";

  var userId = 'user_YMFMqxEjBDsnnfW6RbVgb';

  var sendAction = "";
  sendAction = await emailjs.send(service_id, template_id, message, userId)
  return [sendAction.status, sendAction.text]
}

export default [Email, BackupEmail];