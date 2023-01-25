sendMail = () => {
      const usrObj = {
            from_name: document.getElementById("usrName").value,
            email_id: document.getElementById("usrMail").value,
            message: document.getElementById("usrMsg").value
      }
      emailjs.send("service_s1ri2s5", "template_uxsf4pi", usrObj).then((res) => {
            alert("Mail Sent Sucessfuly")
      })
}