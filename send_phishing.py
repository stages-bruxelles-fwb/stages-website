#!/usr/bin/python3

import smtplib
from time import sleep

from email.message import EmailMessage
from email.headerregistry import Address
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SENDER = "" # email addr of the sender
APP_PASSWORD = "" # create app password for gmail on https://myaccount.google.com/apppasswords

subject = "Agence Générale de l'Enseignement Supérieur: Accès à Stages Bruxelles"

with open("mail.html", encoding="utf-8") as f:
    content = f.read()

msg = MIMEMultipart("alternative")
msg.attach(MIMEText(content, "html", "utf-8"))

msg['Subject'] = subject
msg['From'] = "Stages Bruxelles <" + SENDER + ">"

with open("adresses.txt", "r", encoding="utf-8") as recipients:
    for recipient in recipients.readlines():
        recipient = recipient.strip()
        if not recipient:
            continue
        msg['To'] = recipient

        with smtplib.SMTP_SSL("smtp.gmail.com", "465") as server:
            server.login(SENDER, APP_PASSWORD)
            server.sendmail(msg['From'], msg["To"], msg.as_string())
        print("Email sent to " + recipient)
        del msg["To"]
        sleep(1)